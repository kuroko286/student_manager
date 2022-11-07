package com.kuroko.backendspringboot.data.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kuroko.backendspringboot.data.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>{
    @Query("select s.msv from Student s")
    List<Integer> getAllMsv();
}
