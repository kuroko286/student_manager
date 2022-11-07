package com.kuroko.backendspringboot.data.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "course_point")
public class Point {
    @EmbeddedId
    @JsonIgnore
    private PointKey id;
    @ManyToOne
    @MapsId("studentId")
    @JoinColumn(name = "student_id")
    private Student student;
    @ManyToOne
    @MapsId("courseId")
    @JoinColumn(name = "course_id")
    private Course course;
    private Double point;

    public Point() {
    }
    

    public Point(PointKey id, Student student, Course course, Double point) {
        this.id = id;
        this.student = student;
        this.course = course;
        this.point = point;
    }


    public Point(PointKey id, Double point) {
        this.id = id;
        this.point = point;
    }

    public PointKey getId() {
        return id;
    }

    public void setId(PointKey id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public Double getPoint() {
        return point;
    }

    public void setPoint(Double point) {
        this.point = point;
    }
}
