"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import avatar from "@/public/NFT/Avatar (2).png"
import { TbWorld } from "react-icons/tb";


export default function NFT({ targetHour = 18, targetMinute = 0 }) {

     const [timeLeft, setTimeLeft] = useState('00:00:00');
       useEffect(() => {
        function updateCountdown() {
          const now = new Date();
          let target = new Date();
    
          target.setHours(targetHour, targetMinute, 0, 0);
    
          if (target <= now) {
            target.setDate(target.getDate() + 1); // Next day
          }
    
          const diff = target - now;
    
          const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
          const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
          const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
    
          setTimeLeft(`${hours}:${minutes}:${seconds}`);
        }
    
        updateCountdown(); // Initial call
        const timer = setInterval(updateCountdown, 1000);
    
        return () => clearInterval(timer); // Cleanup on unmount
      }, [targetHour, targetMinute]);
    
      // console.log(`Time left: ${timeLeft}`);
      const [hours, minutes, seconds] = timeLeft.split(':');
    
  return (
    <>
      <section className='NFTBG'></section>

      <section className='py-12 bg-[#2B2B2B]'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col-reverse lg:flex-row gap-10'>
          
          {/* Left Side */}
          <div className='w-full lg:w-6/12'>
            {/* Header */}
            <h4 className='font-semibold text-[36px] sm:text-[44px] md:text-[51px] leading-[110%] capitalize text-[#fff]'>
              The Orbitians
            </h4>
            <span className='font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] capitalize text-[#858584] font-mono'>
              Minted on Sep 30, 2022
            </span>

            {/* Created By */}
            <div className='mt-4'>
              <span className='font-normal text-[22px] leading-[160%] capitalize text-[#858584] font-mono'>
                Created By
              </span>
              <div className='flex items-center gap-2 mt-2'>
                <Image src={avatar} alt='avatar image' width={40} height={40} />
                <span className='font-semibold text-[22px] leading-[140%] capitalize text-[#fff]'>
                  Orbitian
                </span>
              </div>
            </div>

            {/* Description */}
            <div className='mt-4'>
              <span className='font-normal text-[22px] leading-[160%] capitalize text-[#858584] font-mono'>
                Description
              </span>
              <p className='font-normal text-[18px] sm:text-[20px] md:text-[22px] leading-[160%] text-[#fff] mt-2'>
                The Orbitians is a collection of 10,000 unique NFTs on the Ethereum blockchain. There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. They live in metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
              </p>
            </div>

            {/* Details */}
            <div className='mt-5'>
              <span className='font-normal text-[22px] leading-[160%] capitalize text-[#858584] font-mono'>
                Details
              </span>
              <div className='flex items-center gap-2 mt-2'>
                <TbWorld className='text-[#858584] text-2xl' />
                <p className='font-normal text-[22px] leading-[160%] text-[#fff] font-mono m-0'>
                  View on Etherscan
                </p>
              </div>
              <div className='flex items-center gap-2 mt-2'>
                <TbWorld className='text-[#858584] text-2xl' />
                <p className='font-normal text-[22px] leading-[160%] text-[#fff] font-mono m-0'>
                  View Original
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className='mt-6'>
              <span className='font-normal text-[22px] leading-[160%] capitalize text-[#858584] font-mono'>
                Tag
              </span>
              <div className='mt-4 flex flex-wrap gap-4'>
                {['Animation', 'Illustration', 'Moon', 'Moon'].map((tag, index) => (
                  <span
                    key={index}
                    className='px-4 h-[46px] flex justify-center items-center bg-[#3B3B3B] font-semibold text-[16px] leading-[140%] uppercase text-[#fff] shadow-md rounded-[20px] transform transition duration-300 hover:scale-105 cursor-pointer'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side (Timer) */}
          <div className='w-full lg:w-6/12 flex justify-center lg:justify-end'>
            <div className="w-full max-w-[295px] h-[237px] backdrop-blur-md bg-[#3b3b3b]/50 text-white rounded-[20px] p-4">
              <span className="text-xs tracking-wider">Auction ends in:</span>
              <div className="flex justify-between items-center mt-2">
                <div className="text-center">
                  <span className="text-[28px] sm:text-[34px] md:text-[38px] font-bold">{hours} :</span>
                  <h5 className="text-xs font-mono">Hours</h5>
                </div>
                <div className="text-center">
                  <span className="text-[28px] sm:text-[34px] md:text-[38px] font-bold">{minutes}</span>
                  <h5 className="text-xs font-mono">Minutes</h5>
                </div>
                <div className="text-center">
                  <span className="text-[28px] sm:text-[34px] md:text-[38px] font-bold">: {seconds}</span>
                  <h5 className="text-xs font-mono">Seconds</h5>
                </div>
              </div>
              <button className='w-full h-[60px] rounded-[20px] bg-[#A259FF] shadow-md font-semibold text-[16px] leading-[140%] text-center mt-4'>
                Place Bid
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
