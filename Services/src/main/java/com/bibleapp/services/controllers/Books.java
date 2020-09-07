package com.bibleapp.services.controllers;

import com.bibleapp.services.models.Book;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/books")
public class Books extends Main {

    @GetMapping("/names")
    public List<Book> getAllBooks() {
        return this.booksMapper.allBookNames();
    }

    @GetMapping("/{bookId}/{chapterId}")
    public Book getBookByAndChapterByIds(
            @PathVariable int bookId,
            @PathVariable int chapterId) {
        var m = new HashMap<String, Integer>();
        m.put("bookId", bookId);
        m.put("chapterId", chapterId);
        return this.booksMapper.bookByIdAndChapter(m);
    }
}
