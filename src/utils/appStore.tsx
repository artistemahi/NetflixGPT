import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "../Slices/UserSlice";
import NowPlayingMovieReducer from "../Slices/MovieSlice";
import TopRatedMovieReducer from "../Slices/MovieSlice";
import PopularMovieReducer from "../Slices/MovieSlice";
import UpcomingMovieReducer from "../Slices/MovieSlice";
const appStore = configureStore(
    {
        reducer:{
            user :UserReducer,
            movie:NowPlayingMovieReducer,
            popular:PopularMovieReducer,
            topRated:TopRatedMovieReducer,
            upcoming:UpcomingMovieReducer,
        }
    }
)
export default appStore;