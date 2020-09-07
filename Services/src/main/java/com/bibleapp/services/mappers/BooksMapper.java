package com.bibleapp.services.mappers;

import com.bibleapp.services.models.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface BooksMapper {

//    Book bookById(int id);
    Book bookByIdAndChapter(Map<String, Integer> m);
    List<Book> allBookNames();
}
