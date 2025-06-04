"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import image from "@/public/signUp/Image.png"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

export default function LogingAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const route = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

     try {
       const res = await signIn("credentials",{
        email,
        password,
        redirect: false
       })

       if(res?.error) {
         console.error("Login failed:", res.error);
             toast.error('Login failed. Please check your credentials', {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
            //  transition: Bounce,
             });
         return;
       }
        
        setEmail("");
        setPassword("");
       route.push("/");
     } catch (error) {
      console.log("Login error:", error);
        toast.error('An error occurred during login. Please try again', {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "light",
            //  transition: Bounce,
             });
      
     }
  }
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
               Login account
             </h4>
             <p className='font-normal text-base md:text-lg lg:text-[22px] leading-relaxed capitalize text-white mt-4'>
               Welcome! Enter your details and start login, collecting and selling NFTs.
             </p>
     
             <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
            
               <input
                 className='w-full max-w-md h-[46px] rounded-[20px] px-4 outline-none placeholder:text-slate-500'
                 type="email"
                 name="email"
                 id="email"
                 placeholder='Email Address'
                 onChange={(e) => setEmail(e.target.value) }
                 value={email}
               />
     
               <input
                 className='w-full max-w-md h-[46px] rounded-[20px] px-4 outline-none placeholder:text-slate-500'
                 type="password"
                 name="password"
                 id="password"
                 placeholder='Password'
                 onChange={(e) => setPassword(e.target.value) }
                 value={password}
               />
     
               <button
                 className='w-full max-w-md h-[46px] rounded-[20px] px-4 font-semibold text-[16px] text-center bg-[#A259FF] text-white mt-3 transition-transform duration-300 hover:scale-105'>
                 Login
               </button>
             </form>

             <p className='font-semibold text-[16px] text-slate-500 leading-[110%] font-mono mt-4'>Don't have a account? <Link href={'/createdAccount'}>Sign Up</Link> </p>
           </div>
     
         </div>
       </div>
     </section>

     <ToastContainer/>
   </>
  )
}
