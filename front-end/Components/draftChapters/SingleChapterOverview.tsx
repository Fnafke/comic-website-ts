import ChapterService from "@/services/ChapterService";
import { Chapter } from "@/types";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";

type Props = {
    chapterType: string;
    chapterNumber: number;
}

const SingleChapterOverview: React.FC<Props> = ({chapterNumber, chapterType}: Props) => {
    const [chapter, setChapter] = useState<Chapter>();
    const [images, setImages] = useState<[]>();
    
    const getChapter = async(chapterNumber: number, chapterType: string): Promise<Chapter> => {
        const chapter = await ChapterService.getChapter(chapterType, chapterNumber);
        setChapter(chapter);
        return chapter;
    }

    const getChapterImages = (chapter: Chapter | undefined): Promise<[]> => {
        if (chapter) {
            const response: Promise<[]> = ChapterService.fetchImages(chapter.chapterImagesHash);
            return response
        }
        return Promise.resolve([])
    }
    
    useEffect(() => {
        getChapter(chapterNumber, chapterType);
    },[])

    return <>
    </>
}

export default SingleChapterOverview;