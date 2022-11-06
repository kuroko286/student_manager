package com.kuroko.backendspringboot.data.payload.response;

import java.sql.Date;

import com.kuroko.backendspringboot.data.model.Student;

public class StudentRes {

    private int msv;
    private String name;
    private Date birthday;
    private String gender;

    public StudentRes(Student s){
        this.msv = s.getMsv();
        this.name = s.getName();
        this.birthday = s.getBirthday();
        this.gender = s.getGender();
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
    
}
