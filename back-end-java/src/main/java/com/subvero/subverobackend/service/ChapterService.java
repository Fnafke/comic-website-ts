package com.subvero.subverobackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.subvero.subverobackend.exception.NotFoundException;
import com.subvero.subverobackend.model.Chapter;
import com.subvero.subverobackend.model.ChapterType;
import com.subvero.subverobackend.repository.ChapterRepository;

@Service
public class ChapterService {
    private final ChapterRepository chapterRepository;

    public ChapterService(ChapterRepository chapterRepository) {
        this.chapterRepository = chapterRepository;
    }

    public List<Chapter> getAllChapters(ChapterType chapterType) {
        return chapterRepository.findByChapterType(chapterType);
    }

    public Chapter getChapter(int chapterNumber, ChapterType chapterType) throws NotFoundException {
        Chapter chapter = chapterRepository.findByChapterNumberAndChapterType(chapterNumber, chapterType);

        if (chapter == null) {
            throw new NotFoundException(chapterType + "chapter " + chapterNumber + " does not exist!");
        }

        return chapter;
    }
}
