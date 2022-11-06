package com.kuroko.backendspringboot.service;

import java.util.List;
import java.util.Optional;

import com.kuroko.backendspringboot.data.model.Course;

public interface CourseService {
    List<Course> findAll();
    Optional<Course> findById(int id);
    
}
