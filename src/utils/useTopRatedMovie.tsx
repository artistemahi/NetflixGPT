import {TopRatedMoviesAPI,API_option} from "./constants";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addTopRatedMovie} from "../Slices/MovieSlice"
const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  
    // fetching the nowplaying movies
  const fetchTopRatedMovie = async()=>{
    const data = await fetch (TopRatedMoviesAPI,API_option);
    const json = await data.json();
    // console.log(json)
    dispatch(addTopRatedMovie(json.results));
  }

  useEffect(()=>{
    fetchTopRatedMovie();
  },[])
}
export default useTopRatedMovie;