const VideoTitle = ({ title, Overview }) => {
  return (
    <div>
      <div className="my-72 mx-9 absolute" >
        <h1 className="my-4 font-bold , text-4xl">{title}</h1>
        <p>{Overview}</p>
        <div>
            <button className="bg-white font-bold text-2xl rounded-sm px-3 py-0.5">► Play</button>
            <button className="text-white  text-2xl  font-bold bg-gray-500 opacity-50 rounded-sm px-3 py-0.5">ⓘ More Info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
