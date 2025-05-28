"use client";
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../public/logo.png';
import Image from "next/image";
import { PiUserBold } from "react-icons/pi";
import { useRouter } from "next/navigation";



export default function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
      const route = useRouter()

      const handleSignUp = ()=>{
           route.push('/createdAccount')
      }

      const handleHome =()=>{
        route.push('/')
      }
      const handleMarketPlace =()=>{
        route.push('/MarketPlace')
      }
  return (
     <>
       <section className="bg-[#2B2B2B] py-2">
           <div className="container">
                <nav className="flex items-center justify-between w-full relative">

            {/* logo */}
            <Image onClick={handleHome} src={logo} alt="logo" className="cursor-pointer"/>

            {/* nav menus */}
            <ul className="items-center gap-[20px] text-[16px] text-[#FFFFFF] md:flex hidden ms-auto mt-1 ">
                <li onClick={handleMarketPlace} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-mono font-semibold text-base tracking-wide leading-[140%] text-center px-2">Marketplace</li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-mono font-semibold text-base tracking-wide leading-[140%] text-center px-2">Rankings</li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-mono font-semibold text-base tracking-wide leading-[140%] text-center px-2">Connect a wallet</li>


                  <div>
                  <button onClick={handleSignUp} className="rounded-[20px] px-[25px] w-[142px] h-[60px] font-semibold text-base leading-[140%] text-center  bg-[#A259FF] hover:bg-[#8a40e8]  text-white mx-auto   transform transition duration-300 hover:scale-105 align-items-center flex justify-center gap-2">
                    <span><PiUserBold /></span>
                    Sign Up
                    </button>

                  </div>
                  
            </ul>

            {/*community links */}
                
                
                 <div className="flex items-center gap-[10px]">

                <CiMenuFries
                    className="text-[1.6rem] text-[#ffff] cursor-pointer md:hidden flex"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}/>

            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${isMenuOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} md:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch
                        className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
                </div>

                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
                        us
                    </li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
                </ul>

            </aside>

        </nav>
        </div>
       </section>
     </>
  );
}