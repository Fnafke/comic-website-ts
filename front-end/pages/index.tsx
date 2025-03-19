import FadeInSection from "@/Components/FadeInSection";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Countdown from "@/Components/homepage/Countdown";

const Home = () => {
  return <>
    <title>Introduction | Subvero</title>
    <Header/>
    <Countdown chapterNumber={1} date={new Date(2025, 7, 7, 0, 0, 0)}/>
    <FadeInSection>
    <h1 className="pl-52 text-white text-7xl font-noto-serif-jp font-bold p-6 
    max-lg:p-0 max-lg:text-4xl max-lg:text-center max-lg:m-auto max-lg:pt-6">INTRODUCTION</h1>
    </FadeInSection>
    <FadeInSection>
    <p className="pl-52 text-3xl font-noto-serif-jp w-5/6 break-words text-white tracking-wide 
    max-lg:p-0 max-lg:text-xl max-lg:text-center max-lg:m-auto max-lg:pt-6">
    I originally started writing and drawing this comic as a way to procrastinate during exam season. 
    However, over time, it has grown into something I genuinely enjoy doing in my free time. Subvero is a story of tragedy, revenge, and hatred. 
    The protagonist, Yuta Tokito (originally referred to as Jotaro Kujo in the Draft Chapters), lost his family at a young age 
    to the powerful and dangerous Dio Brando. Ever since, he has dedicated his life to stopping Dio and his organization once 
    and for all. Along the way, Yuta encounters various allies who join him in his mission. 
    The story has undergone significant changes over the years in the Draft Chapters and is now in need of a rewrite. 
    The rewritten chapters will be available separately, as the draft version only represents about 40% of the full story.
    </p>
    </FadeInSection>
    <FadeInSection>
    <h1 className="pl-52 text-white text-7xl font-noto-serif-jp font-bold pt-16 
    max-lg:p-0 max-lg:text-4xl max-lg:text-center max-lg:m-auto max-lg:pt-6">CHARACTERS</h1>
    </FadeInSection>
    <FadeInSection>
    <p className="pl-52 text-3xl font-noto-serif-jp w-5/6 break-words text-white tracking-wide p-6 
    max-lg:pt-6 max-lg:text-xl max-lg:text-center max-lg:m-auto max-lg:p-0">As the story progresses, the character page will be regularly updated with the latest information on each character. 
     These updates can range from small additions, such as new abilities, to major revelations like full backstories. 
     Something to look forward to!</p>
     </FadeInSection>
    <Footer/>
  </>
}

export default Home;
