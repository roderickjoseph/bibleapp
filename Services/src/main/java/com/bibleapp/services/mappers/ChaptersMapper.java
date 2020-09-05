package com.bibleapp.services.mappers;

import com.bibleapp.services.models.Chapter;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ChaptersMapper {

    Chapter chapterByBookAndChanpter(int bookId, int chapterId);
}
