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

const getChapter = async(chapterType: string, chapterNumber: number): Promise<Chapter> => {
    try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/chapters/${chapterNumber}/${chapterType}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json()
    } catch (error: any) {
        console.error(`Error fetching chapter: Can't fetch ${chapterType} Chapter ${chapterNumber}`)
        throw new Error(error);
    }
}


const fetchImages = async(chapterImagesHash: string) => {
    try {
        const response = await fetch(`https://api.imgur.com/3/album/${chapterImagesHash}/images`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_ID}`,
            }
        });
        return await response.json()
    } catch (error: any) {
        console.error(`Error fetching chapter images: Can't fetch images on the Imgur API`)
        throw new Error(error);
    }
}

export default {
    getAllChapters,
    getChapter,
    fetchImages
}