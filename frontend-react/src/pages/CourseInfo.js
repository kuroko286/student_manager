import React from "react";
import { useEffect, useState } from "react";
import {
  deleteStudentInCourse,
  getCourseById,
  getStudentsByCourseId,
} from "../services/CourseService";
import { Link } from "react-router-dom";
import Point from "../components/Point";

function CourseInfo() {
  let index = 1;
  const [course, setCourse] = useState({
    id: localStorage.getItem("courseId"),
    name: "",
    credit: "",
  });
  const [students, setStudents] = useState([]);
  const handleDelete = (msv) => {
    deleteStudentInCourse(course.id,msv)
      .then(setStudents(students.filter((student) => student[0].msv !== msv)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourseById(course.id)
      .then((res) => setCourse(res.data))
      .catch((err) => console.log(err));
    getStudentsByCourseId(course.id)
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <Link to="/" className="link btn btn-primary mt-4">
        <i class="fa-solid fa-left-long me-3"></i>
        <span>Back to home</span>
      </Link>
      <Link to="/courses/add" className="link btn btn-success mt-4 ms-4">
        <span>Thêm sinh viên</span>
      </Link>
      <p>Mã môn học: {course.id}</p>
      <p>Tên môn học: {course.name}</p>
      <p>Số tín chỉ: {course.credit}</p>
      <p>Danh sach sinh vien tham gia</p>
      <div className="container-fluid w-auto m-3">
        <table class="table table-hover text-center">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ma Sinh Vien</th>
              <th>Ho va ten</th>
              <th>Diem</th>
              
              <th style={{maxWidth:"10px"}}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{index++}</td>
                <td>{student[0].msv}</td>
                <td>{student[0].name}</td>
                <td><Point courseId={course.id} msv={student[0].msv} point={student[1]}></Point></td>
                <td className="icon red" onClick={() => handleDelete(student[0].msv)}><i class="fa-solid fa-trash-can icon"></i></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseInfo;
