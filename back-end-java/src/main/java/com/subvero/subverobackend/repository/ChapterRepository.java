package com.subvero.subverobackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subvero.subverobackend.model.Chapter;
import com.subvero.subverobackend.model.ChapterType;

public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    List<Chapter> findByChapterType(ChapterType chapterType);

    Chapter findByChapterNumberAndChapterType(int chapterNumber, ChapterType chapterType);
}
