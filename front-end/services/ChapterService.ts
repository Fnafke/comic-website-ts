import { Chapter } from "@/types";

const getAllDraftChapters = async(): Promise<Chapter[]> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/chapters', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({chapterType: 'Draft'})
        });
        return await response.json()
    } catch (error) {
        console.error("Error fetching all chapters: " + error)
        return []
    }
}

export default {
    getAllDraftChapters
}