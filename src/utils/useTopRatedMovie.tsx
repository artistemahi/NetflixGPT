import {TopRatedMoviesAPI,API_option} from "./constants";
import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import {addTopRatedMovie} from "../Slices/MovieSlice"
const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const TopRatedMovie= useSelector((store:any)=>store.movie?.TopRatedMovie)
  
    // fetching the nowplaying movies
  const fetchTopRatedMovie = async()=>{
    const data = await fetch (TopRatedMoviesAPI,API_option);
    const json = await data.json();
    // console.log(json)
    dispatch(addTopRatedMovie(json.results));
  }

  useEffect(()=>{
   if(!TopRatedMovie) fetchTopRatedMovie();
  },[])
}
export default useTopRatedMovie;