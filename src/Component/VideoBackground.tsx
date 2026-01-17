import { useSelector } from "react-redux";
import useVideos from "../utils/useVideos"

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store: any) => store.movie?.trailerVideo);
  useVideos(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
