import { Netflixbg } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
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
             <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch