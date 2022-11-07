package com.kuroko.backendspringboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.kuroko.backendspringboot.data.model.Point;
import com.kuroko.backendspringboot.data.model.PointKey;
import com.kuroko.backendspringboot.data.repository.CourseRepository;
import com.kuroko.backendspringboot.data.repository.PointRepository;
import com.kuroko.backendspringboot.data.repository.StudentRepository;

@Service
public class PointServiceImpl implements PointService{

    @Autowired
    private PointRepository pointRepository;
    @Autowired
    private CourseRepository courseRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public List<Object[]> getCoursesOfStudent(int msv) {
        return pointRepository.getCoursesOfStudent(msv);
    }
    @Override
    public List<Object[]> getStudentsOfCourse(int courseId) {
        return pointRepository.getStudentByCourse(courseId);
    }
    @Override
    public ResponseEntity<?> updateStudentPoint(double newPoint,int courseId, int msv) {
        Optional<Point> fp = pointRepository.findById(new PointKey(msv,courseId));
        if(fp.isPresent()){
            Point p = fp.get();
            p.setPoint(newPoint);
            pointRepository.save(p);
        }
        else{
            Point p = new Point(new PointKey(msv, courseId),newPoint);
            p.setCourse(courseRepository.findById(courseId).get());
            p.setStudent(studentRepository.findById(msv).get());
            pointRepository.save(p);
        }
        return ResponseEntity.ok("Update point succeed!!!");
    }
    @Override
    public ResponseEntity<?> deleteStudentPoint(int courseId, int msv) {
        pointRepository.deleteById(new PointKey(msv, courseId));
        return ResponseEntity.ok("Delete Point Succeed!!!");
    }
    @Override
    public List<Integer> getMsvByCourse(int id) {
        return pointRepository.getMsvByCourse(id);
    }
    @Override
    public ResponseEntity<?> isStudentInCourse(int id, int msv) {
        if(pointRepository.findById(new PointKey(msv, id)).isPresent()){
            return ResponseEntity.ok("in");
        }
        return ResponseEntity.ok("out");
    }
    
}
