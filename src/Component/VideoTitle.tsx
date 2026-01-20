import { useState } from "react";

const VideoTitle = ({ title, Overview }) => {
  const [ShowMore, setShowMore] = useState(false);
  const shortText = Overview?.slice(0, 80);

  return (
    <div className="w-full absolute pt-[20%] sm:pt-[10%] px-4 sm:px-10 aspect-video bg-gradient-to-r from-black text-white">
      <div>
        <h1 className="my-28 sm:my-6 font-bold text-lg sm:text-3xl md:text-4xl">
          {title}
        </h1>

        <p className="hidden md:block w-1/3 text-sm text-gray-200">
          {ShowMore ? Overview : shortText}
          {!ShowMore && Overview?.length > 80 && "..."}
        </p>

        <button
          onClick={() => setShowMore(!ShowMore)}
          className="text-sm font-semibold text-gray-300 hover:text-white"
        >
          {ShowMore ? "Show Less" : "Show More"}
        </button>

        <div className="mt-4">
          <button className="bg-stone-50 font-bold text-black hover:bg-stone-300 text-sm sm:text-lg border rounded-md px-4 py-1">
            ► Play
          </button>
          <button className="text-white text-sm sm:text-lg ml-2 bg-gray-600 bg-opacity-60 hover:bg-gray-500 border rounded-md px-4 py-1">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
