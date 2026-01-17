const VideoTitle = ({ title, Overview }) => {
  return (
      <div className=" w-screen absolute pt-[10%] px-9 aspect-video bg-gradient-to-r from-black  text-white" >
        <div className=" px-4 ">
        <h1 className="my-4 font-bold , text-4xl">{title}</h1>
        <p className="w-1/4 text-white">{Overview}</p>
        <div>
            <button className="bg-stone-50 font-bold text-black  hover:bg-stone-300 text-2xl mt-4 focus:border-black border-[1px] rounded-md px-3 py-0.5">► Play </button>
            <button className="text-white text-2xl mt-4 mx-2 bg-opacity-50 hover:bg-gray-300 focus:border-white border-[1px] font-bold bg-gray-600  rounded-md px-3 py-0.5">ⓘ More Info </button>
        </div>
      </div>
      </div>
  );
};

export default VideoTitle;
