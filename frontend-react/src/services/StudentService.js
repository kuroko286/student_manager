import axios from "axios";

const STUDENT_BASE_URL = "http://localhost:8080/api/students";

export const getStudents = () => {
  return axios.get(STUDENT_BASE_URL);
};
export const getStudentById = (msv) => {
  return axios.get(STUDENT_BASE_URL + "/" + msv);
};
export const deleteStudentById = (msv) => {
  return axios.delete(STUDENT_BASE_URL + "/" + msv);
};
export const updateStudentById = (msv, newStudent) => {
  return axios({
    method: "put",
    url: STUDENT_BASE_URL + "/" + msv,
    data: newStudent,
  });
};
export const getCoursesByStudentId = (msv) => {
  return axios.get(STUDENT_BASE_URL + "/" + msv + "/courses");
};
export const addStudent = (student) => {
  return axios({
    method: "post",
    url: STUDENT_BASE_URL,
    data: student,
  });
};
export const getGpaOfStudent = (msv) => {
  return axios.get(STUDENT_BASE_URL + "/" + msv + "/gpa");
}
export const getGpaOfAllStudent = () => {
  return axios.get(STUDENT_BASE_URL + "/gpa");
}
