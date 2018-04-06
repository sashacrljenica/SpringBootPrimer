package com.example.SpringBootPrimer.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBootPrimer.model.Course;
import com.example.SpringBootPrimer.model.Topic;
import com.example.SpringBootPrimer.service.CourseService;

@RestController
public class CourseController {

	@Autowired
	private CourseService courseService;

	@RequestMapping("/courses")
	public List<Course> getAllCourses() {
		return courseService.getAllCourses();
	}

	@RequestMapping("/courses/{id}")
	public Course getCourse(@PathVariable Long id) {
		return courseService.getCourse(id);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/courses")
	public void addCourse(@RequestBody Course course) {
//		course.setTopic(new Topic(topicId, "", ""));
		courseService.addCourse(course);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/courses/{id}")
	public void updateCourse(@RequestBody Course course, @PathVariable Long id) {
//		course.setTopic(new Topic(topicId, "", ""));
		courseService.updateCourse(course);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/courses/{id}")
	public void deleteCourse(@PathVariable Long id) {
		courseService.deleteCourse(id);
	}
}
