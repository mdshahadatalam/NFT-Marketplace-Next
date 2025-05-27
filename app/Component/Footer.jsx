import React from 'react'
import Image from 'next/image';
import logo from "@/public/bg/logo.png"
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";




export default function Footer() {
  return (
    <>
      <section className='bg-[#3B3B3B] py-12'>
         <div className="container">
             <div className='flex flex-col-reverse lg:flex-row gap-x-6'>

                 <div className='w-full lg:w-4/12 mt-4'>
                   <Image src={logo} alt='Logo'/>
                   <h4 className='font-normal text-[16px] leading-[140%] text-[#ccc] font-mono my-4'>NFT marketplace UI created with Anima for Figma.</h4>
                   <span  className='font-normal text-[16px] leading-[140%] text-[#ccc] font-mono'>Join our community</span>
                     
                     <div className='d-flex align-items-center gap-2 mt-4'>
                           <span className='text-xl text-[#ccc]'><CiYoutube /></span>
                           <span className='text-xl text-[#ccc]'><CiTwitter /></span>
                           <span className='text-2xl text-[#ccc]'><FaInstagram /></span>
                     </div>

                 </div>

                 <div className='w-full lg:w-4/12 mt-4'>
                  <h4 className='font-bold text-[22px] leading-[160%] capitalize text-[#fff] tracking-wide'>Explore</h4>

                  <a className='no-underline text-[#ccc] font-normal text-[16px] leading-[140%] font-mono mt-3 d-inline-block' href="">Marketplace</a> <br/>
                  <a className='no-underline text-[#ccc] font-normal text-[16px] leading-[140%] font-mono mt-3 d-inline-block' href="">Rankings</a> <br />
                  <a className='no-underline text-[#ccc] font-normal text-[16px] leading-[140%] font-mono mt-3 d-inline-block' href="">Connect a wallet</a>
                 </div>

                 <div className='w-full lg:w-4/12 mt-4'>

                  <h4 className='font-bold text-[22px] leading-[160%] capitalize text-[#fff]'>Join our weekly digest</h4>
                  <p className=' text-[#ccc] font-normal text-[16px] leading-[140%] font-mono   mt-3'>Get exclusive promotions & updates straight to your inbox.</p>
                  
                   {/* Email Input Field */}
        <div className="relative w-full max-w-[522px] mx-auto lg:mx-0 mt-6">
          <input
            type="text"
            placeholder="Enter your email here"
            className="w-full h-[54px] md:h-[60px] rounded-[30px] bg-white placeholder:text-black placeholder:text-[14px] md:placeholder:text-[16px] text-black px-6 pr-[150px] md:pr-[180px] outline-none shadow-md"
          />
          <button
            style={{ borderRadius: '30px' }}
            className="absolute top-1/2 right-4 -translate-y-1/2 h-[42px] md:h-[46px] px-4 md:px-6 font-semibold text-[14px] md:text-[16px] text-white bg-[#A259FF] hover:opacity-90 transition w-[120px] sm:w-[140px] md:w-[164px] font-sans"
          >
            Subscribe
          </button>
        </div>

                 </div>
             </div>

                     {/* horijontal line */}

                     <hr className='text-[#ccc] '/>

                     <span className='font-normal text-[12px] leading-[110%] text-[#ccc]'>Ⓒ NFT Market. Use this template freely.</span>
         </div>
      </section>
    </>
  )
}
