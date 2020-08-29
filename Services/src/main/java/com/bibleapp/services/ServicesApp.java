package com.bibleapp.services;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.bibleapp.services.mappers")
public class ServicesApp {

	public static void main(String[] args) {
		SpringApplication.run(ServicesApp.class, args);
	}

}
