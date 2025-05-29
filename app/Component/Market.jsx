"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import market1 from "@/public/market/market (1).png"
import market2 from "@/public/market/market (2).png"
import market3 from "@/public/market/market (3).png"
import market4 from "@/public/market/market (4).png"
import market5 from "@/public/market/market (5).png"
import market6 from "@/public/market/market (6).png"
import market7 from "@/public/market/market (7).png"
import market8 from "@/public/market/market (8).png"
import market9 from "@/public/market/market (9).png"
import market10 from "@/public/market/market (10).png"
import market11 from "@/public/market/market (11).png"
import market12 from "@/public/market/market (12).png"
import avatar from "@/public/NFT/Avatar (2).png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Market() {
    const route = useRouter()

    const handleNFT =()=>{
       route.push('/NFTMarketPlace')
    }
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


         <section className='bg-[#3B3B3B] py-12'>
                       <div className="container mx-auto">                          
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market6} alt="Art Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Magic Mushroom 0325
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">Shroomie</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market5} alt="Collectibles Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Happy Robot 032
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">BeKind2Robots</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market7} alt="Art Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Happy Robot 024
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">BeKind2Robots</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market8} alt="Art Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Designer Bear
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">Mr Fox</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market3} alt="Collectibles Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Colorful Dog 0356
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">Keepitreal</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market9} alt="Art Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Dancing Robot 0312
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">Robotica</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market10} alt="Art Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Cherry Blossom Girl 035
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">MoonDancer</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market11} alt="Collectibles Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Space Travel
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">NebulaKid</span>
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
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market12} alt="Art Category" className="w-full h-auto" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Sunset Dimension 
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
          
                                {/* Card 10 */}
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market1} alt="Art Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Desert Walk
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">Catch 22</span>
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
                      
                        {/* Card 11 */}
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market2} alt="Collectibles Category" className="w-full h-auto object-cover" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              IceCream Ape 0324
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">Ice Ape Club</span>
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
                      
                        {/* Card 12 */}
                        <div onClick={handleNFT} className="w-full rounded-2xl overflow-hidden shadow-lg bg-[#2e2e2e] transform transition duration-300 hover:scale-105 cursor-pointer mt-4">
                          <Image src={market4} alt="Art Category" className="w-full h-auto" />
                          <div className="bg-[#3B3B3B] p-4">
                            <h4 className="font-semibold text-[22px] leading-[140%] capitalize text-white font-mono mb-2">
                              Colorful Dog 0344 
                            </h4>
                      
                            <div className="flex items-center gap-2 mb-4">
                              <Image src={avatar} alt="avatar image" className="w-6 h-6 rounded-full" />
                              <span className="font-normal text-[16px] text-white font-mono">PuppyPower</span>
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
