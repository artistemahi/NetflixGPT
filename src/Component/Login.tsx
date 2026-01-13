import React from "react";
import Header from "./Header";
import {Netflixbg} from "../utils/constants"
const login = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <img src = {Netflixbg}></img>
    </div>
  );
};

export default login;
