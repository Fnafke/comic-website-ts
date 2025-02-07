import { Chapter } from "@/types";

const getAllChapters = async(): Promise<Chapter[]> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/chapters', {
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