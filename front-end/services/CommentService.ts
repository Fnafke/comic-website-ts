import { Comment } from "@/types"

const getChapterComments = async(chapterNumber: number, chapterType: string): Promise<Comment[]> => {
        try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/comments/chapter/${chapterNumber}/${chapterType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('loggedInUser') || '{}').token}`
            }
        });
        return await response.json()
    } catch (error) {
        console.error("Error fetching comments for chapter: " + error)
        return []
    }
}

const createComment = async(content: string, parentCommentId: number | null, chapterNumber: number, chapterType: string): Promise<Comment> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/comments/chapter/${chapterNumber}/${chapterType}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('loggedInUser') || '{}').token}`
            },
            body: JSON.stringify({ content, parentCommentId })
        });
        return await response.json()
    } catch (error) {
        console.error("Error creating comment for chapter: " + error)
        throw new Error("Failed to create comment")
    }
}

export default {
    getChapterComments,
    createComment
}