"use client";
import React from 'react'
import tranding from '@/public/tran/tranding (2).png';
import tranding2 from '@/public/tran/tranding (3).png';
import tranding3 from '@/public/tran/tranding (1).png';

import smallTrn from '@/public/tran/smallTrn (2).png'
import smallTrn2 from '@/public/tran/smallTrn (3).png'
import smallTrn3 from '@/public/tran/smallTrn (1).png'

import masrom1 from '@/public/tran/masrom (1).png';
import masrom2 from '@/public/tran/masrom (2).png';

import robot1 from '@/public/tran/robot (1).png';
import robot2 from '@/public/tran/robot (2).png';

import foxImg from '@/public/tran/fox.png';
import avatar1 from '@/public/tran/Avatar (1).png';
import avatar2 from '@/public/tran/Avatar (2).png';



import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Tranding() {
  const route = useRouter()

  const handleNFT =()=>{
      route.push('/NFTMarketPlace')
  }
  const handleArtist =()=>{
    route.push('/Artist')
  }
  return (
    <>
       {/* <section className='bg-[#2B2B2B]'>
          <div className="container mx-auto px-4">
            <div>
             <h2 className='font-semibold text-[38px] leading-[120%] capitalize text-[#fff]'>Trending Collection</h2>
             <p className='font-normal text-[22px] leading-[160%] capitalize text-[#fff]'>Checkout our weekly updated trending collection.</p>
            </div>

              <div className='flex flex-col-reverse lg:flex-row  gap-10 py-[50px]'>

                 <div className='w-full lg:w-4/12'>
                    <Image src={tranding} alt="tranding" className='w-full h-auto object-cover max-w-full' />
                     
                     <div className='flex flex-col-reverse lg:flex-row gap-2 mt-4'>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={smallTrn} alt="smallTrn" className='object-cover max-w-full' />
                         </div>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={smallTrn3} alt="smallTrn2" className='object-cover max-w-full' />
                         </div>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={smallTrn2} alt="smallTrn2" className='object-cover max-w-full' />
                         </div>                     
                     </div>

                     <div className='mt-3'>
                         <h2 className='font-semibold text-[22px] leading-[140%] capitalize text-[#fff]'>DSGN Animals</h2>

                          <div className='flex items-center gap-2 mt-2'>
                             <Image src={foxImg} alt="foxImg" className='object-cover max-w-full' />
                             <span className='font-normal text-[16px] leading-[140%] text-[#fff]'>MrFox</span>
                          </div>
                     </div>

                 </div>

                 <div className='w-full lg:w-4/12'>
                     <Image src={tranding2} alt="tranding" className='w-full h-auto object-cover max-w-full' />
                     
                     <div className='flex flex-col-reverse lg:flex-row gap-2 mt-4'>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={masrom1} alt="smallTrn" className='object-cover max-w-full' />
                         </div>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={masrom2} alt="smallTrn2" className='object-cover max-w-full' />
                         </div>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={smallTrn2} alt="smallTrn2" className='object-cover max-w-full' />
                         </div>                     
                     </div>

                     <div className='mt-3'>
                         <h2 className='font-semibold text-[22px] leading-[140%] capitalize text-[#fff]'>Magic Mushrooms</h2>

                          <div className='flex items-center gap-2 mt-2'>
                             <Image src={avatar2} alt="foxImg" className='object-cover max-w-full' />
                             <span className='font-normal text-[16px] leading-[140%] text-[#fff]'>Shroomie</span>
                          </div>
                     </div>
                   </div>


                 <div className='w-full lg:w-4/12'>
                        <Image src={tranding3} alt="tranding" className='w-full h-auto object-cover max-w-full' />
                     
                     <div className='flex flex-col-reverse lg:flex-row gap-2 mt-4'>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={robot1} alt="smallTrn" className='object-cover max-w-full' />
                         </div>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={robot2} alt="smallTrn2" className='object-cover max-w-full' />
                         </div>
                         <div className='w-full lg:w-4/12 text-white'>
                            <Image src={smallTrn2} alt="smallTrn2" className='object-cover max-w-full' />
                         </div>                     
                     </div>

                     <div className='mt-3'>
                         <h2 className='font-semibold text-[22px] leading-[140%] capitalize text-[#fff]'>Disco Machines</h2>

                          <div className='flex items-center gap-2 mt-2'>
                             <Image src={avatar1} alt="foxImg" className='object-cover max-w-full' />
                             <span className='font-normal text-[16px] leading-[140%] text-[#fff]'>BeKind2Robots</span>
                          </div>
                     </div>
                  </div>
              </div>


          </div>
       </section> */}



<section className="bg-[#2B2B2B] py-16">
  <div className="container mx-auto px-4">

    {/* Heading */}
    <div className="mb-10">
      <h2 className="font-semibold text-[28px] sm:text-[32px] lg:text-[38px] leading-[120%] capitalize text-white">
        Trending Collection
      </h2>
      <p className="font-normal text-[18px] sm:text-[20px] lg:text-[22px] leading-[160%] capitalize text-white mt-2">
        Checkout our weekly updated trending collection.
      </p>
    </div>

    {/* Cards */}
    <div className="flex flex-col lg:flex-row gap-10">

      {/* Card 1 */}
      <div className="w-full lg:w-4/12">
        <Image
         onClick={handleNFT}
          src={tranding} alt="Trending 1" className="w-full h-auto object-cover rounded-xl  transform transition duration-300 hover:scale-105 cursor-pointer " />
        
        <div className="flex flex-row gap-2 mt-4">
          <Image
           onClick={handleNFT}
           src={smallTrn} alt="thumb 1" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
          <Image
           onClick={handleNFT}
           src={smallTrn3} alt="thumb 2" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
          <Image
           onClick={handleNFT}
           src={smallTrn2} alt="thumb 3" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-[20px] lg:text-[22px] leading-[140%] capitalize text-white">
            DSGN Animals
          </h3>
          <div onClick={handleArtist} className="flex items-center gap-2 mt-2">
            <Image src={foxImg} alt="MrFox" className="w-6 h-6 rounded-full object-cover  transform transition duration-300 hover:scale-105 cursor-pointer" />
            <span className="font-normal text-[16px] leading-[140%] text-white cursor-pointer">MrFox</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full lg:w-4/12">
        <Image
        onClick={handleNFT}
         src={tranding2} alt="Trending 2" className="w-full h-auto object-cover rounded-xl  transform transition duration-300 hover:scale-105 cursor-pointer" />

        <div className="flex flex-row gap-2 mt-4">
          <Image
            onClick={handleNFT}
           src={masrom1} alt="thumb 1" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
          <Image
            onClick={handleNFT}
           src={masrom2} alt="thumb 2" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
          <Image
            onClick={handleNFT}
           src={smallTrn2} alt="thumb 3" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-[20px] lg:text-[22px] leading-[140%] capitalize text-white">
            Magic Mushrooms
          </h3>
          <div onClick={handleArtist} className="flex items-center gap-2 mt-2">
            <Image src={avatar2} alt="Shroomie" className="w-6 h-6 rounded-full object-cover  transform transition duration-300 hover:scale-105 cursor-pointer" />
            <span className="font-normal text-[16px] leading-[140%] text-white cursor-pointer">Shroomie</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full lg:w-4/12">
        <Image
        onClick={handleNFT}
         src={tranding3} alt="Trending 3" className="w-full h-auto object-cover rounded-xl  transform transition duration-300 hover:scale-105 cursor-pointer" />

        <div className="flex flex-row gap-2 mt-4">
          <Image
            onClick={handleNFT}
           src={robot1} alt="thumb 1" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
          <Image
            onClick={handleNFT}
           src={robot2} alt="thumb 2" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
          <Image
            onClick={handleNFT}
           src={smallTrn2} alt="thumb 3" className="w-1/3 object-cover rounded-lg  transform transition duration-300 hover:scale-105 cursor-pointer" />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-[20px] lg:text-[22px] leading-[140%] capitalize text-white">
            Disco Machines
          </h3>
          <div onClick={handleArtist} className="flex items-center gap-2 mt-2">
            <Image src={avatar1} alt="BeKind2Robots" className="w-6 h-6 rounded-full object-cover  transform transition duration-300 hover:scale-105 cursor-pointer" />
            <span className="font-normal text-[16px] leading-[140%] text-white cursor-pointer">BeKind2Robots</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

    </>
  )
}
