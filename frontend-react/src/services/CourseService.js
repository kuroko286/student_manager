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
export const updateStudentPoint = (courseId,msv,newPoint) => {
  return axios({
    method:"post",
    url:COURSE_BASE_URL+"/"+courseId+"/students/"+msv,
    data:{
      "point":newPoint
    }
  });
}
export const deleteStudentInCourse = (courseId,msv) => {
  return axios({
    method:"delete",
    url:COURSE_BASE_URL+"/"+courseId+"/students/"+msv
  })
}
export const getAllMsvByCourse = (courseId) => {
  return axios.get(COURSE_BASE_URL + "/" + courseId+"/students/msv");
}
export const isStudentInCourse = (courseId,msv) => {
  return axios.get(COURSE_BASE_URL + "/" + courseId + "/students/"+msv);
}