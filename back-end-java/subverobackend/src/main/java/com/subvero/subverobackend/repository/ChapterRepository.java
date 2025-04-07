package com.subvero.subverobackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.subvero.subverobackend.model.Chapter;
import com.subvero.subverobackend.model.ChapterType;

public interface ChapterRepository extends JpaRepository<Chapter, Long> {
    Chapter findByChapterNumberAndChapterType(int chapterNumber, ChapterType chapterType);
}
