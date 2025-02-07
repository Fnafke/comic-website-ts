import { Chapter } from "../model/chapter"
import database from "../util/database"

const getChapter = async(chapter_number: number): Promise<Chapter | null> => {
    try {
        const chapterPrisma = await database.chapter.findUnique({
            where: {
                chapterNumber: chapter_number
            }
        })
        return chapterPrisma ? Chapter.from(chapterPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error(`Database error: Could not get certain chapter with number ${chapter_number}, check server logs!`)
    }
}

export default {
    getChapter
}