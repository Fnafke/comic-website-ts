import ChaptersOverview from "@/Components/draftChapters/ChaptersOverview";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Countdown from "@/Components/homepage/Countdown";

const finalChapters: React.FC = () => {

    return <>
        <title>Final Chapters | Subvero</title>
        <Header/>
        <Countdown chapterNumber={1} date={new Date(2027, 6, 7, 0, 0, 0)}/>
        <h1 className="text-center text-white text-4xl font-noto-serif-jp font-bold p-5">FINAL CHAPTERS</h1>
        <ChaptersOverview chapterType={'Final'}/>
        <Footer/>
    </>
}

export default finalChapters;