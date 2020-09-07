package com.bibleapp.services.controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/chapters")
public class Chapters extends Main {

    @RequestMapping("/{bookId}")
    public List<Integer> getChaptersForBook(@PathVariable("bookId") int bookId) {
        return this.chaptersMapper.chaptersForBook(bookId);
    }

}
