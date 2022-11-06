import React from "react";
import StudentTable from "../components/StudentTable";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <button className="btn btn-primary m-4">
        <Link to="/add" className="link">
          Add Student
        </Link>
      </button>
      <button className="btn btn-success m-4">
        <Link to="/courses" className="link">
          Danh Sách Khóa Học
        </Link>
      </button>
      <br />
      <StudentTable></StudentTable>
    </>
  );
}

export default Home;
