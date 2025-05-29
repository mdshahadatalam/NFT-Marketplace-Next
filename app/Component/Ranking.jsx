"use client"
import Image from 'next/image'
import React from 'react'
import ranking1 from "@/public/ranking/raking (1).png"
import ranking2 from "@/public/ranking/raking (2).png"
import ranking3 from "@/public/ranking/raking (3).png"
import ranking4 from "@/public/ranking/raking (4).png"
import ranking5 from "@/public/ranking/raking (5).png"
import ranking6 from "@/public/ranking/raking (6).png"
import ranking7 from "@/public/ranking/raking (7).png"
import ranking8 from "@/public/ranking/raking (8).png"
import ranking9 from "@/public/ranking/raking (9).png"
import ranking10 from "@/public/ranking/raking (10).png"
import ranking11 from "@/public/ranking/raking (11).png"
import ranking12 from "@/public/ranking/raking (12).png"
import ranking13 from "@/public/ranking/raking (13).png"
import ranking14 from "@/public/ranking/raking (14).png"
import ranking15 from "@/public/ranking/raking (15).png"
import ranking16 from "@/public/ranking/raking (16).png"
import ranking17 from "@/public/ranking/raking (17).png"
import ranking18 from "@/public/ranking/raking (18).png"
import { useRouter } from 'next/navigation'

export default function Ranking() {
const route = useRouter()
  const handleArtist =()=>{
          route.push('/Artist')
  }
  return (
    <>
    <section className="bg-[#2B2B2B] py-28">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="mb-6">
      <h2 className="font-semibold text-[32px] sm:text-[36px] md:text-[44px] lg:text-[51px] leading-[110%] capitalize text-white">
        Top Creators
      </h2>
      <p className="font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[160%] text-white mt-2">
        Check out top ranking NFT artists on the NFT Marketplace.
      </p>
    </div>

    {/* Table Header */}
    <div className="rounded-[20px] border border-backgroundSecondary shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 ">
      <div className="flex items-center gap-4 w-full md:w-auto">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-[#858584] font-normal text-[16px] leading-[140%] text-center">
          #
        </span>
        <span className="font-normal text-[16px] leading-[140%] capitalize text-[#858584]">
          Artist
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[#858584] text-[16px]">
        <span>Change</span>
        <span>NFTs Sold</span>
        <span>Volume</span>
      </div>
    </div>

    {/* Ranking Row 1*/}
    <div  className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          1
        </span>
        <Image src={ranking10} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Jaydon Ekstrom Bothman
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>
      
      {/* Ranking Row 2*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          2
        </span>
        <Image src={ranking14} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Ruben Carder
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <sextpan className="text-[#00ac4f]">+1.41%</sextpan>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 3*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          3
        </span>
        <Image src={ranking15} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Alfredo Septimus
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 4*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          4
        </span>
        <Image src={ranking16} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Davis Franci
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 5*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          5
        </span>
        <Image src={ranking12} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Livia Rosser
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 6*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          6
        </span>
        <Image src={ranking17} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Kianna Donin
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 7*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          7
        </span>
        <Image src={ranking18} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Phillip Lipshutz
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 8*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          8
        </span>
        <Image src={ranking1} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
         Maria Rosser
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 9*/}
     <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          9
        </span>
        <Image src={ranking2} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Kianna Stanton
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>
 
      {/* Ranking Row 10*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          10
        </span>
        <Image src={ranking13} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Angel Lubin
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


      {/* Ranking Row 11*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          11
        </span>
        <Image src={ranking2} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Allison Torff
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 12*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          12
        </span>
        <Image src={ranking4} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Davis Workman
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 13*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          13
        </span>
        <Image src={ranking5} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Lindsey Lipshutz
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


      {/* Ranking Row 14*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          14
        </span>
        <Image src={ranking6} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Randy Carder
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


      {/* Ranking Row 15*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          15
        </span>
        <Image src={ranking7} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Lydia Culhane
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


      {/* Ranking Row 16*/}
       <div className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          16
        </span>
        <Image src={ranking8} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Rayna Bator
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


      {/* Ranking Row 17*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist}  className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          17
        </span>
        <Image src={ranking9} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Jocelyn Westervelt
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


      {/* Ranking Row 18*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          18
        </span>
        <Image src={ranking10} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Marilyn Torff
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>

      {/* Ranking Row 19*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          19
        </span>
        <Image src={ranking13} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Skylar Levin
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


      {/* Ranking Row 20*/}
       <div onClick={handleArtist} className="rounded-[20px] bg-[#3B3B3B] shadow-md h-auto p-4 flex flex-wrap md:flex-nowrap items-center mt-4 gap-y-3 transform transition duration-300 hover:scale-105">
      <div onClick={handleArtist} className="flex items-center gap-3 w-full md:w-auto cursor-pointer">
        <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center font-mono bg-[#2B2B2B] text-white">
          20
        </span>
        <Image src={ranking11} alt="Ranking image" />
        <span className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[140%] capitalize text-white">
          Terry Dorwart
        </span>
      </div>

      <div className="flex justify-between md:justify-end gap-x-6 md:gap-x-12 ms-auto w-full md:w-auto text-[16px]">
        <span className="text-[#00ac4f]">+1.41%</span>
        <span className="text-white">602</span>
        <span className="text-white">12.4 ETH</span>
      </div>
    </div>


    

  </div>
</section>

    </>
  )
}
