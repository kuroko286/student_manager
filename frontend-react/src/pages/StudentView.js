import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCoursesByStudentId,
  getStudentById,
} from "../services/StudentService";

export default function StudentView() {
  let index = 1;
  let creditSum = 0;
  let pointSum = 0;
  const [student, setStudent] = useState({
    msv: localStorage.getItem("msv"),
    name: "",
    birthday: "",
    gender: "",
  });
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getStudentById(student.msv)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));

    getCoursesByStudentId(student.msv)
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/students" className="link btn mt-4 mb-5 glass">
        <i class="fa-solid fa-left-long me-3"></i>
        <span>Back to home</span>
      </Link>
      <h3>Thông tin chi tiết</h3>
      <div className="student-info">
        <p>
          <span className="info-title">Mã Sinh Viên: </span>
          {student.msv}
        </p>
        <p>
          <span className="info-title">Họ và tên: </span>
          {student.name}
        </p>
        <p>
          <span className="info-title">Ngày Sinh: </span>
          {student.birthday}
        </p>
        <p>
          <span className="info-title">Giới Tính: </span>
          {student.gender}
        </p>
      </div>
      <br />
      {courses.length === 0 ? (
        <h3>Không có khóa học nào</h3>
      ) : (
        <div>
          <h3>Các khóa học đã tham gia</h3>
          <div className="container-fluid w-auto m-3">
            <table className="table table-hover text-center glass">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Khóa Học</th>
                  <th>Tín chỉ</th>
                  <th>Điểm</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => {
                  creditSum += course[0].credit;
                  pointSum += course[1] * course[0].credit;
                  return (
                    <tr key={index} className="border-dark">
                      <td>{index++}</td>
                      <td>{course[0].name}</td>
                      <td>{course[0].credit}</td>
                      <td>{course[1]}</td>
                    </tr>
                  );
                })}

                <tr>
                  <td
                    colSpan={2}
                    style={{ fontSize: "20px", fontWeight: "500" }}
                  >
                    Total
                  </td>
                  <td>{creditSum}</td>
                  <td>
                    {creditSum === 0 ? 0 : (pointSum / creditSum).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
