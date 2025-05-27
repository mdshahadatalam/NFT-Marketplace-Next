import React from 'react'
import Image from 'next/image';
import image from "@/public/signUp/Image.png"

export default function createdAccount() {
  return (
    <>
      <section className='bg-[#2B2B2B] py-12'>
         <div className="container">
             <div className='flex flex-col-reverse lg:flex-row items-center justify-center'>

                   <div className='w-full lg:w-6/12'>
                          <Image src={image} alt="Sign Up Image" className='' />
                   </div>
                   <div className='w-full lg:w-6/12'>
                   </div>

             </div>
         </div>
      </section>
    </>
  )
}
