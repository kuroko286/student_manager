package com.kuroko.backendspringboot.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kuroko.backendspringboot.data.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{
    
}
