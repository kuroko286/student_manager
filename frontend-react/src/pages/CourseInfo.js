import React from "react";
import { useEffect, useState } from "react";
import {
  deleteStudentInCourse,
  getCourseById,
  getStudentPoint,
  getStudentsByCourseId,
} from "../services/CourseService";
import { Link } from "react-router-dom";
import Point from "../components/Point";

function CourseInfo() {
  let index = 1;
  const [pointSum, setPointSum] = useState(0);
  const [course, setCourse] = useState({
    id: localStorage.getItem("courseId"),
    name: "",
    credit: "",
  });
  const [students, setStudents] = useState([]);
  const handleDelete = async (msv) => {
    await deleteStudentInCourse(course.id, msv)
      .then(setStudents(students.filter((student) => student[0].msv !== msv)))
      .catch((err) => console.log(err));
    await getStudentPoint(course.id, msv)
      .then((res) => setPointSum(pointSum - res.data))
      .catch((err) => console.log(err));
  };
  const updatePointSum = (quantity) => {
    setPointSum(pointSum + quantity);
  };

  useEffect(() => {
    getCourseById(course.id)
      .then((res) => setCourse(res.data))
      .catch((err) => console.log(err));
    getStudentsByCourseId(course.id)
      .then((res) => {
        setStudents(res.data);
        setPointSum(
          res.data.map((s) => s[1]).reduce((prev, curr) => prev + curr, 0)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Link to="/courses" className="link btn glass mt-4">
        <i class="fa-solid fa-left-long me-3"></i>
        <span>Back</span>
      </Link>
      <Link to="/courses/add" className="link btn glass mt-4 ms-4">
        <span>Thêm sinh viên</span>
      </Link>
      <h3 style={{ marginTop: "40px" }}>Chi tiết môn học</h3>
      <div className="course-info">
        <p>
          <span className="info-title">Mã môn học:</span>
          {course.id}
        </p>
        <p>
          <span className="info-title">Tên môn học:</span>
          {course.name}
        </p>
        <p>
          <span className="info-title">Số tín chỉ:</span>
          {course.credit}
        </p>
      </div>
      {students.length === 0 ? (
        <h3>Không có sinh viên nào tham gia</h3>
      ) : (
        <>
          <h3>Danh sách sinh viên tham gia</h3>
          <div className="container-fluid w-auto m-3">
            <table class="table table-hover text-center">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Mã Sinh Viên</th>
                  <th>Họ Và Tên</th>
                  <th>Điểm</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  return (
                    <tr className="border-dark">
                      <td>{index++}</td>
                      <td>{student[0].msv}</td>
                      <td>{student[0].name}</td>
                      <td>
                        <Point
                          courseId={course.id}
                          msv={student[0].msv}
                          point={student[1]}
                          updatePoint={updatePointSum}
                        ></Point>
                      </td>
                    </tr>
                  );
                })}
                <tr className="border-dark">
                  <td
                    colSpan={3}
                    style={{ fontSize: "20px", fontWeight: "500" }}
                  >
                    Điểm trung bình
                  </td>
                  <td colSpan={2}>{(pointSum / students.length).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(CourseInfo);
