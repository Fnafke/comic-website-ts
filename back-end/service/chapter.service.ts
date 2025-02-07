import { Chapter } from "../model/chapter";
import chapterDb from "../repository/chapter.db";

const getAllChapters = async(): Promise<Chapter[]> => {
    return await chapterDb.getAllChapters();
}

const getChapter = async(chapter_number: number): Promise<Chapter> => {
    const chapter = await chapterDb.getChapter(chapter_number);

    if (!chapter) {
        throw new Error("This chapter does not exist!")
    }

    return chapter;
}

export default {
    getAllChapters,
    getChapter
}