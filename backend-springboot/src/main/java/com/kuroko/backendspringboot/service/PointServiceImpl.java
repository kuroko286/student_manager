package com.kuroko.backendspringboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kuroko.backendspringboot.data.model.Student;
import com.kuroko.backendspringboot.data.repository.PointRepository;

@Service
public class PointServiceImpl implements PointService{

    @Autowired
    private PointRepository pointRepository;
    @Override
    public List<Object[]> getCoursesOfStudent(int msv) {
        return pointRepository.getCoursesOfStudent(msv);
    }
    @Override
    public List<Student> getStudentsOfCourse(int courseId) {
        return pointRepository.getStudentByCourse(courseId);
    }
    
}
