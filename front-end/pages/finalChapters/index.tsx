import ChaptersOverview from "@/Components/draftChapters/ChaptersOverview";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Countdown from "@/Components/homepage/Countdown";
import Link from "next/dist/client/link";

const finalChaptersPage: React.FC = () => {

    return <>
        <title>Final Chapters | Subvero</title>
        <Header/>
        <Countdown chapterNumber={1} date={new Date(2027, 6, 7, 0, 0, 0)}/>
        <h1 className="text-center text-white text-4xl font-noto-serif-jp font-bold p-5">FINAL CHAPTERS</h1>
        <h2 className="text-center text-red-500 text-2xl font-noto-serif-jp font-bold p-5">Coming Soon, visit the 
            <Link href={'/draftChapters'} className="text-blue-500 hover:text-blue-300"> Draft Chapters </Link> 
            page for the draft version of the story!</h2>
        <ChaptersOverview chapterType={'Final'}/>
        <Footer/>
    </>
}

export default finalChaptersPage;