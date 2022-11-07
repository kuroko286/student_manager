package com.kuroko.backendspringboot.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

public interface PointService {
    List<Object[]> getCoursesOfStudent(int msv);
    List<Object[]> getStudentsOfCourse(int courseId);
    ResponseEntity<?> updateStudentPoint(double newPoint,int courseId,int msv);
    ResponseEntity<?> deleteStudentPoint(int courseId,int msv);
    List<Integer> getMsvByCourse(int id);
    ResponseEntity<?> isStudentInCourse(int id, int msv);

}
