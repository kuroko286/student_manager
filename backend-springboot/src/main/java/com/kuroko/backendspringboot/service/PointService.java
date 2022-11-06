package com.kuroko.backendspringboot.service;

import java.util.List;

import com.kuroko.backendspringboot.data.model.Student;

public interface PointService {
    List<Object[]> getCoursesOfStudent(int msv);
    List<Student> getStudentsOfCourse(int courseId);
}
