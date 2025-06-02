 "use client"
import React, { useEffect, useState } from 'react'
import avatar from "@/public/bg/Avatar (2).png"
import Image from 'next/image'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from 'next/link';

export default function Magic({ targetHour = 18, targetMinute = 0 }) {
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
<section className="backImage py-16 md:py-24 lg:py-32">
  <div className="container mx-auto px-4">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0 pt-60">

      {/* Left Side (Header) */}
      <div className="w-full lg:w-6/12 space-y-6 text-center lg:text-left">
        <Link href={'/Artist'} className='no-underline cursor-pointer'>
           <div className="w-fit mx-auto lg:mx-0 flex items-center gap-3 bg-[#3B3B3B] rounded-[20px] px-4 py-2  transition-all duration-300 scale-100 hover:scale-105 hover:bg-[#A259FF] hover:text-white">
          <Image src={avatar} alt="avatar" className="w-6 h-6" />
          <span className="text-white text-sm tracking-wide">Shroomie</span>
        </div>
        </Link>

        <h4 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight capitalize">
          Magic Mashrooms
        </h4>

        <div className='d-flex justify-center transition-all duration-300 scale-100 hover:scale-105'>
           
           <Link href={'/NFTMarketPlace'} className='no-underline'>
          <button className="w-full sm:w-auto h-14 px-8 flex items-center justify-center gap-2 bg-white text-black text-sm sm:text-base font-semibold rounded-[20px] transition-all duration-300 scale-100 hover:scale-105 hover:bg-[#A259FF] hover:text-white">
             <span className="text-xl text-[#A259FF]">
            <MdOutlineRemoveRedEye />
          </span>
          See NFT
        </button>
           </Link>
         
        </div>

      </div>

      {/* Right Side (Countdown Timer) */}
      <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
        <div  data-aos="zoom-in"
            data-aos-duration="1500" className="w-full max-w-[295px] h-[147px] backdrop-blur-md bg-[#3b3b3b]/50 text-white rounded-[20px] p-4">
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
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
