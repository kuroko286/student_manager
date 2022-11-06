package com.kuroko.backendspringboot.data.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Course {
    @Id
    private int id;
    private String name;
    private int credit;
    @OneToMany(mappedBy = "course")
    @JsonIgnore
    private Set<Point> points;

    public Course() {
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public int getCredit() {
        return credit;
    }
    public void setCredit(int credit) {
        this.credit = credit;
    }
    public Set<Point> getPoints() {
        return points;
    }
    public void setPoints(Set<Point> points) {
        this.points = points;
    }
}
