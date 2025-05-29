import React from 'react'
import Image from 'next/image';
import image from "@/public/signUp/Image.png"

export default function CreatedAccount() {
  return (
    <>
  <section className='bg-[#2B2B2B] py-12'>
  <div className="container mx-auto px-4 shadow-lg rounded-md bg-[#3B3B3B] p-4 lg:p-8">
    <div className='flex flex-col lg:flex-row gap-12 lg:gap-8 items-start lg:items-center justify-center'>

      {/* Image Section */}
      <div className='w-full lg:w-6/12 flex justify-center lg:justify-start'>
        <Image 
          src={image} 
          alt="Sign Up Image" 
          className='shadow-md rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto' 
        />
      </div>

      {/* Form Section */}
      <div className='w-full lg:w-6/12'>
        <h4 className='font-semibold text-3xl md:text-4xl lg:text-[51px] leading-[110%] capitalize text-white'>
          Create account
        </h4>
        <p className='font-normal text-base md:text-lg lg:text-[22px] leading-relaxed capitalize text-white mt-2'>
          Welcome! Enter your details and start creating, collecting and selling NFTs.
        </p>

        <form action="" className='mt-6 space-y-4'>
          <input
            className='w-full max-w-md h-[46px] rounded-[20px] px-4 outline-none placeholder:text-black'
            type="text"
            name="username"
            id="username"
            placeholder='Username'
          />

          <input
            className='w-full max-w-md h-[46px] rounded-[20px] px-4 outline-none placeholder:text-black'
            type="email"
            name="email"
            id="email"
            placeholder='Email Address'
          />

          <input
            className='w-full max-w-md h-[46px] rounded-[20px] px-4 outline-none placeholder:text-black'
            type="password"
            name="password"
            id="password"
            placeholder='Password'
          />

          <input
            className='w-full max-w-md h-[46px] rounded-[20px] px-4 outline-none placeholder:text-black'
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder='Confirm Password'
          />

          <button
            className='w-full max-w-md h-[46px] rounded-[20px] px-4 font-semibold text-[16px] text-center bg-[#A259FF] text-white mt-2 transition-transform duration-300 hover:scale-105'>
            Create account
          </button>
        </form>
      </div>

    </div>
  </div>
</section>
    </>
  )
}
