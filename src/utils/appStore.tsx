import {configureStore} from "@reduxjs/toolkit";
import UserReducer from "../Slices/UserSlice";
import NowPlayingMovieReducer from "../Slices/MovieSlice";
const appStore = configureStore(
    {
        reducer:{
            user :UserReducer,
            movie:NowPlayingMovieReducer,
        }
    }
)
export default appStore;