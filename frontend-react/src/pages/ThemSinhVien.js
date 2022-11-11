import React, { useEffect } from 'react'
import { useState } from 'react';
import AddStudentLine from '../components/AddStudentLine';
import { getCourseById } from '../services/CourseService';
import {getStudents } from '../services/StudentService';
import { Link } from 'react-router-dom';

function ThemSinhVien() {

  const [course, setCourse] = useState({
    id: localStorage.getItem("courseId"),
    name: "",
    credit: "",
  });
  const [students,setStudents] = useState([]);

  useEffect(()=>{
    getCourseById(course.id).then(res=>setCourse(res.data)).catch(err=>console.log(err));
    getStudents().then(res=>setStudents(res.data)).catch(err=>console.log(err));
  },[])
    
  return (
    <div>
    <Link to="/courses/info" className="link btn glass mt-4">
        <i class="fa-solid fa-left-long me-3"></i>
        <span>Back</span>
      </Link>
      <h3 className='mt-5 mb-3'>Thêm/Bớt sinh viên cho khóa học</h3>
      <ul className='course-list-student'>
        {
          students.map(student => (
            <AddStudentLine student={student} courseId={course.id}></AddStudentLine>
          ))
        }
      </ul>
    </div>
  )
}

export default ThemSinhVien;