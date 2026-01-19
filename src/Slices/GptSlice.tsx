import {createSlice} from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GptSearch",
    initialState:{
        ShowGptSearch:false,
        movieResults:null,
        movieNames:null,
    },
    reducers:{
        togglerGptSearchView: (state)=>{
            state.ShowGptSearch=!state.ShowGptSearch;
        },
        addGptMovieResult: (state,action)=>{
            const {movieNames,movieResults}= action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        },
    }
})
export const {togglerGptSearchView,addGptMovieResult} = GptSlice.actions;
export default GptSlice.reducer;