import ChaptersOverview from "@/Components/draftChapters/ChaptersOverview";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Countdown from "@/Components/homepage/Countdown";

const draftChapters: React.FC = () => {

    return <>
    <title>Draft Chapters | Subvero</title>
    <Header/>
    <Countdown chapterNumber={1} date={new Date(2026, 6, 7, 0, 0, 0)}/>
    <h1 className="text-center text-white text-4xl font-noto-serif-jp font-bold p-5">DRAFT CHAPTERS</h1>
    <ChaptersOverview chapterType={'Draft'}/>
    <Footer/>
  </>
}

export default draftChapters;