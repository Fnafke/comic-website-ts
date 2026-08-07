import ChapterService from "@/services/ChapterService";
import { Chapter, ImgurImage, ImgurResponse } from "@/types";
import { useRouter } from "next/router";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import DateConverter from "./DateConverter";
import { ChapterRow } from "./ChapterRow";

type Props = {
  chapterType: string;
};

const ChaptersOverview: React.FC<Props> = ({ chapterType }: Props) => {
  const router = useRouter();

  const getChapters = () => ChapterService.getAllChapters(chapterType);

  const sendToChapter = (chapterNumber: number, chapterType: string) => {
    const path = router.asPath;
    router.push(`${path}/${chapterType}/${chapterNumber}`);
  };

  const {
    data: dataChapters,
    isLoading: isLoadingChapters,
    error: errorChapters,
  } = useSWR(`chapters-${chapterType}`, getChapters, {
    refreshInterval: 30000, // adjust to how often chapters actually change
    dedupingInterval: 5000,
  });

  return (
    <div className="bg-black text-white p-4 w-4/6 m-auto rounded-lg max-lg:w-11/12">
      <h2 className="text-lg font-bold mb-4">CHAPTER LIST</h2>
      {errorChapters && (
        <p className="text-center text-red-500 mt-4">Failed to load chapters</p>
      )}
      {isLoadingChapters && (
        <p className="text-center text-gray-400 mt-4">Loading...</p>
      )}
      {dataChapters && (
        <div>
          {Array.isArray(dataChapters) && dataChapters.length > 0 ? (
            dataChapters
              .slice()
              .reverse()
              .map((chapter, idx) => (
                <ChapterRow
                  key={idx}
                  chapter={chapter}
                  onClick={() => sendToChapter(chapter.chapterNumber, chapter.chapterType)}
                />
              ))
          ) : (
            <p className="text-center text-gray-400 mt-4">No chapters found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ChaptersOverview;