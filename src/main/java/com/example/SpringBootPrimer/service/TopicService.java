package com.example.SpringBootPrimer.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringBootPrimer.model.Topic;
import com.example.SpringBootPrimer.repository.TopicRepository;

@Service
public class TopicService {

	@Autowired
	private TopicRepository topicRepository;

	public List<Topic> getAllTopics() {
		List<Topic> listTopics = new ArrayList<Topic>();
		topicRepository.findAll().forEach(listTopics::add);
		return listTopics;
	}

	public Topic getTopic(Long id) {
		return topicRepository.findOne(id);
	}
	
	public void addTopic(Topic topic){
		topicRepository.save(topic);
	}
	
	public void updateTopic(Topic topic){
		topicRepository.save(topic);
	}
	
	public void deleteTopic(Long id){
		topicRepository.delete(id);
	}
}
