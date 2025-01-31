import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Countdown from "@/Components/homepage/Countdown";

const draftChapters: React.FC = () => {
    return <>
    <title>Draft Chapters | Subvero</title>
    <Header/>
    <Countdown date={new Date(2025, 7, 7, 0, 0, 0)}/>
    <h1 className="pl-52 text-white text-4xl font-noto-serif-jp font-bold">DRAFT CHAPTERS</h1>
    <p className="pl-52 w-5/6 break-words text-white">
      None
    </p>
    <Footer/>
  </>
}

export default draftChapters;