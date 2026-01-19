import {createSlice} from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name: "GptSearch",
    initialState:{
        ShowGptSearch:false
    },
    reducers:{
        togglerGptSearchView: (state)=>{
            state.ShowGptSearch=!state.ShowGptSearch;
        },
    }
})
export const {togglerGptSearchView} = GptSlice.actions;
export default GptSlice.reducer;