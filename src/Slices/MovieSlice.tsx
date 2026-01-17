import {createSlice} from "@reduxjs/toolkit";
const MovieSlice = createSlice({
    name : "NowPlayingMovie",
    initialState:{
        NowPlayingMovie:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlaying: (state,action)=>{
            state.NowPlayingMovie=action.payload;
        },
        addtrailerVideo: (state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
});

export const {addNowPlaying,addtrailerVideo} = MovieSlice.actions;
export  default MovieSlice.reducer;