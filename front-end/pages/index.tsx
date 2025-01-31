import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Countdown from "@/Components/homepage/Countdown";

const Home = () => {
  return <>
    <title>Introduction | Subvero</title>
    <Header/>
    <Countdown date={new Date(2025, 7, 7, 0, 0, 0)}/>
    <h1 className="pl-52 text-white text-4xl font-noto-serif-jp font-bold">INTRODUCTION</h1>
    <p className="pl-52 w-5/6 break-words text-white">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quo necessitatibus? Dolor, pariatur excepturi, autem, sed nisi deserunt quidem soluta molestiae tempore praesentium nemo quos. Voluptatibus dolor ducimus id possimus ipsum odit eligendi quia, recusandae ad unde suscipit maiores similique eveniet! Cum maxime sunt blanditiis laboriosam distinctio nisi officia accusamus totam ut adipisci. Dolorem ratione corrupti quibusdam obcaecati totam officia quaerat asperiores, laborum blanditiis, dolor quo mollitia aliquid, quod temporibus eos illum corporis fuga at assumenda a quia nam laudantium rerum? Amet, laboriosam sequi? Voluptatibus sit aperiam dolore debitis voluptatum neque eveniet alias nesciunt iure? Amet facilis suscipit autem! Quam animi consectetur placeat officia veritatis aliquid, omnis similique autem fuga veniam earum obcaecati! Cum quam fugiat consequatur, repellendus nostrum expedita, odit rem vero nesciunt quia mollitia nulla repudiandae laborum asperiores numquam dolore minima blanditiis deleniti voluptatem itaque, laudantium consequuntur! Iusto impedit exercitationem, magnam voluptas adipisci, delectus deleniti architecto ratione tenetur, ex fuga provident. Fugiat provident nobis aut sequi deleniti eum nostrum nesciunt. Amet laudantium nobis libero, quasi, sed eum, itaque odit veritatis enim distinctio tenetur soluta nesciunt beatae unde obcaecati magni qui asperiores. Ullam nisi eveniet modi commodi magnam delectus. Et dolorem tempora consequatur consectetur, assumenda iure nostrum ipsam aut perferendis nesciunt amet ea accusantium architecto nobis dolorum possimus a officia quo quos vero voluptatibus quia aliquam! Quas delectus laudantium quia minima quam eligendi, explicabo incidunt eaque molestias! Vitae suscipit, magni soluta porro fuga eligendi ratione. Recusandae, in numquam debitis culpa consectetur qui, officiis illum vel nisi odio error, vero sed laborum unde fugit sint labore eius cum dignissimos perspiciatis deserunt ipsa dolorum perferendis. Nesciunt, corporis? Consectetur, eius. Expedita, atque libero accusantium assumenda consectetur voluptas iure laudantium ducimus magni velit excepturi nostrum fugiat, corrupti nisi dolore fuga enim tempore. Minus quibusdam perferendis neque suscipit ex perspiciatis porro dicta corrupti rem.
    </p>
    <Footer/>
  </>
}

export default Home;
