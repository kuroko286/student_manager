package com.kuroko.backendspringboot.data.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class PointKey implements Serializable{
    @Column(name = "student_id")
    private int studentId;
    @Column(name = "course_id")
    private int courseId;
    
    public int getStudentId() {
        return studentId;
    }
    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }
    public int getCourseId() {
        return courseId;
    }
    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }
    public PointKey() {
    }
    
    public PointKey(int studentId, int courseId) {
        this.studentId = studentId;
        this.courseId = courseId;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + studentId;
        result = prime * result + courseId;
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        PointKey other = (PointKey) obj;
        if (studentId != other.studentId)
            return false;
        if (courseId != other.courseId)
            return false;
        return true;
    }
}
