import useSWRImmutable from "swr/immutable";
import DateConverter from "./DateConverter";
import { Chapter, ImgurImage, ImgurResponse } from "@/types";
import ChapterService from "@/services/ChapterService";

export const ChapterRow = ({chapter, onClick,}: {chapter: Chapter; onClick: () => void;}) => {
  const { data: image } = useSWRImmutable(
    chapter.chapterCoverHash ? `cover-${chapter.chapterCoverHash}` : null,
    async () => {
      const response: ImgurResponse = await ChapterService.fetchImages(
        chapter.chapterCoverHash
      );
      return response.data[0] ?? null;
    }
  );

  return (
    <div
      className="flex items-center p-4 border-b border-gray-700 cursor-pointer hover:bg-gray-900 transition-all hover:-translate-x-2"
      onClick={onClick}
    >
      <div className="relative max-lg:w-24 max-lg:h-16 shrink-0">
        {image ? (
          <img
            src={image.link}
            width={180}
            height={100}
            alt={chapter.chapterTitle}
            loading="lazy"
          />
        ) : (
          <div className="flex h-[100px] w-[180px] items-center justify-center bg-gray-800 text-xs text-gray-400">
            No cover image
          </div>
        )}
      </div>
      <div className="ml-4">
        <p className="text-lg font-bold">#{chapter.chapterNumber}</p>
        <p className="text-sm text-gray-400">
          Chapter {chapter.chapterNumber}: {chapter.chapterTitle}
        </p>
        <p className="text-xs text-gray-500">
          <DateConverter date={chapter.chapterReleaseDate} />
        </p>
      </div>
    </div>
  );
};