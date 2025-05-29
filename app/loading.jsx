 "use client";

import { Roller } from "react-css-spinners";

export default function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black text-white">
    
                <Roller
                   color="rgba(239,229,239,1)"
                    size={90}
                      />
             
    </div>
    
  );
}