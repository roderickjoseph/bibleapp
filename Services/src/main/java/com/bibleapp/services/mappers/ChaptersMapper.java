package com.bibleapp.services.mappers;

import com.bibleapp.services.models.Chapter;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ChaptersMapper {

    Chapter chapterByBookAndChapter(int bookId, int chapterId);
    List<Integer> chaptersForBook(int bookId);
}
