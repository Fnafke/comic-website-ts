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

const getAccessToken = async() => {
    const clientId = `${process.env.NEXT_PUBLIC_CLIENT_ID}`;
    const clientSecret = `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`;
    const refreshToken = `${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`;

    const response = await fetch("https://api.imgur.com/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
            grant_type: "refresh_token"
        })
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(`Error fetching token: ${data.error}`);
    }
    return data.access_token;
};

const fetchImages = async(chapterImagesHash: string) => {
    try {
        const accessToken = await getAccessToken();
        const response = await fetch(`https://api.imgur.com/3/album/${chapterImagesHash}/images`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${accessToken}`,
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