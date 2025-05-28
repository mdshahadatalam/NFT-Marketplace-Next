"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import avatar from "@/public/NFT/Avatar (2).png"
import { TbWorld } from "react-icons/tb";

import NFTImg1 from "@/public/NFT/NFT (1).png"
import NFTImg2 from "@/public/NFT/NFT (2).png"
import NFTImg3 from "@/public/NFT/NFT (3).png"
import NFTImg4 from "@/public/NFT/NFT (4).png"
import NFTImg5 from "@/public/NFT/NFT (5).png"
import NFTImg7 from "@/public/NFT/NFT (7).png"
import NFTImg8 from "@/public/NFT/NFT (8).png"
import NFTImg9 from "@/public/NFT/NFT (9).png"
import NFTImg10 from "@/public/NFT/NFT (10).png"


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

                 {/* NFT more card  */}
           <section className='bg-[#3B3B3B] py-12'>
                   <div className="container mx-auto">
                  
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg9} alt="Art Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Foxy Life
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg8} alt="Collectibles Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Cat from future
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg7} alt="Art Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Psycho Dog
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
       
                        {/* Card 4 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg2} alt="Art Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Designer Bear
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
                  
                    {/* Card 5 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg1} alt="Collectibles Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Dancing Robot 0375
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
                  
                    {/* Card 6 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg10} alt="Art Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Dancing Robot 0356
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
       
                            {/* Card 7 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg5} alt="Art Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Dancing Robot 0321
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
                  
                    {/* Card 8 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg4} alt="Collectibles Category" className="w-full h-auto object-cover" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Dancing Robot 0512
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
                  
                    {/* Card 9 */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                      <Image src={NFTImg3} alt="Art Category" className="w-full h-auto" />
                      <div className="bg-[#3B3B3B] p-4">
                        <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                          Dancing Robot 0024 
                        </h4>
                  
                        <div className="flex items-center gap-2 mb-4">
                          <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                          <span className="font-normal text-[16px] text-white font-mono">Orbitian</span>
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
