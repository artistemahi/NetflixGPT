import {NowPlayingMovieAPI,API_option} from "./constants";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addNowPlaying} from "../Slices/MovieSlice"
const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  
    // fetching the nowplaying movies
  const fetchNowPlaying = async()=>{
    const data = await fetch (NowPlayingMovieAPI,API_option);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlaying(json.results));
  }

  useEffect(()=>{
    fetchNowPlaying();
  },[])
}
export default useNowPlayingMovie;