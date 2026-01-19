import {API_option} from "../utils/constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addtrailerVideo} from "../Slices/MovieSlice";


const useVideos = (movieId) => {
   const dispatch = useDispatch ();
    const fetchVideo= async ()=>{
        const data  = await fetch ("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_option);
        const json = await data.json();
          // we gonna screening the first movie of the movie object

        const filterData=json.results?.filter((video)=>video.type==="Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        if(!trailer) return;
        // console.log(trailer);
        dispatch(addtrailerVideo(trailer));
    }
    useEffect(()=>{
        fetchVideo();
    },[])
}

export default useVideos