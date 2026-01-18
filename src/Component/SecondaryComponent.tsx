import MovieList from './MovieList'
import {useSelector} from "react-redux";
const SecondaryComponent = () => {
    const movies= useSelector((store:any)=>store.movie?.NowPlayingMovie);

  return (
    <div  >    
      <div className="bg-black">
          <div className=" relative z-20 -mt-36">
              <MovieList title ={"Now Playing"} Movies={movies}></MovieList>
              <MovieList title ={"Now Playing"} Movies={movies}></MovieList>
              <MovieList title ={"Now Playing"} Movies={movies}></MovieList>
              <MovieList title ={"Now Playing"} Movies={movies}></MovieList>
              <MovieList title ={"Now Playing"} Movies={movies}></MovieList>
          </div>
        </div>
    </div>

  )
}

export default SecondaryComponent;