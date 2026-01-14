import { NetflixLogo } from "../utils/constants";
import LanguageSelector from "./LanguageSelector";
const Header = ({IsSignIn,signinHandler}) => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black px-8 py-4 flex items-center justify-between">
      {/* Left: Logo */}
      <img
        className="w-44 cursor-pointer"
        src={NetflixLogo}
        alt="netflix-logo"
      />
      {/* Right: Language selector + Sign Out */}
      {!IsSignIn && ( 
      <div className="flex items-center gap-4">
        <LanguageSelector />
        
          <button onClick={signinHandler} className="rounded-md bg-red-600 px-6 py-2 text-white font-semibold hover:bg-red-700 transition">
            Sign Out
          </button>
    
      </div>)}
     
    </header>
  );
};

export default Header;
