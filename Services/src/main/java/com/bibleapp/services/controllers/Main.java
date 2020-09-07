package com.bibleapp.services.controllers;

import com.bibleapp.services.mappers.BooksMapper;
import com.bibleapp.services.mappers.ChaptersMapper;
import com.bibleapp.services.mappers.VersesMapper;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class Main {

    @Autowired
    VersesMapper versesMapper;

    @Autowired
    BooksMapper booksMapper;

    @Autowired
    ChaptersMapper chaptersMapper;
}
