import React from "react";
import { useEffect, useState } from "react";
import {
  getCourseById,
  getStudentsByCourseId,
} from "../services/CourseService";
import { Link } from "react-router-dom";

function CourseInfo() {
  let index = 1;
  const [course, setCourse] = useState({
    id: localStorage.getItem("courseId"),
    name: "",
    credit: "",
  });
  const [students, setStudents] = useState([]);

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
      <Link
        to="/courses/update"
        className="link btn btn-success mt-4 ms-4"
      >
        <span>Cập nhật điểm</span>
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
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{index++}</td>
                <td>{student.msv}</td>
                <td>{student.name}</td>
                <td>{"todo"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CourseInfo;
