package com.bibleapp.services.mappers;

import com.bibleapp.services.models.Book;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface VersesMapper {
    Book bookById(int id);
}
