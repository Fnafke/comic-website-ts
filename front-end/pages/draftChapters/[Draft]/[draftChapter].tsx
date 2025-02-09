import SingleChapterOverview from "@/Components/draftChapters/SingleChapterOverview";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useInterval from "use-interval";

const draftChapter: React.FC = () => {
    const router = useRouter();
    const {Draft, draftChapter} = router.query
    

    return <>
        <title>Draft Chapters | Subvero</title>
        <Header/>
        {Draft && draftChapter && <SingleChapterOverview chapterType={Draft as string} chapterNumber={parseInt(draftChapter as string)}/>}
        <Footer/>
    </>
}

export default draftChapter;