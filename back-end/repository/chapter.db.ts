import { Chapter } from "../model/chapter"
import { Comment } from "../model/comment";
import database from "../util/database"

const getAllChapters = async(chapterType: string): Promise<Chapter[]> => {
    try {
        const chapterPrismas = await database.chapter.findMany({
            where: {
                chapterType: chapterType
            }
        });
        return chapterPrismas.map((chapterPrisma) => Chapter.from(chapterPrisma));
    } catch (error) {
        console.error(error);
        throw new Error(`Database error: Could not get all chapters, check server logs!`)
    }
}

const getChapter = async(chapterNumber: number, chapterType: string): Promise<Chapter | null> => {
    try {
        const chapterPrisma = await database.chapter.findFirst({
            where: {
                chapterNumber: chapterNumber,
                chapterType: chapterType
            }
        })
        return chapterPrisma ? Chapter.from(chapterPrisma) : null;
    } catch (error) {
        console.error(error);
        throw new Error(`Database error: Could not get certain chapter with number ${chapterNumber}, check server logs!`)
    }
}

export default {
    getAllChapters,
    getChapter
}