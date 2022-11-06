import axios from "axios";

const COURSE_BASE_URL = "http://localhost:8080/api/courses";

export const getCourses = () => {
  return axios.get(COURSE_BASE_URL);
}
export const getCourseById = (courseId) => {
  return axios.get(COURSE_BASE_URL + "/" + courseId);
}
export const getStudentsByCourseId = (courseId) => {
  return axios.get(COURSE_BASE_URL + "/" + courseId + "/students");
}