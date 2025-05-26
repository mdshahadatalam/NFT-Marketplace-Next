import React from 'react'
import catagoris from "@/public/catagoris/catagoris (2).png"
import catagoris2 from "@/public/catagoris/catagoris (3).png"
import catagoris3 from "@/public/catagoris/catagoris (4).png"
import catagoris4 from "@/public/catagoris/catagoris (5).png"

import catagoris5 from "@/public/catagoris/catagoris (6).png"
import catagoris6 from "@/public/catagoris/catagoris (7).png"
import catagoris7 from "@/public/catagoris/catagoris (8).png"
import catagoris8 from "@/public/catagoris/catagoris (1).png"


import Image from 'next/image'

export default function Catagoris() {
  return (
    <>
     <section className="bg-[#2B2B2B] py-16">
  <div className="container mx-auto px-4">
    <h1 className="font-semibold text-[32px] sm:text-[40px] lg:text-[38px] leading-[100%] capitalize text-white text-start mb-10">
      Browse Categories
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris} alt="Art Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">Art</h4>
        </div>
      </div>

      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris2} alt="Collectibles Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">Collectibles</h4>
        </div>
      </div>

      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris3} alt="Music Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">Music</h4>
        </div>
      </div>

      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris4} alt="Photography Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">Photography</h4>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris5} alt="Art Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">Video</h4>
        </div>
      </div>

      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris6} alt="Collectibles Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">CUtility</h4>
        </div>
      </div>

      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris7} alt="Music Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">Sport</h4>
        </div>
      </div>

      {/* Category Card */}
      <div className="rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
        <Image src={catagoris8} alt="Photography Category" className="w-full h-48 object-cover" />
        <div className="bg-[#3B3B3B] p-4">
          <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono text-start">Virtual Worlds</h4>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
