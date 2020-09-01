package com.bibleapp.services.controllers;

import com.bibleapp.services.models.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class Verses extends Main {

    @GetMapping("book/{id}")
    public Book wholeBook(@PathVariable(value = "id") int id) {
        return this.versesMapper.bookById(id);
    }
}
