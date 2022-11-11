import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getStudents,
  deleteStudentById,
  getStudentById,
} from "../services/StudentService";
import Search from "./Search";

function StudentTable() {
  const [students, setStudents] = useState([]);

  const handleDelete = (msv) => {
    deleteStudentById(msv)
      .then(setStudents(students.filter((student) => student.msv !== msv)))
      .catch((err) => console.log(err));
  };

  const setData = (student) => {
    localStorage.setItem("msv", student.msv);
  };
  const findStudent = (msv) => {
    getStudentById(msv)
      .then((res) => {
        setStudents([res.data])})
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStudents().then((res) => setStudents(res.data));
  }, []);

  return (
    <div className="container-fluid w-auto m-3 glass">
      <Search submit={findStudent}></Search>
      {students[0] === "" ? <h3>Không tìm thấy sinh viên</h3>:(
        <table class="table table-hover text-center">
        <thead>
          <tr>
            <th>Mã sinh viên</th>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr className="border-dark">
              <td className="data">{student.msv}</td>
              <td className="data">{student.name}</td>
              <td className="data">{student.birthday}</td>
              <td className="data">{student.gender}</td>
              <td style={{ maxWidth: "90px" }}>
                <button
                  className="btn btn-primary m-1"
                  style={{ padding: "3px" }}
                  onClick={() => setData(student)}
                >
                  <Link to="/update" className="link" style={{ color: "#fff" }}>
                    Update
                  </Link>
                </button>

                <button
                  onClick={() => setData(student)}
                  className="btn btn-success m-1"
                  style={{ padding: "3px" }}
                >
                  <Link to="/view" className="link" style={{ color: "#fff" }}>
                    View
                  </Link>
                </button>
                <button
                  onClick={() => handleDelete(student.msv)}
                  className="btn btn-danger m-1"
                  style={{ padding: "3px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}

export default StudentTable;
