import React from 'react'
import wallet from "@/public/wallet/wallet (4).png"
import wallet2 from "@/public/wallet/wallet (1).png"
import wallet3 from "@/public/wallet/wallet (2).png"
import wallet4 from "@/public/wallet/wallet (3).png"
import Image from 'next/image'

export default function WalletConnect() {
  return (
    <>
 <section className="bg-[#2B2B2B] py-12">
  <div className="container mx-auto px-4 shadow-lg rounded-md bg-[#3B3B3B] p-4 md:p-6 lg:p-8">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start justify-center">
      
      {/* Image Section */}
      <div className="w-full lg:w-6/12 flex justify-center lg:justify-start">
        <Image
          src={wallet}
          alt="Sign Up Image"
          className="shadow-md rounded-md w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto"
        />
      </div>

      {/* Wallet Section */}
      <div className="w-full lg:w-6/12 text-center lg:text-left">
        <h4 className="font-semibold text-3xl md:text-4xl lg:text-[51px] leading-[110%] capitalize text-white">
          Connect wallet
        </h4>
        <p className="font-normal text-base md:text-lg lg:text-[22px] leading-relaxed capitalize text-white mt-3">
          Choose a wallet you want to connect. There are several wallet providers.
        </p>

        {/* Wallet Options */}
        <div className="flex flex-col items-center lg:items-start gap-4 mt-4">
          {/* Metamask */}
          <div className="flex items-center gap-3 bg-[#484747] rounded-[20px] shadow-md w-full max-w-[280px] h-[72px] transform transition duration-300 hover:scale-105 cursor-pointer p-2">
            <Image src={wallet2} alt="wallet logo" />
            <span className="font-bold text-[22px] leading-[110%] font-sans text-white tracking-wide">
              Metamask
            </span>
          </div>

          {/* Wallet Connect */}
          <div className="flex items-center gap-3 bg-[#484747] rounded-[20px] shadow-md w-full max-w-[280px] h-[72px] transform transition duration-300 hover:scale-105 cursor-pointer p-2">
            <Image src={wallet3} alt="wallet logo" />
            <span className="font-bold text-[22px] leading-[110%] font-sans text-white tracking-wide">
              Wallet Connect
            </span>
          </div>

          {/* Coinbase */}
          <div className="flex items-center gap-3 bg-[#484747] rounded-[20px] shadow-md w-full max-w-[280px] h-[72px] transform transition duration-300 hover:scale-105 cursor-pointer p-2">
            <Image src={wallet4} alt="wallet logo" />
            <span className="font-bold text-[22px] leading-[110%] font-sans text-white tracking-wide">
              Coinbase
            </span>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </>
  )
}
