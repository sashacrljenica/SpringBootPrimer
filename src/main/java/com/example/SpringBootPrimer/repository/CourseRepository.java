package com.example.SpringBootPrimer.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.example.SpringBootPrimer.model.Course;

public interface CourseRepository extends CrudRepository<Course, Long> {

	public List<Course> findByTopicId(Long topicId);

	public List<Course> findByName(String name);

	public List<Course> findByDescription(String description);
}
