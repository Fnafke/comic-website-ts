import { Comment } from "../model/comment"
import { User } from "../model/user";
import chapterDb from "../repository/chapter.db"
import commentDb from "../repository/comment.db";
import userDb from "../repository/user.db";

const getChapterComments = async(chapterNumber: number, chapterType: string): Promise<Comment[]> => {
    if (!(await chapterDb.chapterExists(chapterNumber, chapterType))) {
        throw new Error("This chapter does not exist");
    }

    return await commentDb.fetchChapterComments(chapterNumber, chapterType);
}

const createComment = async(content: string, parentCommentId: number | null, chapterNumber: number, chapterType: string, email: string): Promise<Comment> => {
    const user: User | null = await userDb.getUserByEmail(email);
    const chapter = await chapterDb.getChapter(chapterNumber, chapterType);

    if (!user) {
        throw new Error("User not found");
    }

    if (!chapter) {
        throw new Error("This chapter does not exist");
    }

    if (!chapter.id) {
        throw new Error("Chapter ID is undefined");
    }

    const userId: number | undefined = user.getId();

    if (!userId) {
        throw new Error("User ID is undefined");
    }

    return await commentDb.createComment(content, parentCommentId, chapter.id, userId);
}

export default {
    getChapterComments,
    createComment
}