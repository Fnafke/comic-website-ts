import { Comment } from "@/types"

const getChapterComments = async(chapterNumber: number, chapterType: string): Promise<Comment[]> => {
        try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/comments/chapter/${chapterNumber}/${chapterType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json()
    } catch (error) {
        console.error("Error fetching comments for chapter: " + error)
        return []
    }
}

export default {
    getChapterComments
}