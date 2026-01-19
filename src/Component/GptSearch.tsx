import { Netflixbg } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
        {/* Background image */}
             <img
               src={Netflixbg}
               alt="netflixBg"
               className="absolute -z-10"
             />
             <GptSearchBar/>
    </div>
  )
}

export default GptSearch