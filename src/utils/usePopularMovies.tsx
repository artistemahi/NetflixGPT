import {PopularMoviesAPI,API_option} from "./constants";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {addPopularMovie} from "../Slices/MovieSlice"
const usePopularMovies = () => {
  const dispatch = useDispatch();
  
    // fetching the nowplaying movies
  const fetchPopularMovie = async()=>{
    const data = await fetch (PopularMoviesAPI,API_option);
    const json = await data.json();
    // console.log(json)
    dispatch(addPopularMovie(json.results));
  }

  useEffect(()=>{
    fetchPopularMovie();
  },[])
}
export default usePopularMovies;