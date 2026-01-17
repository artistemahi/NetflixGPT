import { useSelector } from "react-redux";
import useVideos from "../utils/useVideos"

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store: any) => store.movie?.trailerVideo);
  useVideos(movieId);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 
             w-[120vw] h-[120vh]
             -translate-x-1/2 -translate-y-1/2
             scale-150"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1" }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
