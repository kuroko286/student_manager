package com.kuroko.backendspringboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kuroko.backendspringboot.data.model.Course;
import com.kuroko.backendspringboot.data.model.Student;
import com.kuroko.backendspringboot.service.CourseService;
import com.kuroko.backendspringboot.service.PointService;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping(path = "/api/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;
    @Autowired
    private PointService pointService;

    @GetMapping(path = "")
    public List<Course> findAll(){
        return courseService.findAll();
    }

    @GetMapping(path = "{id}")
    public Course findById(@PathVariable("id") int id){
        Optional<Course> course = courseService.findById(id);
        if(course.isPresent()){
            return course.get();
        }
        return null;
    }
    @GetMapping(path = "{id}/students")
    public List<Student> findStudentByCourseId(@PathVariable("id") int id){
        return pointService.getStudentsOfCourse(id);
    }
}
