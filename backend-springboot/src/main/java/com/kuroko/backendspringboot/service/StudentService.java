package com.kuroko.backendspringboot.service;

import java.util.List;

import com.kuroko.backendspringboot.data.model.Course;
import com.kuroko.backendspringboot.data.model.Student;
import com.kuroko.backendspringboot.data.payload.request.StudentReq;
import com.kuroko.backendspringboot.data.payload.response.StudentRes;

public interface StudentService {
    List<Student> findAll();
    Student findById(int msv);
    StudentRes save(StudentReq studentReq);
    void update(StudentReq sReq, int msv);
    void delete(int msv);
    List<Course> findAllCourse(int msv);
    double getGpaOfStudent(int msv);
    double[] getGpaOfAllStudent();
    List<Integer> getAllMsv();
}
