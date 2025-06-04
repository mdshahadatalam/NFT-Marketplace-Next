"use client";
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../public/logo.png';
import Image from "next/image";
import { PiUserBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import userImg from '../../public/user/plax.jpg'; // Assuming you have a default user image  



export default function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
      const route = useRouter()

      const data = useSession();
      const user = data?.data?.user;

      const handleSignUp = ()=>{
           route.push('/createdAccount')
      }
  return (
     <>
       <section className="bg-[#2B2B2B] py-2">
           <div className="container">
                <nav className="flex items-center justify-between w-full relative">

            {/* logo */}
            <Link href="/"> 
            <Image  src={logo} alt="logo"/>
              </Link>
            {/* nav menus */}
            <ul className="items-center gap-[20px] text-[16px] text-[#FFFFFF] md:flex hidden ms-auto mt-1 ">
                 
                 <Link className="no-underline text-[#fff]" href={'/MarketPlace'}>
                   <li  className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-mono font-semibold text-base tracking-wide leading-[140%] text-center px-2">Marketplace</li>
                 </Link>
                

                <Link href={'/Ranking'} className="no-underline text-[#fff]">
                  <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-mono font-semibold text-base tracking-wide leading-[140%] text-center px-2">Rankings</li>
                </Link>

                <Link href={'/Wallet'} className="no-underline text-[#fff]">
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize font-mono font-semibold text-base tracking-wide leading-[140%] text-center px-2">Connect a wallet</li>
                </Link>


                  <div>


                    {
                      user ? <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full">
                        <Link href={'/User'}><Image src={userImg} alt="user image" className="w-full h-full rounded-full object-cover" /></Link>
                      </div> :  <button onClick={handleSignUp} className="rounded-[20px] px-[25px] w-[142px] h-[60px] font-semibold text-base leading-[140%] text-center  bg-[#A259FF] hover:bg-[#8a40e8]  text-white mx-auto   transform transition duration-300 hover:scale-105 align-items-center flex justify-center gap-2">
                      <span><PiUserBold /></span> Sign Up
                        </button>
                    }
                   

                  </div>
                  
            </ul>

            {/*community links */}
                
                
                 <div className="flex items-center gap-[10px]">

                <CiMenuFries
                    className="text-[1.6rem] text-[#ffff] cursor-pointer md:hidden flex"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} />

            </div>

            {/* mobile sidebar */}
            <aside
                className={` ${isMenuOpen ? "translate-y-0 opacity-100 z-20" : "translate-y-[200px] opacity-0 z-[-1]"} md:hidden bg-black p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>

                 <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex justify-center">
                  <Link href={'/'}><Image src={logo} alt="logo image" className="mb-4 w-[200px]"/></Link>
                 </div>

                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch
                        className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
                </div>

                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">

                    <Link href={'/MarketPlace'} className="no-underline text-[#fff]" >
                      <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">market place</li>
                    </Link>

                     <Link href={'/Ranking'} className="no-underline text-[#fff]" >
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">rankings</li>
                     </Link>

                     <Link href={'/Wallet'} className="no-underline text-[#fff]" > 
                        <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">wallet a connect</li>
                     </Link>
                </ul>

                <div className="my-2">

                   <Link href={'/createdAccount'}>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-[20px] px-[25px] w-[150px] h-[45px] font-semibold text-base leading-[140%] text-center  bg-[#A259FF] hover:bg-[#8a40e8]  text-white mx-auto   transform transition duration-300 hover:scale-105 align-items-center flex justify-center gap-2">
                      <span><PiUserBold /></span> Sign Up
                    </button>
                   </Link>
                   
                  </div>

            </aside>

        </nav>
        </div>
       </section>
     </>
  );
}