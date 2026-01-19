import React from "react";

const GptSearchBar = () => {
  return (
    <div className=" pt-[10%] flex justify-center  ">
      <form className=" m-6 p-6 bg-black grid grid-cols-12 rounded-md">
        <input
          className=" mx-4 px-4 rounded-sm col-span-9"
          type="text"
          placeholder="What would you like to watch today?"
        ></input>
        <button className="mx-4 px-4 font-bold text-lg py-1 text-white bg-red-600 rounded-sm col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
