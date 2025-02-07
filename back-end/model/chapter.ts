import { Chapter as ChapterPrisma } from "@prisma/client";

export class Chapter {
    readonly id?: number;
    readonly chapterNumber: number;
    readonly chapterDescription: string;
    readonly chapterImagesHash: string;

    constructor(chapter: {id?: number, chapterNumber: number, chapterDescription: string, chapterImagesHash: string}) {
        this.id = chapter.id;
        this.chapterNumber = chapter.chapterNumber;
        this.chapterDescription = chapter.chapterDescription;
        this.chapterImagesHash = chapter.chapterImagesHash;
    }

    static from({id, chapterNumber, chapterDescription, chapterImagesHash}: ChapterPrisma) {
        return new Chapter(
            {id, chapterNumber, chapterDescription, chapterImagesHash}
        )
    }
}