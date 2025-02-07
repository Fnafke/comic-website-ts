import { Chapter } from "@/types";

const getAllChapters = async(chapterType: string): Promise<Chapter[]> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/chapters/${chapterType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json()
    } catch (error) {
        console.error("Error fetching all chapters: " + error)
        return []
    }
}

export default {
    getAllChapters
}