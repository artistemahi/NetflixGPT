import React from "react";
import Header from "./Header";
import { Netflixbg } from "../utils/constants";
const login = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <img src={Netflixbg} alt="netflixBg"></img>
      {/* Overlay (dark layer) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div>
          {" "}
          <h1 className="text-center text-4xl md:text-5xl font-bold text-white max-w-2xl">
            Unlimited movies, shows, and more
          </h1>
          <p className="text-center mt-4 font-bold text-white ">
            Starts at ₹149. Cancel at any time.
          </p>
          <p className="text-center mt-4  text-white ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex">
            <input
              className=" w-full
                      bg-transparent
                     border border-white/40
                     px-4 py-3
                     text-white
                     placeholder-white/70
                        outline-none
                     focus:border-white"
              placeholder="Email address"
            />
            <button className=" rounded-md text-white font-bold text-2xl  text-center pr-4 ml-4 mr-4 w-full bg-red-600">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
