package com.kuroko.backendspringboot.service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kuroko.backendspringboot.data.model.Course;
import com.kuroko.backendspringboot.data.model.Point;
import com.kuroko.backendspringboot.data.model.Student;
import com.kuroko.backendspringboot.data.payload.request.StudentReq;
import com.kuroko.backendspringboot.data.payload.response.StudentRes;
import com.kuroko.backendspringboot.data.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public StudentRes save(StudentReq studentReq) {
        Student s = new Student(studentReq);
        studentRepository.save(s);

        StudentRes sRes = new StudentRes(s);
        return sRes;
    }

    @Override
    public void update(StudentReq sReq, int msv) {
        Optional<Student> s = studentRepository.findById(msv);
        if(s.isPresent()){
            Student s2 = s.get();
            s2.setName(sReq.getName());
            s2.setBirthday(sReq.getBirthday());
            s2.setGender(sReq.getGender());
            studentRepository.save(s2);
        }
    }

    @Override
    public void delete(int msv) {
        studentRepository.deleteById(msv);
    }

    @Override
    public List<Course> findAllCourse(int msv) {
        Optional<Student> sOptional = studentRepository.findById(msv);
        if(sOptional.isPresent()){
            return sOptional.get().getPoints().stream().map(point -> point.getCourse()).collect(Collectors.toList());
        }
        return null;
    }

    @Override
    public Student findById(int msv) {
        if(studentRepository.findById(msv).isPresent()){
            return studentRepository.findById(msv).get();
        }
        return null;
    }

    @Override
    public double getGpaOfStudent(int msv) {
        Optional<Student> sOptional = studentRepository.findById(msv);
        Set<Point> points = sOptional.get().getPoints();
        int totalCredit = 0;
        double totalPoint = 0;
        for (Point point : points) {
            totalCredit+=point.getCourse().getCredit();
            totalPoint+=point.getPoint() * point.getCourse().getCredit();
        }
        if(totalCredit!=0){
            return totalPoint/totalCredit;
        }
        return 0;
    }

    @Override
    public double[] getGpaOfAllStudent() {
        int index = 0;
        List<Student> students = findAll();
        double[] arr = new double[students.size()];
        for(Student s:students){
            arr[index++] = getGpaOfStudent(s.getMsv());
        }
        return arr;
    }

    @Override
    public List<Integer> getAllMsv() {
        return studentRepository.getAllMsv();
    }
    
}
