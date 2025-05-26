"use client";
import Image from "next/image";
import AniImg from '@/public/ani.gif';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Component/Banner";
import Tranding from "./Component/Tranding";
import TopCreator from "./Component/TopCreator";

export default function Home() {
  return (
     <>
     <Banner/>
     <Tranding/>
     <TopCreator/>
     </>
  );
}
