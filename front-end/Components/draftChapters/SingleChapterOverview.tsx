import ChapterService from "@/services/ChapterService";
import { Chapter, ImgurImage, ImgurResponse } from "@/types";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";

type Props = {
    chapterType: string;
    chapterNumber: number;
}

const SingleChapterOverview: React.FC<Props> = ({chapterNumber, chapterType}: Props) => {
    const [chapter, setChapter] = useState<Chapter>();
    const [images, setImages] = useState<ImgurImage[]>();
    
    const getChapter = async(chapterNumber: number, chapterType: string): Promise<Chapter> => {
        const chapter = await ChapterService.getChapter(chapterType, chapterNumber);
        setChapter(chapter);
        getChapterImages(chapter);
        return chapter;
    }

    const getChapterImages = async(chapter: Chapter | undefined): Promise<ImgurImage[]> => {
        if (chapter) {
            const response: ImgurResponse = await ChapterService.fetchImages(chapter.chapterImagesHash);
            setImages(response.data)
            return response.data
        }
        return Promise.resolve([])
    }
    
    useEffect(() => {
        getChapter(chapterNumber, chapterType);
    },[])

    return <>
        <table className="m-auto">
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {images && images.map((image, idx) => (
                    <tr key={idx}>
                        <td>
                            <img src={image.link} width={700} alt="" />
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    </>
}

export default SingleChapterOverview;