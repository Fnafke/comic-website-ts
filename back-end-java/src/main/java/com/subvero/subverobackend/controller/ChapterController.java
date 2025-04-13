package com.subvero.subverobackend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.subvero.subverobackend.model.Chapter;
import com.subvero.subverobackend.model.ChapterType;
import com.subvero.subverobackend.service.ChapterService;

@RestController
@RequestMapping("/chapters")
public class ChapterController {
    private ChapterService chapterService;

    public ChapterController(ChapterService chapterService) {
        this.chapterService = chapterService;
    }

    @GetMapping("/{chapterType}")
    public List<Chapter> getAllChapters(@PathVariable ChapterType chapterType) {
        try {
            return chapterService.getAllChapters(chapterType);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Error performing /chapters/{chapterType}", e);
        }
    }

    @GetMapping("/{chapterNumber}/{chapterType}")
    public Chapter getChapter(@PathVariable int chapterNumber, @PathVariable ChapterType chapterType) {
        try {
            return chapterService.getChapter(chapterNumber, chapterType);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "Error performing /chapters/{chapterNumber}/{chapterType}", e);
        }
    }
}
