import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
const MainComponent = () => {
  const movies = useSelector((store: any) => store.movie?.NowPlayingMovie);
  if (!movies) return;
  console.log(movies);
  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  console.log(id);
  return (
    <div  className="relative h-[90vh] w-screen">
      <VideoTitle title={title} Overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainComponent;
