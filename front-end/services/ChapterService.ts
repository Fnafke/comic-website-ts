import { Chapter, ImgurResponse } from "@/types";

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


const fetchImages = async(chapterImagesHash: string): Promise<ImgurResponse> => {
    try {
        const response = await fetch(`https://api.imgur.com/3/album/${chapterImagesHash}/images`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Client-ID ${process.env.NEXT_PUBLIC_CLIENT_ID}`,
            }
        });
        const payload = await response.json();

        if (!response.ok) {
            console.error(`Error fetching chapter images: Imgur returned ${response.status}`);
            return { status: response.status, success: false, data: [] };
        }

        return payload;
    } catch (error: any) {
        console.error(`Error fetching chapter images: Can't fetch images on the Imgur API`)
        return { status: 0, success: false, data: [] };
    }
}

export default {
    getAllChapters,
    getChapter,
    fetchImages
}