package com.kuroko.backendspringboot.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kuroko.backendspringboot.data.model.Point;
import com.kuroko.backendspringboot.data.model.PointKey;

@Repository
public interface PointRepository extends JpaRepository<Point,PointKey>{
    @Query("SELECT p.course,p.point from Point p where p.student.msv=:msv")
    List<Object[]> getCoursesOfStudent(@Param("msv") int msv);
    @Query("select p.student,p.point from Point p where p.course.id=:id")
    List<Object[]> getStudentByCourse(@Param("id") int id);
    @Query("select p.student.msv from Point p where p.course.id=:id")
    List<Integer> getMsvByCourse(@Param("id") int id);
}
