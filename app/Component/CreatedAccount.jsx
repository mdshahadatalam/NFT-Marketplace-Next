"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import image from "@/public/signUp/Image.png"
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PropagateLoader } from 'react-spinners';

export default function CreatedAccount() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const route = useRouter()

    const handleSubmit = async (e)=>{
      e.preventDefault()
      setLoader(true);
      try {
      
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setLoader(false);
        toast.error('user already exist please try another email!', {
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




       const res = await fetch("api/register",{
          method:"POST",
          headers: {
            "Content-Type":"application/json",
          },
          body:JSON.stringify({
            userName,email,password
          })
        }).then(() => {
          setLoader(false);
          route.push("/Login")
           setUserName("");
            setEmail("");
            setPassword("");
          toast.success('User registered successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }).catch((error) => {
          setLoader(false);
          toast.error('User registration failed!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.error("Error during registration:", error);
        })


      } catch (error) {
         console.log("Error during registration", error);
         setLoader(false);

           toast.error('Error during registration', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
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
          Create account
        </h4>
        <p className='font-normal text-base md:text-lg lg:text-[22px] leading-relaxed capitalize text-white mt-4'>
          Welcome! Enter your details and start creating, collecting and selling NFTs.
        </p>

        <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
          <input
            className='w-full max-w-md h-[46px] rounded-[20px] px-4 outline-none placeholder:text-slate-500'
            type="text"
            name="username"
            id="username"
            placeholder='Username'
            onChange={(e) => setUserName(e.target.value) }
            value={userName}
          />

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
              {
                loader ? <PropagateLoader size={5} color='white' /> : "Create Account"
              }
          </button>
        </form>

           <p className='font-semibold text-[16px] text-slate-200 leading-[110%] font-mono mt-4 text-start'>Have a account? <Link href={'/Login'}>Sign In</Link> </p>
      </div>

    </div>
  </div>
</section>

<ToastContainer/>
    </>
  )
}
