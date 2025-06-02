import React from 'react'
import Image from 'next/image'
import photo from "@/public/join/Photo.png"
export default function Join() {
  return (
    <>
<section className="bg-[#2B2B2B] py-12">
  <div className="container bg-[#3B3B3B] p-6 md:p-9 rounded-[20px] shadow-lg">
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
      
      {/* Image Section */}
      <div className="w-full lg:w-6/12 flex justify-center">
        <Image
         data-aos="zoom-in"
         data-aos-duration="2500"
         src={photo}
         alt="photo" 
         className="max-w-full h-auto" 
         />
      </div>

      {/* Text + Input Section */}
      <div className="w-full lg:w-6/12 text-center lg:text-left">
        <h4 className="font-semibold text-[28px] md:text-[34px] lg:text-[38px] leading-[120%] capitalize text-white">
          Join our weekly digest
        </h4>
        <p className="font-normal text-[18px] md:text-[20px] lg:text-[22px] leading-[160%] capitalize text-white mt-4">
          Get exclusive promotions & updates straight to your inbox.
        </p>

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
  </div>
</section>

    </>
  )
}
