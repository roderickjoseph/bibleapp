package com.bibleapp.services.controllers;

import com.bibleapp.services.models.Book;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/books")
public class Books extends Main {

    @GetMapping("/names")
    public List<Book> getAllBooks() {
        return this.booksMapper.allBookNames();
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable("id") int id) {
        return this.booksMapper.bookById(id);
    }
}
