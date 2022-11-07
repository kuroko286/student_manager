import React, { useEffect } from 'react'
import { useState } from 'react';
import AddStudentLine from '../components/AddStudentLine';
import { getAllMsvByCourse, getCourseById, getStudentsByCourseId } from '../services/CourseService';
import { getAllMsv, getStudents } from '../services/StudentService';

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
      <ul>
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