'use client'
import React from 'react'
import Image from 'next/image'
import workImg from "@/public/work/work (3).png"
import workImg2 from "@/public/work/work (2).png"
import workImg3 from "@/public/work/work (1).png"
import animation1 from '@/public/animation/animation (1).json'
import animation2 from '@/public/animation/animation (2).json'
import animation3 from '@/public/animation/animation (3).json'
import Lottie from 'lottie-react'

export default function Work() {
  return (
    <>
<section className="bg-[#2B2B2B] py-12 sm:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-10 sm:mb-12">
      <h2 className="text-white text-start text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight capitalize">
        How it works
      </h2>
      <p className="text-white text-start text-base sm:text-lg lg:text-xl font-normal leading-relaxed capitalize mt-2">
        Find out how to get started
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Step 1 */}
      <div className="rounded-[20px] bg-[#3B3B3B] p-5 sm:p-6 transition duration-300 hover:scale-105 cursor-pointer shadow-md h-full">
        <div className="flex justify-center mb-4">
          <Lottie animationData={animation2} loop={true} className="w-full max-w-[280px] h-auto" />
        </div>
        <h4 className="text-center text-white text-lg sm:text-xl font-semibold capitalize tracking-wide mb-2">
          Setup Your Wallet
        </h4>
        <p className="text-center text-white text-sm sm:text-base leading-relaxed">
          Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
        </p>
      </div>

      {/* Step 2 */}
      <div className="rounded-[20px] bg-[#3B3B3B] p-5 sm:p-6 transition duration-300 hover:scale-105 cursor-pointer shadow-md h-full">
        <div className="flex justify-center mb-4">
          <Lottie animationData={animation1} loop={true} className="w-full max-w-[280px] h-[260px]" />
        </div>
        <h4 className="text-center text-white text-lg sm:text-xl font-semibold capitalize tracking-wide mb-2">
          Create Collection
        </h4>
        <p className="text-center text-white text-sm sm:text-base leading-relaxed">
          Upload your work and setup your collection. Add a description, social links and floor price.
        </p>
      </div>

      {/* Step 3 */}
      <div className="rounded-[20px] bg-[#3B3B3B] p-5 sm:p-6 transition duration-300 hover:scale-105 cursor-pointer shadow-md h-full">
        <div className="flex justify-center mb-4">
          <Lottie animationData={animation3} loop={true} className="w-full max-w-[280px] h-auto" />
        </div>
        <h4 className="text-center text-white text-lg sm:text-xl font-semibold capitalize tracking-wide mb-2">
          Start Earning
        </h4>
        <p className="text-center text-white text-sm sm:text-base leading-relaxed">
          Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.
        </p>
      </div>
    </div>
  </div>
</section>



    </>
  )
}
