import {createSlice} from "@reduxjs/toolkit";
const MovieSlice = createSlice({
    name : "NowPlayingMovie",
    initialState:{
        NowPlayingMovie:null,
    },
    reducers:{
        addNowPlaying: (state,action)=>{
            state.NowPlayingMovie=action.payload;
        },
    },
});

export const {addNowPlaying} = MovieSlice.actions;
export  default MovieSlice.reducer;