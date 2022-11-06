package com.kuroko.backendspringboot.data.model;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.kuroko.backendspringboot.data.payload.request.StudentReq;

@Entity
public class Student {
    @Id
    private int msv;
    private String name;
    private Date birthday;
    private String gender;
    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private Set<Point> points;
    
    
    public Student() {
    }

    public Student(StudentReq studentReq) {
        this.msv = studentReq.getMsv();
        this.name = studentReq.getName();
        this.birthday = studentReq.getBirthday();
        this.gender = studentReq.getGender();
    }
    

    public int getMsv() {
        return msv;
    }
    public void setMsv(int msv) {
        this.msv = msv;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Date getBirthday() {
        return birthday;
    }
    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }

    public Set<Point> getPoints() {
        return points;
    }

    public void setPoints(Set<Point> points) {
        this.points = points;
    }
}
