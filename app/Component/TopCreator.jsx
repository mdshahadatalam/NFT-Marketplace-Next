"use client"
import Image from 'next/image';
import React from 'react'
import { PiRocketLaunchDuotone } from "react-icons/pi";
import profile1 from "@/public/profile/profile (4).png";
import profile2 from "@/public/profile/profile (1).png";
import profile3 from "@/public/profile/profile (5).png";
import profile4 from "@/public/profile/profile (6).png";

import profile5 from "@/public/profile/profile (7).png";
import profile6 from "@/public/profile/profile (3).png";
import profile7 from "@/public/profile/profile (2).png";
import profile8 from "@/public/profile/profile (8).png";

import profile9 from "@/public/profile/profile (9).png";
import profile10 from "@/public/profile/profile (10).png";
import profile11 from "@/public/profile/profile (11).png";
import profile12 from "@/public/profile/profile (12).png";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function TopCreator() {
  const route = useRouter()
  const handleArtist = ()=>{
       route.push('/Artist')
  }
  return (
    <>
    
      <section className="bg-[#2B2B2B] py-12">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
      <div>
        <h2 className="font-semibold text-[28px] sm:text-[32px] lg:text-[38px] leading-[120%] capitalize text-white">
          Top creators
        </h2>
        <p className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[160%] capitalize text-white mt-2">
          Checkout Top Rated Creators on the NFT Marketplace
        </p>
      </div>

     <Link className='no-underline' href={'/Ranking'}>
        <button className="rounded-[20px] px-8 w-full sm:w-auto h-14 font-semibold text-[16px] text-white border-2 border-[#A259FF] flex items-center justify-center gap-2 hover:bg-[#A259FF] transition-all duration-300">
        <span className="text-xl">
          <PiRocketLaunchDuotone />
        </span>
        View Rankings
      </button>
     </Link>

    </div>

    {/* Creator Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile1} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">Keepitreal</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          1
        </span>
      </div>

      {/* Card 2 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile2} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">DigiLab</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          2
        </span>
      </div>

      {/* Card 3 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile3} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">GravityOne</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          3
        </span>
      </div>

      {/* Card 4 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile4} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">Juanie</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          4
        </span>
      </div>
    </div>


       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 5 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile5} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">Keepitreal</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          5
        </span>
      </div>

      {/* Card 6 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile6} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">DigiLab</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          6
        </span>
      </div>

      {/* Card 7 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile7} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">GravityOne</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          7
        </span>
      </div>

      {/* Card 8 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile8} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">Juanie</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          8
        </span>
      </div>
    </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 5 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile9} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">Keepitreal</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          9
        </span>
      </div>

      {/* Card 6 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile10} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">DigiLab</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          10
        </span>
      </div>

      {/* Card 7 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile11} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">GravityOne</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          11
        </span>
      </div>

      {/* Card 8 */}
      <div onClick={handleArtist} className="bg-[#3B3B3B] rounded-[20px] shadow-md text-center py-6 relative transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <div className="flex justify-center mb-4">
          <Image src={profile12} alt="profile Image" className="rounded-full w-24 h-24 object-cover" />
        </div>
        <h4 className="font-semibold text-[22px] text-white font-mono mb-1">Juanie</h4>
        <p className="text-[16px] text-[#858584]">
          Total Sales: <span className="text-white">34.53 ETH</span>
        </p>
        <span className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] text-[#858584] font-mono text-sm">
          12
        </span>
      </div>
    </div> 
   
  </div>
</section>


    </>
  )
}
