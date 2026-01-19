import { useSelector } from "react-redux";
import lang from "../utils/Lang";

const GptSearchBar = () => {
    const langkey= useSelector((store:any)=>store.lang?.lang);
    // if (!langkey || !lang?.[langkey]) return;
    console.log(langkey)
  return (
    <div className=" pt-[10%] flex justify-center  ">
      <form className=" m-6 p-6 bg-black grid grid-cols-12 rounded-md">
        <input
          className=" mx-4 px-4 rounded-sm col-span-9"
          type="text"
          placeholder={lang[langkey]?.gptSearchPlaceholder}
        ></input>
        <button className="mx-4 px-4 font-bold text-lg py-1 text-white bg-red-600 rounded-sm col-span-3">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
