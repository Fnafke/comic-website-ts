import ChapterService from "@/services/ChapterService";
import { Chapter, ImgurImage, ImgurResponse } from "@/types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
    chapterType: string;
    chapterNumber: number;
}

const SingleChapterOverview: React.FC<Props> = ({chapterNumber, chapterType}: Props) => {
    const router = useRouter();

    const [chapter, setChapter] = useState<Chapter>();
    const [images, setImages] = useState<ImgurImage[]>();
    const [isLatest, setIsLatest] = useState<boolean>(false);
    
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

    const checkIsLatest = async() => {
        const chapters = await ChapterService.getAllChapters(chapterType);
        if (chapterNumber + 1 == chapters.length) {
            setIsLatest(true);
        }

    }
    
    useEffect(() => {
        getChapter(chapterNumber, chapterType);
        checkIsLatest()
    },[])

    const sendPrevious = () => {
        const path = router.asPath.substring(0, router.asPath.lastIndexOf('/') + 1);
        const chap: number = chapterNumber - 1;
        router.push(`${path}${chap}`).then(() => {
            router.reload();
        });
    }

    const sendNext = () => {
        const path = router.asPath.substring(0, router.asPath.lastIndexOf('/') + 1);
        const chap: number = chapterNumber + 1;
        router.push(`${path}${chap}`).then(() => {
            router.reload();
        });
    }

    return <>
        <h1 className="text-center text-white text-4xl font-noto-serif-jp font-bold p-5">Chapter {chapter?.chapterNumber}</h1>
        <p className="text-center text-white text-3xl font-noto-serif-jp pb-5">{chapter?.chapterTitle}</p>
        <h2 className="text-center text-white text-2xl font-noto-serif-jp font-bold">Chapter Description:</h2>
        <p className="text-center text-white text-l font-noto-serif-jp pb-5 w-5/6 break-words m-auto">{chapter?.chapterDescription}</p>
        <table className="m-auto">
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {images && images.map((image, idx) => (
                    <tr key={idx}>
                        <td className="pb-5">
                            <img src={image.link} width={700} alt="" />
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
        <div className="flex justify-center text-white gap-52 p-10">
            {chapterNumber != 1 && <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={sendPrevious}
            >
                Previous Chapter
            </button>}
            {!isLatest && <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={sendNext}
            >
                Next Chapter
            </button>}
        </div>
    </>
}

export default SingleChapterOverview;