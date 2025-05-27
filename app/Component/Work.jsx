import React from 'react'
import Image from 'next/image'
import workImg from "@/public/work/work (3).png"
import workImg2 from "@/public/work/work (2).png"
import workImg3 from "@/public/work/work (1).png"

export default function Work() {
  return (
    <>
<section className="bg-[#2B2B2B] py-12 sm:py-16 lg:py-20">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="mb-10 text-center">
      <h2 className="text-white text-start text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight capitalize">
        How it works
      </h2>
      <p className="text-white text-start text-base sm:text-lg lg:text-xl font-normal leading-relaxed capitalize mt-2">
        Find out how to get started
      </p>
    </div>

    {/* Steps */}
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Step 1 */}
      <div className="w-full lg:w-1/3">
        <div className="rounded-[20px] bg-[#3B3B3B] p-5 sm:p-6 transform transition duration-300 hover:scale-105 cursor-pointer mt-4 lg:mt-0 shadow-md">
          <div className="flex justify-center mb-4">
            <Image src={workImg} alt="Setup Wallet" />
          </div>
          <h4 className="text-center text-white text-lg sm:text-xl font-semibold capitalize tracking-wide mb-2">
            Setup Your wallet
          </h4>
          <p className="text-center text-white text-sm sm:text-base leading-relaxed">
            Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="w-full lg:w-1/3">
        <div className="rounded-[20px] bg-[#3B3B3B] p-5 sm:p-6 transform transition duration-300 hover:scale-105 cursor-pointer mt-4 lg:mt-0 shadow-md">
          <div className="flex justify-center mb-4">
            <Image src={workImg3} alt="Create Collection" />
          </div>
          <h4 className="text-center text-white text-lg sm:text-xl font-semibold capitalize tracking-wide mb-2">
            Create Collection
          </h4>
          <p className="text-center text-white text-sm sm:text-base leading-relaxed">
            Upload your work and setup your collection. Add a description, social links and floor price.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="w-full lg:w-1/3">
        <div className="rounded-[20px] bg-[#3B3B3B] p-5 sm:p-6 transform transition duration-300 hover:scale-105 cursor-pointer mt-4 lg:mt-0 shadow-md">
          <div className="flex justify-center mb-4">
            <Image src={workImg2} alt="Start Earning" />
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
  </div>
</section>

    </>
  )
}
