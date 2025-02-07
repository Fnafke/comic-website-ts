import { Chapter } from "../model/chapter";
import chapterDb from "../repository/chapter.db";

const getAllChapters = async(chapterType: string): Promise<Chapter[]> => {
    return await chapterDb.getAllChapters(chapterType);
}

const getChapter = async(chapter_number: number, chapterType: string): Promise<Chapter> => {
    const chapter = await chapterDb.getChapter(chapter_number, chapterType);

    if (!chapter) {
        throw new Error("This chapter does not exist!")
    }

    return chapter;
}

export default {
    getAllChapters,
    getChapter
}