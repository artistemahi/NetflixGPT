import React from "react";
import { NetflixLogo } from "../utils/constants";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-black px-8 py-4 flex items-center justify-between">
      
      <img
        className="w-44 cursor-pointer"
        src={NetflixLogo}
        alt="netflix-logo"
      />

   
      <button className="rounded-md bg-red-600 px-6 py-2 text-white font-semibold hover:bg-red-700 transition">
        Sign Out
      </button>
    </header>
  );
};

export default Header;
