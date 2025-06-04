"use client"
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import React from 'react'

export default function UserInfo() {
  const {data:session}  = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  }
   
  
  console.log("Session:", session);
  


  
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        
         <div className='bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center'>
           <h1 className='text-2xl font-bold mb-4'>User Information</h1>
              <p className='text-lg'>Welcome to your user profile page!</p>
              {/* <p>Name:{session?.user?.name}</p> */}
              {/* <p>Email:{session?.user?.email}</p> */}

               <button 
                onClick={handleSignOut}
                 type="button"
                className="bg-red-500 text-white px-4 py-2 rounded">
               Log out
              </button>
         </div>
          
      </div>
    </>
  )
}
