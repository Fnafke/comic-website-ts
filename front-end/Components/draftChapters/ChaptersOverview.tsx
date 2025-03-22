import ChapterService from "@/services/ChapterService";
import { Chapter, ImgurImage, ImgurResponse } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";
import DateConverter from "./DateConverter";
import Image from "next/image";

type Props = {
    chapterType: string
}

const ChaptersOverview: React.FC<Props> = ({chapterType}: Props) => {
  const router = useRouter();

    const getChapters = async() => {
        const chapters = await ChapterService.getAllChapters(chapterType);
        return chapters
    }

    const getCoverImages = async() => {
      const chapters = await ChapterService.getAllChapters(chapterType);

      const images: ImgurImage[] = await Promise.all(
          chapters.map(async (chapter) => {
            const response: ImgurResponse = await ChapterService.fetchImages(chapter.chapterCoverHash);
            return response.data[0];
          })
        );

      return images;

    }

    const sendToChapter = (chapterNumber: number, chapterType: string) => {
      const path = router.asPath
      router.push(`${path}/${chapterType}/${chapterNumber}`)
    }

    const {data, isLoading, error} = useSWR(
      "chapters",
      getChapters,
    )

    const {data: dataImages, isLoading: isLoadingImages, error: errorImages} = useSWR(
      "coverImages",
      getCoverImages,
    )

    useInterval(() => {
        mutate("chapters", getChapters());
        mutate("coverImages", getCoverImages());
      }, 2000);

      return (
        <div className="bg-black text-white p-4 w-4/6 m-auto rounded-lg">
            <h2 className="text-lg font-bold mb-4">CHAPTER LIST</h2>
            {error && <p className="text-center text-red-500 mt-4">Failed to load chapters</p>}
            {isLoading && <p className="text-center text-gray-400 mt-4">Loading...</p>}
            {data && (
                <div>
                    {Array.isArray(data) ? data.slice().reverse().map((chapter, idx) => (
                        <div 
                            key={idx} 
                            className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-900 transition-all hover:-translate-x-2"
                            onClick={() => sendToChapter(chapter.chapterNumber, chapter.chapterType)}
                        >
                            <div className="relative">
                              {dataImages && 
                              <img
                                src={dataImages[chapter.chapterNumber - 1].link}
                                width={180}
                                height={100}
                                alt={chapter.chapterTitle}
                              />  
                              }
                            </div>
                            <div className="ml-4">
                                <p className="text-lg font-bold">#{chapter.chapterNumber}</p>
                                <p className="text-sm text-gray-400">Chapter {chapter.chapterNumber}: {chapter.chapterTitle}</p>
                                <p className="text-xs text-gray-500"><DateConverter date={chapter.chapterReleaseDate} /></p>
                            </div>
                        </div>
                    )) : <p>No chapters found.</p>}
                </div>
            )}
        </div>
    );
}

export default ChaptersOverview;