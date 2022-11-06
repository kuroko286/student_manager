package com.kuroko.backendspringboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kuroko.backendspringboot.data.model.Student;
import com.kuroko.backendspringboot.data.payload.request.StudentReq;
import com.kuroko.backendspringboot.data.payload.response.StudentRes;
import com.kuroko.backendspringboot.service.PointService;
import com.kuroko.backendspringboot.service.StudentService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;
    @Autowired
    private PointService pointService;



    @GetMapping(path = "")
    public List<Student> findAll(){
        return studentService.findAll();
    }
    @GetMapping(path = "/{msv}")
    public Student findStudentById(@PathVariable("msv") int msv){
        return studentService.findById(msv);
    }
    @GetMapping(path = "/{msv}/courses")
    public List<Object[]> findAllCourses(@PathVariable("msv") int msv){
        return pointService.getCoursesOfStudent(msv);
    }

    @PostMapping(path = "")
    public StudentRes addStudent(@RequestBody StudentReq s){ 
        return studentService.save(s);
    }

    @PutMapping(path = "/{msv}")
    public ResponseEntity<?> updateStudent(@RequestBody StudentReq sReq,@PathVariable("msv") int msv){
        studentService.update(sReq,msv);
        return ResponseEntity.ok("update student complete");
    }

    @DeleteMapping(path = "/{msv}")
    public ResponseEntity<?> deleteStudent(@PathVariable("msv") int msv){
        studentService.delete(msv);
        return ResponseEntity.ok("Delete success");
    }
    @GetMapping(path = "/{msv}/gpa")
    public double getGpaOfStudent(@PathVariable("msv") int msv){
        return studentService.getGpaOfStudent(msv);
    }
    @GetMapping(path = "/gpa")
    public double[] getGpaOfAllStudent(){
        return studentService.getGpaOfAllStudent();
    }
}
