package com.bibleapp.services.controllers;

import com.bibleapp.services.mappers.VersesMapper;
import com.bibleapp.services.models.Book;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
public class Main {

    Logger log = LoggerFactory.getLogger(Main.class);

    @Autowired
    VersesMapper versesMapper;

    @GetMapping
    public void welcomeHome() {}

    @GetMapping("book/{id}")
    public Book wholeBook(@PathVariable(value = "id") int id) {
        return this.versesMapper.bookById(id);
    }
}
