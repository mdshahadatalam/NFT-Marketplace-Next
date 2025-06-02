"use client"
import Image from "next/image";
import errorImg from '@/public/sadface.gif'
// export const metadata = {
//   title: "Error....",
//   description: "Back to the page",
// };

export default function notFound() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black text-white">
    
          <div>
            
             <Image 
             className="w-[250px]"
              src={errorImg}
               alt="Error"
               />  

             <div>
              <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
              </div>     
          </div>   
             
    </div>
    
  );
}