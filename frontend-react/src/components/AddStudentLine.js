import React, { useState,useEffect } from 'react'
import { deleteStudentInCourse, isStudentInCourse, updateStudentPoint } from '../services/CourseService';

function AddStudentLine({courseId,student}) {

    const [state,setState] = useState("");
    useEffect(() => {
      isStudentInCourse(courseId,student.msv).then(res => setState(res.data)).catch(err=>console.log(err));
    }, []);
    const handleDelete = () => {
        setState("out");
        deleteStudentInCourse(courseId,student.msv);
    }
    const handleAdd = () => {
        setState("in");
        updateStudentPoint(courseId,student.msv,0);
    }
    
  return (
    <li className='d-flex justify-content-between mt-4' style={{maxWidth:"300px",height:"50px"}}>
        <span>{student.msv}</span>
        <span>{student.name}</span>
        {state==="in"?<i onClick={handleDelete} class="fa-solid fa-circle-minus red icon"></i>:<i onClick={handleAdd} class="fa-solid fa-circle-plus green icon"></i>}
    </li>
  )
}

export default AddStudentLine;