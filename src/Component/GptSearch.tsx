import React from 'react'
import { Netflixbg } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
        {/* Background image */}
             <img
               src={Netflixbg}
               alt="netflixBg"
               className="h-full w-full object-cover"
             />
    </div>
  )
}

export default GptSearch