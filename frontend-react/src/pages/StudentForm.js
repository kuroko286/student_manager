import axios from "axios";
import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { addStudent } from "../services/StudentService";

function StudentForm() {
  const [student, setStudent] = useState({ gender: "Male" });

  const handleSubmit = (event) => {
    event.preventDefault();
    addStudent(student)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setStudent({
      msv: "",
      name: "",
      birthday: "",
      gender: "",
    });
  };

  const handleChange = (event) => {
    setStudent((student) => {
      return {
        ...student,
        [event.target.name]: event.target.value,
      };
    });
    //console.log(student);
  };

  return (
    <div className="container-fluid" style={{ maxWidth: "872px" }}>
      <Link to="/" className="link btn btn-primary mt-4">
        <i class="fa-solid fa-left-long me-3"></i>
        <span>Back to home</span>
      </Link>

      <form className="form" onSubmit={handleSubmit}>
        <div class="mb-3 mt-3">
          <label for="msv" class="form-label">
            Mã sinh viên:
          </label>
          <input
            onChange={handleChange}
            type="number"
            class="form-control"
            id="msv"
            placeholder="Nhập mã sinh viên"
            name="msv"
            value={student.msv}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="name" class="form-label">
            Họ tên:
          </label>
          <input
            onChange={handleChange}
            type="text"
            class="form-control"
            id="name"
            placeholder="Nhập họ và tên"
            name="name"
            value={student.name}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="birthday" class="form-label">
            Ngày sinh:
          </label>
          <input
            onChange={handleChange}
            type="date"
            class="form-control"
            id="birthday"
            name="birthday"
            value={student.birthday}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="gender" class="form-label">
            Giới tính:
          </label>
          <select
            onChange={handleChange}
            class="form-select"
            name="gender"
            value={student.gender}
          >
            <option value="Male" selected>
              Male
            </option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary mb-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
