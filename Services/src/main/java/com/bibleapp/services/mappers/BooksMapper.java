package com.bibleapp.services.mappers;

import com.bibleapp.services.models.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BooksMapper {

//    Books bookById(int id);
    List<Book> allBookNames();
}
