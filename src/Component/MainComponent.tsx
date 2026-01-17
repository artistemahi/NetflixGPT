import React from "react";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainComponent = () => {
  const movies = useSelector((store: any) => store.movie?.NowPlayingMovie);
  if (!movies) return;
  console.log(movies);

  // we gonna screening the first movie of the movie object
  const mainMovie= movies[0];
  const {title,overview}= mainMovie;
  return (
    <div>
      <VideoTitle title={title} Overview={overview}/>
    </div>
  );
};

export default MainComponent;
