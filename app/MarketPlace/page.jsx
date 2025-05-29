import React from 'react'
import { CiSearch } from "react-icons/ci";

export const metadata = {
  title: "Market Place",
  description: "This is a Market place page",
};

export default function MarketPlace() {
  return (
    <>
       <section className='bg-[#2B2B2B] py-16 md:py-24 lg:py-32'>
      <div className="container mx-auto px-4">
        <h2 className='font-semibold text-[36px] sm:text-[44px] md:text-[51px] leading-[110%] capitalize text-[#fff]'>
          Browse Marketplace
        </h2>
        <p className='font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#fff] mt-2'>
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>

        <div className='relative mt-8'>
          <input
            className='rounded-[20px] w-full h-[60px] border border-[#858584] outline-none placeholder:font-normal placeholder:text-[16px] leading-[140%] placeholder:text-[#858584] bg-[#2B2B2B] pl-5 pr-12 text-white'
            type="search"
            name="search"
            id="search"
            placeholder='Search your favourite NFTs'
          />

          <span className='absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl text-[#858584]'>
            <CiSearch />
          </span>
        </div>
      </div>
    </section>
    </>
  )
}
