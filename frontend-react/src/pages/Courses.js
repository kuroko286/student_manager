import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../services/CourseService";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);
  const setCourseId = (course) => {
    localStorage.setItem("courseId",course.id);
  }
  return (
    <div className="container-fluid w-auto m-3">
      <table className="table table-hover text-center glass">
        <thead>
          <tr>
            <th>Mã Môn Học</th>
            <th>Tên Môn Học</th>
            <th>Tín Chỉ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr className="border-dark">
              <td className="data">{course.id}</td>
              <td className="data">{course.name}</td>
              <td className="data">{course.credit}</td>
              <td>
                <button onClick={() => setCourseId(course)} className="btn">
                  <Link to="info" className="link">
                    Xem thêm
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
