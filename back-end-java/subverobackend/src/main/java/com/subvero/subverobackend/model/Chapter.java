package com.subvero.subverobackend.model;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "chapters")
public class Chapter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private int chapterNumber;

    @NotNull
    @NotBlank
    private String chapterCoverHash;

    @NotNull
    @NotBlank
    private String chapterTitle;

    @NotNull
    @NotBlank
    private String chapterDescription;

    @NotNull
    @NotBlank
    private String chapterImagesHash;

    @NotNull
    @Enumerated(EnumType.STRING)
    private ChapterType chapterType;

    @NotNull
    private LocalDate chapterReleaseDate;

    protected Chapter() {
    }

    public Chapter(int chapterNumber, String chapterCoverHash, String chapterTitle, String chapterDescription,
            String chapterImagesHash, ChapterType chapterType, LocalDate chapterReleaseDate) {
        this.setChapterNumber(chapterNumber);
        this.setChapterCoverHash(chapterCoverHash);
        this.setChapterTitle(chapterTitle);
        this.setChapterDescription(chapterDescription);
        this.setChapterImagesHash(chapterImagesHash);
        this.setChapterImagesHash(chapterImagesHash);
        this.setChapterType(chapterType);
        this.setChapterReleaseDate(chapterReleaseDate);

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getChapterNumber() {
        return chapterNumber;
    }

    public void setChapterNumber(int chapterNumber) {
        this.chapterNumber = chapterNumber;
    }

    public String getChapterCoverHash() {
        return chapterCoverHash;
    }

    public void setChapterCoverHash(String chapterCoverHash) {
        this.chapterCoverHash = chapterCoverHash;
    }

    public String getChapterTitle() {
        return chapterTitle;
    }

    public void setChapterTitle(String chapterTitle) {
        this.chapterTitle = chapterTitle;
    }

    public String getChapterDescription() {
        return chapterDescription;
    }

    public void setChapterDescription(String chapterDescription) {
        this.chapterDescription = chapterDescription;
    }

    public String getChapterImagesHash() {
        return chapterImagesHash;
    }

    public void setChapterImagesHash(String chapterImagesHash) {
        this.chapterImagesHash = chapterImagesHash;
    }

    public ChapterType getChapterType() {
        return chapterType;
    }

    public void setChapterType(ChapterType chapterType) {
        this.chapterType = chapterType;
    }

    public LocalDate getChapterReleaseDate() {
        return chapterReleaseDate;
    }

    public void setChapterReleaseDate(LocalDate chapterReleaseDate) {
        this.chapterReleaseDate = chapterReleaseDate;
    }

}
