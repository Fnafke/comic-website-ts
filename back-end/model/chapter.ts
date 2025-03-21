import { Chapter as ChapterPrisma } from "@prisma/client";

export class Chapter {
    readonly id?: number;
    readonly chapterNumber: number;
    readonly chapterTitle: string;
    readonly chapterDescription: string;
    readonly chapterImagesHash: string;
    readonly chapterType: string;
    readonly chapterReleaseDate: Date;

    constructor(chapter: {id?: number, chapterNumber: number, chapterTitle: string, chapterDescription: string, chapterImagesHash: string, chapterType: string, chapterReleaseDate: Date}) {
        this.id = chapter.id;
        this.chapterNumber = chapter.chapterNumber;
        this.chapterTitle = chapter.chapterTitle;
        this.chapterDescription = chapter.chapterDescription;
        this.chapterImagesHash = chapter.chapterImagesHash;
        this.chapterType = chapter.chapterType;
        this.chapterReleaseDate = chapter.chapterReleaseDate;
    }

    static from({id, chapterNumber, chapterTitle, chapterDescription, chapterImagesHash, chapterType, chapterReleaseDate}: ChapterPrisma) {
        return new Chapter(
            {id, chapterNumber,chapterTitle, chapterDescription, chapterImagesHash, chapterType, chapterReleaseDate}
        )
    }
}