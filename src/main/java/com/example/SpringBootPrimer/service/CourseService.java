package com.example.SpringBootPrimer.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringBootPrimer.model.Course;
import com.example.SpringBootPrimer.repository.CourseRepository;

@Service
public class CourseService {

	@Autowired
	private CourseRepository courseRepository;

	public List<Course> getAllCourses() {
		List<Course> listCourses = new ArrayList<Course>();
		courseRepository.findAll().forEach(listCourses::add);
		return listCourses;
	}

	public Course getCourse(Long id) {
		return courseRepository.findOne(id);
	}
	
	public void addCourse(Course course){
		courseRepository.save(course);
	}
	
	public void updateCourse(Course course){
		courseRepository.save(course);
	}
	
	public void deleteCourse(Long id){
		courseRepository.delete(id);
	}
}
