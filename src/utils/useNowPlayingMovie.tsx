import {NowPlayingMovieAPI,API_option} from "./constants";
import {useEffect} from "react"
import {useDispatch,useSelector} from "react-redux"
import {addNowPlaying} from "../Slices/MovieSlice"
const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const NowPlaying = useSelector((store:any)=>store.movie?.NowPlayingMovie)
  
    // fetching the nowplaying movies
  const fetchNowPlaying = async()=>{
    const data = await fetch (NowPlayingMovieAPI,API_option);
    const json = await data.json();
    dispatch(addNowPlaying(json.results));
  }

  useEffect(()=>{
    if(!NowPlaying) fetchNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}
export default useNowPlayingMovie;