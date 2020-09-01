package com.bibleapp.services.controllers;

import com.bibleapp.services.models.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController("book/")
public class Books extends Main {

    @GetMapping("/")
    public void test() {
        System.out.println("Test");
    }

    @GetMapping("names")
    public List<Book> getAllBooks() {
        return this.booksMapper.allBookNames();
    }

//    @GetMapping("/{id}")
//    public List<Books> getBooks() {
//
//    }
}
