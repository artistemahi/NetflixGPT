import {UpcomingMoviesAPI,API_option} from "./constants";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addUpcomingMovie} from "../Slices/MovieSlice"
const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  
    // fetching the nowplaying movies
  const fetchUpcomingMovie = async()=>{
    const data = await fetch (UpcomingMoviesAPI,API_option);
    const json = await data.json();
    // console.log(json);
    dispatch(addUpcomingMovie(json.results));
  }

  useEffect(()=>{
    fetchUpcomingMovie();
  },[])
}
export default useUpcomingMovie;