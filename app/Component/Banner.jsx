"use client";
import React from 'react'
import aniImg from '@/public/ani.gif';
import Image from "next/image";
import { PiRocketLaunchLight } from "react-icons/pi";
import { useRouter } from 'next/navigation';
export default function Banner() {

 const route = useRouter()

  const handleArtist =()=>{
       route.push('/Artist')
  }
  const handleSignUp =()=>{
    route.push('/createdAccount')
  }
  return (
    <>
<section className="bg-[#2B2B2B] py-[100px]">
  <div className="container mx-auto px-4">
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10">
      
      {/* Left content: text, button, stats */}
      <div className="w-full lg:w-5/12">
        <h1 className="font-semibold text-[40px] sm:text-[50px] lg:text-[67px] leading-[110%] capitalize text-white">
          Discover digital art & Collect NFTs
        </h1>

        <p className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[160%] capitalize text-white my-4">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </p>

        {/* Button */}
        <div className="mt-4">
          <button onClick={handleSignUp} className="font-semibold text-[16px] leading-[140%] text-center bg-[#a259ff] rounded-[20px] px-[40px] sm:px-[50px] py-[10px] w-full sm:w-[224px] h-[60px] text-white font-sans tracking-wide flex items-center justify-center gap-2 hover:bg-[#8a40e8] transform transition duration-300 hover:scale-105 ">
            <span className="text-2xl font-medium">
              <PiRocketLaunchLight />
            </span>
            Get Started
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex sm:flex-row gap-8 mt-8">
          <div className="font-mono tracking-wide text-white">
            <h4 className="font-bold text-[24px] sm:text-[28px] leading-[140%] capitalize">240k+</h4>
            <span className="font-normal text-[20px] sm:text-[23px] leading-[160%] capitalize">Total Sale</span>
          </div>

          <div className="font-mono tracking-wide text-white">
            <h4 className="font-bold text-[24px] sm:text-[28px] leading-[140%] capitalize">100k+</h4>
            <span className="font-normal text-[20px] sm:text-[23px] leading-[160%] capitalize">Auctions</span>
          </div>

          <div className="font-mono tracking-wide text-white">
            <h4 className="font-bold text-[24px] sm:text-[28px] leading-[140%] capitalize">240k+</h4>
            <span className="font-normal text-[20px] sm:text-[23px] leading-[160%] capitalize">Artists</span>
          </div>
        </div>
      </div>

      {/* Right content: image */}
      <div className="w-full lg:w-7/12 flex justify-center items-center">
        <Image
          onClick={handleArtist}
          src={aniImg}
          alt="ani"
          className="w-full h-auto object-cover max-w-full shadow-md cursor-pointer"
        />
      </div>
    </div>
  </div>
</section>

    </>
  )
}
