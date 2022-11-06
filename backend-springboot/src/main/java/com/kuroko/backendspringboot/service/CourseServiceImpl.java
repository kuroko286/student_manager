package com.kuroko.backendspringboot.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kuroko.backendspringboot.data.model.Course;
import com.kuroko.backendspringboot.data.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    @Override
    public Optional<Course> findById(int id) {
        return courseRepository.findById(id);
    }
    
}
