package com.example.SpringBootPrimer.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.SpringBootPrimer.model.Topic;

public interface TopicRepository extends CrudRepository<Topic, Long> {

}
