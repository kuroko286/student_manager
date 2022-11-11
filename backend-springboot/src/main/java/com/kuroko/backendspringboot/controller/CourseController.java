package com.kuroko.backendspringboot.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kuroko.backendspringboot.data.model.Course;
import com.kuroko.backendspringboot.data.payload.request.PointReq;
import com.kuroko.backendspringboot.service.CourseService;
import com.kuroko.backendspringboot.service.PointService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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
    public List<Object[]> findStudentByCourseId(@PathVariable("id") int id){
        return pointService.getStudentsOfCourse(id);
    }
    @PostMapping(path = "{id}/students/{msv}")
    public ResponseEntity<?> updateStudentPoint(@PathVariable("id") int id,@PathVariable("msv") int msv,@RequestBody PointReq newPoint){
        return pointService.updateStudentPoint(newPoint.getPoint(),id, msv);
    }
    @DeleteMapping(path = "{id}/students/{msv}")
    public ResponseEntity<?> deleteStudentPoint(@PathVariable("id") int id,@PathVariable("msv") int msv){
        return pointService.deleteStudentPoint(id, msv);
    }
    @GetMapping(path = "{id}/students/msv")
    public List<Integer> getMsvByCourse(@PathVariable("id") int id){
        return pointService.getMsvByCourse(id);
    }
    @GetMapping(path = "{id}/students/{msv}")
    public ResponseEntity<?> isStudentInCourse(@PathVariable("id") int id,@PathVariable("msv") int msv){
        return pointService.isStudentInCourse(id,msv);
    }
    @GetMapping(path = "{id}/students/{msv}/point")
    public Integer getPoint(@PathVariable("id") int id,@PathVariable("msv") int msv){
        return pointService.getPointByStudentMsv(id, msv);
    }
}
