import dotenv from 'dotenv';

dotenv.config({path: '../.env'});

export function getEndPointForDoctype(doctype){
  const current_path = process.cwd()
  const host = process.env.HOST
  const protocol = process.env.PROTOCOL

  var endpoint
  switch(doctype){
    case 'Lesson':
      endpoint = process.env.LESSONS_END_POINT
      break
    case 'Chapter':
      endpoint = process.env.CHAPTER_END_POINT
      break
    case 'Course':
      endpoint = process.env.COURSE_END_POINT
      break
    case 'Quiz':
      endpoint = process.env.QUIZ_END_POINT
      break
    default:
      break

  }
  

  const baseUrl = `${protocol}://${host}/api/resource/${endpoint}`
  return baseUrl
  console.log("baseUrl", baseUrl)
}