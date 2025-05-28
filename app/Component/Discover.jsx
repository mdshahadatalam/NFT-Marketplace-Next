"use client"
import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import discover from "@/public/discover/discover (2).png"
import discover2 from "@/public/discover/discover (1).png"
import discover3 from "@/public/discover/discover (3).png"



import avatar from "@/public/discover/Avatar (1).png"
import avatar2 from "@/public/discover/Avatar (2).png"
import avatar3 from "@/public/discover/Avatar (3).png"

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Discover() {
  const route = useRouter()

   const handleNFT = () => {
    route.push('/NFT#scrollTarge')
  };

  const handleMarketPlace =()=>{
    route.push('/MarketPlace')
  }

  return (
    <>
       <section className='bg-[#2B2B2B] py-12'>
        <div className="container mx-auto">
            <div className="mb-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  <div>
                    <h2 className="font-semibold text-[28px] sm:text-[32px] lg:text-[38px] leading-[120%] capitalize text-white">Discover More NFTs</h2>
                    <p className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[160%] capitalize text-white mt-2">Explore new trending NFTs</p>
                  </div>
            
                  <button onClick={handleMarketPlace} className="rounded-[20px] px-8 font-mono w-full sm:w-auto h-14 font-semibold text-[16px] text-white border-2 border-[#A259FF] flex items-center justify-center gap-2 hover:bg-[#A259FF] transition-all duration-300">
                    <span className="text-xl">
                      <MdOutlineRemoveRedEye />
                    </span>
                    See All
                  </button>
                </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer">
    <Image src={discover} alt="Art Category" className="w-full h-auto object-cover" />
    <div className="bg-[#3B3B3B] p-4">
      <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
        Distant Galaxy
      </h4>

      <div className="flex items-center gap-2 mb-4">
        <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
        <span className="font-normal text-[16px] text-white font-mono">MoonDancer</span>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <span className="text-[12px] text-[#858584] font-mono">Price</span>
          <h5 className="text-[16px] text-white font-normal font-mono">1.63 ETH</h5>
        </div>
        <div>
          <span className="text-[12px] text-[#858584] font-mono">Highest Bid</span>
          <h5 className="text-[16px] text-white font-normal font-mono">0.33 wETH</h5>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer">
    <Image src={discover2} alt="Collectibles Category" className="w-full h-auto object-cover" />
    <div className="bg-[#3B3B3B] p-4">
      <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
        Distant Galaxy
      </h4>

      <div className="flex items-center gap-2 mb-4">
        <Image src={avatar3} alt="avatar image" className="w-6 h-6 rounded-full" />
        <span className="font-normal text-[16px] text-white font-mono">MoonDancer</span>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <span className="text-[12px] text-[#858584] font-mono">Price</span>
          <h5 className="text-[16px] text-white font-normal font-mono">1.63 ETH</h5>
        </div>
        <div>
          <span className="text-[12px] text-[#858584] font-mono">Highest Bid</span>
          <h5 className="text-[16px] text-white font-normal font-mono">0.33 wETH</h5>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer">
    <Image src={discover3} alt="Art Category" className="w-full h-auto object-cover" />
    <div className="bg-[#3B3B3B] p-4">
      <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
        Distant Galaxy
      </h4>

      <div className="flex items-center gap-2 mb-4">
        <Image src={avatar2} alt="avatar image" className="w-6 h-6 rounded-full" />
        <span className="font-normal text-[16px] text-white font-mono">MoonDancer</span>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <span className="text-[12px] text-[#858584] font-mono">Price</span>
          <h5 className="text-[16px] text-white font-normal font-mono">1.63 ETH</h5>
        </div>
        <div>
          <span className="text-[12px] text-[#858584] font-mono">Highest Bid</span>
          <h5 className="text-[16px] text-white font-normal font-mono">0.33 wETH</h5>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
       </section>
    </>
  )
}
