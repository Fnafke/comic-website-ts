import { Chapter as ChapterPrisma } from "@prisma/client";

export class Chapter {
    readonly id?: number;
    readonly chapter_number: number;
    readonly chapter_description: string;
    readonly chapter_images_hash: string;

    constructor(chapter: {id?: number, chapter_number: number, chapter_description: string, chapter_images_hash: string}) {
        this.id = chapter.id;
        this.chapter_number = chapter.chapter_number;
        this.chapter_description = chapter.chapter_description;
        this.chapter_images_hash = chapter.chapter_images_hash;
    }

    static from({id, chapter_number, chapter_description, chapter_images_hash}: ChapterPrisma) {
        return new Chapter(
            {id, chapter_number, chapter_description, chapter_images_hash}
        )
    }
}