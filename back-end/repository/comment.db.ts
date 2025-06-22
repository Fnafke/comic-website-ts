import database from "../util/database";
import { Comment } from "../model/comment";

const fetchChapterComments = async(chapterNumber: number, chapterType: string): Promise<Comment[]> => {
    try {
        const commentsPrisma = await database.comment.findMany({
            where: {
                chapter: {
                    chapterNumber: chapterNumber,
                    chapterType: chapterType
                }
            },
            include: {
                user: true,
                chapter: true,
                parentComment: {
                    include: {
                        user: true,
                        chapter: true
                    }
                },
                replies: {
                    include: {
                        user: true,
                        chapter: true
                    }
                }
            }
        })
        return commentsPrisma ? commentsPrisma.map((comment) => Comment.from(comment as any)) : [];

    } catch (error) {
        console.error(error)
        throw new Error(`Database error: Could not fetch all the comments for chapter ${chapterNumber}`)
    }
}