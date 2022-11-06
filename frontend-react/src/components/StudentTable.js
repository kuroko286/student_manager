import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStudents, deleteStudentById } from "../services/StudentService";

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

  useEffect(() => {
    getStudents().then((res) => setStudents(res.data));
  }, []);

  return (
    <div className="container-fluid w-auto m-3">
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
            <tr>
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
                  <Link to="/update" className="link">
                    Update
                  </Link>
                </button>
                <button
                  onClick={() => handleDelete(student.msv)}
                  className="btn btn-danger m-1"
                  style={{ padding: "3px" }}
                >
                  Delete
                </button>
                <button
                  onClick={() => setData(student)}
                  className="btn btn-success m-1"
                  style={{ padding: "3px" }}
                >
                  <Link to="/view" className="link">
                    View
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

export default StudentTable;
