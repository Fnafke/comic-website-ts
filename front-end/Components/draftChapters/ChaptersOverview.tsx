import ChapterService from "@/services/ChapterService";
import { Chapter } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR, { mutate } from "swr";
import useInterval from "use-interval";

type Props = {
    chapterType: string
}

const ChaptersOverview: React.FC<Props> = ({chapterType}: Props) => {
  const router = useRouter();
  
  const getChapters = async() => {
        const chapters = await ChapterService.getAllChapters(chapterType);
        return chapters
    }

    const sendToChapter = (chapterNumber: number, chapterType: string) => {
      const path = router.asPath
      router.push(`${path}/${chapterType}/${chapterNumber}`)
    }

    const {data, isLoading, error} = useSWR(
      "chapters",
      getChapters,
    )

    useInterval(() => {
        mutate("chapters", getChapters());
      }, 2000);

    return <>
    {error && <p className="text-center text-[#ff0000] mt-4">Failed to load chapters</p>}
    {isLoading && <p className="text-center text-[#c5c6c7] mt-4">Loading...</p>}
    {data && <table className="m-auto text-white">
        <thead>
            <tr>
              <th scope="col" className="py-2 px-4 border-b"></th>
            </tr>
          </thead>
        <tbody className="cursor-pointer">
            {Array.isArray(data) ? data.slice().reverse().map((chapter, idx) => (
                <tr className="text-center outline outline-1 hover:bg-white hover:text-black ease-in-out transition-all" key={idx} onClick={() => sendToChapter(chapter.chapterNumber, chapter.chapterType)}>
                  <td className="p-5">Ch. {chapter.chapterNumber} - {chapter.chapterTitle}</td>
                </tr>
            )) : <p>No chapters found.</p>}
        </tbody>
    </table>}
    </>
}

export default ChaptersOverview;