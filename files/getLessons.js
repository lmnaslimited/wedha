
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

const current_path = process.cwd();

// Function to ensure directories exist
function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
}

// Function to update lesson files
function updateLessonFiles(chapterFolderPath, documentDetails) {
  const lessonFileName = `${documentDetails.title}.md`;
  const filePath = path.join(chapterFolderPath, documentDetails.title);
  const lessonFilePath = path.join(chapterFolderPath, documentDetails.title, lessonFileName);

  ensureDirectoryExistence(lessonFilePath);
  fs.writeFile(lessonFilePath, documentDetails.body, { flag: 'w' }, (err) => {
    if (err) {
      console.error('Error writing lesson file:', err);
    } else {
      console.log('Lesson file updated successfully:', lessonFilePath);
    }
  });

  // Prepare metadata excluding specific timestamp fields
  const { body, owner, creation, modified, modified_by, ...metadata } = documentDetails;
  saveMetadata(filePath, documentDetails.title, metadata);
}

// Function to save metadata as JSON
function saveMetadata(folderPath, fileName, data) {
  const filePath = path.join(folderPath, `${fileName}.json`);
  ensureDirectoryExistence(filePath);
  fs.writeFile(filePath, JSON.stringify(data, null, 2), { flag: 'w' }, (err) => {
    if (err) {
      console.error(`Error writing ${fileName} metadata file:`, err);
    } else {
      console.log(`${fileName} metadata file updated successfully:`, filePath);
    }
  });
}

// Fetch and process course data
const courseBaseUrl = getEndPointForDoctype("Course");
const coursePath = path.join(current_path, '..', 'LMS', 'Course');

// Fetch all courses
fetch(`${courseBaseUrl}?&limit_page_length=0`, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(async (data) => {
    if (data && data.data && Array.isArray(data.data)) {
      for (const course of data.data) {
        const courseFolderPath = path.join(coursePath);
        
        // Fetch detailed info for the current course using course.name
        const courseDetailsResponse = await fetch(`${courseBaseUrl}/${course.name}`, requestOptions);
        if (!courseDetailsResponse.ok) {
          throw new Error(`HTTP error while fetching course details! Status: ${courseDetailsResponse.status}`);
        }
        const courseDetails = await courseDetailsResponse.json();
        
        // Save course metadata excluding specific timestamp fields
        // Prepare course metadata excluding specific timestamp fields
        const { owner, creation, modified, modified_by, instructors, chapters, ...courseMetadata } = courseDetails.data;

        // Process chapters to remove unwanted fields from each chapter in the child table
        const processedChapters = chapters.map(chapter => {
            const { owner, creation, modified, modified_by, ...chapterMetadata } = chapter;
            return chapterMetadata;  // Return the chapter without the unwanted fields
        });

        // Update courseMetadata to include processed chapters
        courseMetadata.chapters = processedChapters;

        saveMetadata(courseFolderPath, courseDetails.data.title, courseMetadata);

        // Fetch and process chapters associated with this course
        const chapterBaseUrl = getEndPointForDoctype("Chapter");
        const chapterPath = path.join(current_path, '..', 'LMS', 'Chapter');
        
        fetch(`${chapterBaseUrl}?&limit_page_length=0`, requestOptions)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(async (data) => {
            if (data && data.data && Array.isArray(data.data)) {
              for (const chapter of data.data) {
                
                // Fetch detailed info for the current chapter using chapter.name
                const chapterDetailsResponse = await fetch(`${chapterBaseUrl}/${chapter.name}`, requestOptions);
                if (!chapterDetailsResponse.ok) {
                  throw new Error(`HTTP error while fetching chapter details! Status: ${chapterDetailsResponse.status}`);
                }
                const chapterDetails = await chapterDetailsResponse.json();
                
                // Save chapter metadata excluding specific timestamp fields
                const { owner, creation, modified, modified_by,lessons, ...chapterMetadata } = chapterDetails.data;
                const processedLessons = lessons.map(lesson => {
                  const { owner, creation, modified, modified_by, ...lessonMetadata } = lesson;
                  return lessonMetadata;  // Return the chapter without the unwanted fields
              });
      
              // Update courseMetadata to include processed chapters
              chapterMetadata.chapters = processedLessons;

                saveMetadata(chapterPath, chapterDetails.data.title, chapterMetadata);

                // Fetch and process lesson data
                const lessonBaseUrl = getEndPointForDoctype("Lesson");
                const lessonPath = path.join(current_path, '..', 'LMS', 'Lessons');
                
                fetch(`${lessonBaseUrl}?fields=["*"]&limit_page_length=0`, requestOptions)
                  .then(response => {
                    if (!response.ok) {
                      throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                  })
                  .then(async (lessonData) => {
                    if (lessonData && lessonData.data && Array.isArray(lessonData.data)) {
                      for (const documentDetails of lessonData.data) {
                        const chapterFolderPath = path.join(lessonPath);
                        updateLessonFiles(chapterFolderPath, documentDetails);
                      }
                    }
                  })
                  .catch(error => {
                    console.error('Error fetching lesson data:', error);
                  });
              }
            }
          })
          .catch(error => {
            console.error('Error fetching chapter data:', error);
          });
      }
    }
  })
  .catch(error => {
    console.error('Error fetching course data:', error);
  });