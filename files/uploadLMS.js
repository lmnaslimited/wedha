import { getEndPointForDoctype } from "./functions.js";
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Load environment variables
dotenv.config({ path: '../.env' });

// Setup request headers
const myHeaders = new Headers();
myHeaders.append("Authorization", process.env.KEY);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

// Function to process JSON files in a directory
async function processJsonFiles(directory, type) {
  // Read all entries in the directory
  const entries = fs.readdirSync(directory);

  for (const entry of entries) {
    const entryPath = path.join(directory, entry);
    const stats = fs.statSync(entryPath); // Get the stats of the entry

    if (stats.isDirectory()) {
      // If it's a directory, recursively process it
      await processJsonFiles(entryPath, type);
    } else if (stats.isFile() && entry.endsWith('.json')) {
      // If it's a file and has a .json extension
      let jsonData;
      try {
        jsonData = JSON.parse(fs.readFileSync(entryPath, 'utf-8'));
      } catch (error) {
        console.error(`Error reading or parsing JSON file: ${entryPath}`, error.message);
        continue; // Skip to the next file on error
      }

      // Process the JSON data based on its type
      if (type === "course") {
        await processCourse(jsonData);
      } else if (type === "chapter") {
        await processChapter(jsonData);
      } else if (type === "lesson") {
        await processLesson(jsonData);
      }
    }
  }
}



async function processCourse(courseJson) {
  const courseBaseUrl = getEndPointForDoctype("Course");
  const existingCourseResponse = await fetch(`${courseBaseUrl}?filters=[["title", "=", "${courseJson.title}"]]&limit_page_length=1`, requestOptions);
  const existingCourseData = await existingCourseResponse.json();
  const coursePayload = { ...courseJson };
  delete coursePayload.name; // Remove name key
  let response;
  if (existingCourseData.data.length > 0) {
    // Course exists, perform PUT
    response = await fetch(`${courseBaseUrl}/${existingCourseData.data[0].name}`, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(coursePayload),
      redirect: 'follow',
    });
    console.log(`Course updated: ${courseJson.title}`);
  } else {
    // Course does not exist, perform POST
    response = await fetch(courseBaseUrl, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        title: coursePayload.title,
        short_introduction: coursePayload.short_introduction,
        description: coursePayload.description,
        published: coursePayload.published,
        // chapters: coursePayload.chapters // Assuming chapters is an array
      }),
      redirect: 'follow',
    });
  }
}

// Process Chapter
async function processChapter(chapterJson) {
  const chapterBaseUrl = getEndPointForDoctype("Chapter");

  // Check if the chapter already exists
  const existingChapterResponse = await fetch(`${chapterBaseUrl}?filters=[["title", "=", "${chapterJson.title}"], ["course", "=", "${chapterJson.course}"]]&limit_page_length=1`, requestOptions);
  const existingChapterData = await existingChapterResponse.json();

  if (existingChapterData.data.length > 0) {
    // Chapter exists, perform PUT
    await fetch(`${chapterBaseUrl}/${existingChapterData.data[0].name}`, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(
        {
          title: chapterJson.title,
          course: chapterJson.course,
          chapters: chapterJson.chapters,
        }
      ),
      redirect: 'follow',
    });
    console.log(`Chapter updated: ${chapterJson.title}`);
  } else {
    // Chapter does not exist, perform POST
    await fetch(chapterBaseUrl, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        title: chapterJson.title,
        course: chapterJson.course,
      }),
      redirect: 'follow',
    });
    console.log(`Chapter created: ${chapterJson.title}`);
  }
}

// Process Lesson
async function processLesson(lessonJson) {
  const lessonBaseUrl = getEndPointForDoctype("Lesson");
  
  // Construct paths for .meta.json and .md files
  const metaFilePath = path.join('../LMS/Lessons',`${lessonJson.title}`, `${lessonJson.title}.json`);
  const mdFilePath = path.join('../LMS/Lessons',`${lessonJson.title}`, `${lessonJson.title}.md`);

  let lessonContent;
  let lessonMetaData;

  try {
    // Read the lesson content from the .md file
    lessonContent = fs.readFileSync(mdFilePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading lesson content file: ${mdFilePath}`, error.message);
    return; // Exit if there's an error reading the content
  }

  try {
    // Read the metadata from the .meta.json file
    lessonMetaData = JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
  } catch (error) {
    console.error(`Error reading lesson metadata file: ${metaFilePath}`, error.message);
    return; // Exit if there's an error reading the metadata
  }

  // Check if the lesson already exists
  const existingLessonResponse = await fetch(`${lessonBaseUrl}?filters=[["title", "=", "${lessonJson.title}"], ["chapter", "=", "${lessonJson.chapter}"], ["course", "=", "${lessonJson.course}"]]&limit_page_length=1`, requestOptions);
  const existingLessonData = await existingLessonResponse.json();

  const lessonPayload = {body: lessonContent, ...lessonMetaData }; // Combine metadata and content

  // Log the payload for debugging
  // console.log('Lesson Payload:', lessonPayload);

  if (existingLessonData.data.length > 0) {
    // Lesson exists, perform PUT
    await fetch(`${lessonBaseUrl}/${existingLessonData.data[0].name}`, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(lessonPayload),
      redirect: 'follow',
    });
    console.log(`Lesson updated: ${lessonJson.title}`);
  } else {
    // Lesson does not exist, perform POST
    await fetch(lessonBaseUrl, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        body: lessonContent,
        name: lessonJson.name,
        title: lessonJson.title,
        course: lessonJson.course,
        chapter: lessonJson.chapter,
        ...lessonMetaData,
      }),
      redirect: 'follow',
    });
    console.log(`Lesson created: ${lessonJson.title}`);
  }
}


// Execute the script
(async () => {
  try {
    // Process Courses
    await processJsonFiles('../LMS/Course', 'course');

    // Process Chapters
    await processJsonFiles('../LMS/Chapter', 'chapter');

    // Process Lessons
    await processJsonFiles('../LMS/Lessons', 'lesson');
  } catch (error) {
    console.error('Error during processing:', error);
  }
})();