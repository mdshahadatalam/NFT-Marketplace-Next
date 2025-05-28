import Image from 'next/image'
import React from 'react'
import artist from "@/public/artist/artist (2).png"
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { MdContentCopy } from 'react-icons/md';
import { IoAdd } from "react-icons/io5";

import discover from "@/public/discover/discover (2).png"
import discover2 from "@/public/discover/discover (1).png"
import discover3 from "@/public/discover/discover (3).png"

import artist1 from "@/public/artist/artist (1).png"
import artist2 from "@/public/artist/artist (2).png"
import artist3 from "@/public/artist/artist (3).png"
import artist4 from "@/public/artist/artist (4).png"
import artist5 from "@/public/artist/artist (5).png"
import artist6 from "@/public/artist/artist (6).png"
import artist7 from "@/public/artist/artist (7).png"



import avatar from "@/public/artist/Avatar (1).png"




export default function Artist() {
  return (
    <>
      {/* Banner  */}
     <section className='artistBg'></section>
         {/* profle  */}
       <section className='py-12 bg-[#2B2B2B]'>
              <div className="container">
                   <div className='flex flex-col-reverse lg:flex-row position-relative'>
                      <div className='w-full lg:w-6/12'>
                          <Image className='position-absolute top-[-130px]' src={artist} alt="artist" />

                            <h4 className='font-semibold text-[51px] leading-[110%] capitalize text-[#fff] font-mono py-3'>Animakid</h4>

                               <div className="flex sm:flex-row gap-8 mt-8">
                                   <div className="font-mono tracking-wide text-white">
                                     <h4 className="font-bold text-[24px] sm:text-[28px] leading-[140%] capitalize">250k+</h4>
                                     <span className="font-normal text-[20px] sm:text-[23px] leading-[160%] capitalize">Volum</span>
                                   </div>

                                      <div className="font-mono tracking-wide text-white">
                                        <h4 className="font-bold text-[24px] sm:text-[28px] leading-[140%] capitalize">50+</h4>
                                        <span className="font-normal text-[20px] sm:text-[23px] leading-[160%] capitalize">NFTs Sold</span>
                                      </div>

                                        <div className="font-mono tracking-wide text-white">
                                          <h4 className="font-bold text-[24px] sm:text-[28px] leading-[140%] capitalize">3000+</h4>
                                          <span className="font-normal text-[20px] sm:text-[23px] leading-[160%] capitalize">Followers</span>
                                        </div>
                                      </div>


                                 <div className='mt-8'>
                                      <span className='font-bold text-[22px] leading-[60%] capitalize text-[#858584] font-mono' >Bio</span>
                                      <p className='font-normal text-[22px] leading-[160%] capitalize text-[#fff] tracking-wide'>The internet's friendliest designer kid.</p>

                                      <span className='font-bold text-[22px] leading-[60%] capitalize text-[#858584] font-mono' >Links</span>

                                       <div className='d-flex align-items-center gap-2 mt-2'>
                                        <span className='text-xl text-[#ccc] cursor-pointer'><TbWorld /></span>
                                        <span className='text-xl text-[#ccc] cursor-pointer' ><CiYoutube /></span>
                                        <span className='text-xl text-[#ccc] cursor-pointer'><CiTwitter /></span>
                                        <span className='text-2xl text-[#ccc] cursor-pointer'><FaInstagram /></span>
                                       </div>
                                </div>     
                      </div>
                      <div className='w-full lg:w-6/12 '>

                           <div className='d-flex align-items-center gap-x-4'>
                                       {/* Button 1*/}
                                <div className="mt-4">
                                  <button className="font-semibold text-[16px] leading-[140%] text-center bg-[#a259ff] rounded-[20px] px-[40px] sm:px-[50px] py-[10px] w-full sm:w-[224px] h-[60px] text-white font-sans tracking-wide flex items-center justify-center gap-2 hover:bg-[#8a40e8] transform transition duration-300 hover:scale-105">
                                    <span className="text-2xl font-medium">
                                      <MdContentCopy />
                                    </span>
                                    0xc0E3...B79C
                                  </button>
                                </div>
                                      
                                      {/* Button 2*/}
                                 <button className="rounded-[20px] px-8 font-mono w-full sm:w-auto h-14 font-semibold text-[16px] text-white border-2 border-[#A259FF] flex items-center justify-center gap-2 hover:bg-[#A259FF] transition-all duration-300 mt-3">
                                <span className="text-xl"> <IoAdd /> </span>
                                 Follow
                                </button>
                            </div>
                      </div>
                   </div>
              </div>
       </section>

        {/* discover more NFTs */}
        <section className='bg-[#3B3B3B] py-12'>
            <div className="container mx-auto">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Card 1 */}
             <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
               <Image src={discover} alt="Art Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   Distant Galaxy
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={discover2} alt="Collectibles Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   Distant Galaxy
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={discover3} alt="Art Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   Distant Galaxy
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={artist7} alt="Art Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   CryptoCity
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={artist1} alt="Collectibles Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   ColorfulDog 0524
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={artist5} alt="Art Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   Space Tales
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={artist3} alt="Art Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   Cherry Blossom Girl 037
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={artist6} alt="Collectibles Category" className="w-full h-auto object-cover" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   Dancing Robots 0987
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
               <Image src={artist4} alt="Art Category" className="w-full h-auto" />
               <div className="bg-[#3B3B3B] p-4">
                 <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                   IceCream Ape 
                 </h4>
           
                 <div className="flex items-center gap-2 mb-4">
                   <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                   <span className="font-normal text-[16px] text-white font-mono">Animakid</span>
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
