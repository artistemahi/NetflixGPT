import {PopularMoviesAPI,API_option} from "./constants";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addPopularMovie} from "../Slices/MovieSlice"
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovie= useSelector((store:any)=>store.movie?.PopularMovie)
    // fetching the nowplaying movies
  const fetchPopularMovie = async()=>{
    const data = await fetch (PopularMoviesAPI,API_option);
    const json = await data.json();
    // console.log(json)
    dispatch(addPopularMovie(json.results));
  }

  useEffect(()=>{
   if(!PopularMovie) fetchPopularMovie();
  },[])
}
export default usePopularMovies;