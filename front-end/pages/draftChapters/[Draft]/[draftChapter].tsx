import SingleChapterOverview from "@/Components/draftChapters/SingleChapterOverview";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useRouter } from "next/router";

const draftChapter: React.FC = () => {
    const router = useRouter();

    const {chapterType, chapterNumber} = router.query

    return <>
        <title>Draft Chapters | Subvero</title>
        <Header/>
        <h1 className="text-center text-white text-4xl font-noto-serif-jp font-bold p-5">DRAFT CHAPTERS</h1>
        <SingleChapterOverview chapterType={chapterType as string} chapterNumber={parseInt(chapterNumber as string)}/>
        <Footer/>
    </>
}

export default draftChapter;