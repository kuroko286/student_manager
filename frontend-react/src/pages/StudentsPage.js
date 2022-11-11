import React, { useState } from "react";
import StudentTable from "../components/StudentTable";
import Button from "../components/Button";
import Search from "../components/Search";

function StudentsPage() {

  return (
    <>
      <Button label="Add Student" linkTo="/add"></Button>
      <br />
      <StudentTable></StudentTable>
    </>
  );
}

export default StudentsPage;
