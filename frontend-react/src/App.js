import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import StudentForm from "./pages/StudentForm";
import StudentUpdateForm from "./pages/StudentUpdateForm";
import StudentView from "./pages/StudentView";
import CourseInfo from "./pages/CourseInfo";
import UpdateStudentPoint from "./pages/UpdateStudentPoint";
import DangKyHoc from "./pages/DangKyHoc";
import ThemSinhVien from "./pages/ThemSinhVien";
import UpdateCoursePoint from "./pages/UpdateCoursePoint";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/add" element={<StudentForm></StudentForm>}></Route>
          <Route path="/update" element={<StudentUpdateForm></StudentUpdateForm>}></Route>
          <Route path="/view" element={<StudentView></StudentView>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/courses/info" element={<CourseInfo></CourseInfo>}></Route>
          <Route path="/courses/add" element={<ThemSinhVien></ThemSinhVien>}></Route>
          <Route path="/courses/update" element={<UpdateCoursePoint></UpdateCoursePoint>}></Route>
          <Route path="/update-student-point" element={<UpdateStudentPoint></UpdateStudentPoint>}></Route>
          <Route path="/dang-ky-hoc" element={<DangKyHoc></DangKyHoc>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
