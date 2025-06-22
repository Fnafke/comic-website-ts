import { Comment } from "../model/comment"
import chapterDb from "../repository/chapter.db"
import commentDb from "../repository/comment.db";

const getChapterComments = async(chapterNumber: number, chapterType: string): Promise<Comment[]> => {
    if (!(await chapterDb.chapterExists(chapterNumber, chapterType))) {
        throw new Error("This chapter does not exist");
    }

    return await commentDb.fetchChapterComments(chapterNumber, chapterType);
}

export default {
    getChapterComments
}