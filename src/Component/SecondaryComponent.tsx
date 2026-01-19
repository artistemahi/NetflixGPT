import MovieList from './MovieList'
import {useSelector} from "react-redux";
const SecondaryComponent = () => {
    const NowPlayingMovies= useSelector((store:any)=>store.movie?.NowPlayingMovie);
    const popularMovies= useSelector((store:any)=>store.popular?.PopularMovie);
    const TopRatedMovie= useSelector((store:any)=>store.topRated?.TopRatedMovie);
    const UpcomingMovie= useSelector((store:any)=>store.upcoming?.UpcomingMovie);

  return (
    <div  >    
      <div className="bg-black">
          <div className=" relative z-20 -mt-36">
              <MovieList title ={"Now Playing"} Movies={NowPlayingMovies}></MovieList>
              <MovieList title ={"Popular"} Movies={popularMovies}></MovieList>
              <MovieList title ={"Top Rated"} Movies={TopRatedMovie}></MovieList>
              <MovieList title ={"Upcoming Movie"} Movies={UpcomingMovie}></MovieList>
          </div>
        </div>
    </div>

  )
}

export default SecondaryComponent;