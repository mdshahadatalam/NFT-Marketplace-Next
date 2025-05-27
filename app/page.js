
import Image from "next/image";
import AniImg from '@/public/ani.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Component/Banner";
import Tranding from "./Component/Tranding";
import TopCreator from "./Component/TopCreator";
import Catagoris from "./Component/Catagoris";
import Discover from "./Component/Discover";
import Magic from "./Component/Magic";
import Work from "./Component/Work";
export const metadata = {
  title: "Home",
  description: "This is a home page",
};

export default function Home() {
  
  return (
     <>
     <Banner/>
     <Tranding/>
     <TopCreator/>
     <Catagoris/>
     <Discover/>
     <Magic/>
     <Work/>
     </>
  );
}
