import { createSlice } from "@reduxjs/toolkit";
// import competitors from "../../assets/competitors.json"

const initialState ={
    competitors:[],
    currentCompetitor:null,
    voteCount:0
}

const competitorSlice = createSlice({
    name:'competitor',
    initialState,
    reducers:{
        setCurrentCompetitor :(state,action) =>{
            state.currentCompetitor=action.payload;
        },

        increaseVote:(state)=>{
            state.voteCount=state.voteCount+1;
        },
        decreaseVote:(state)=>{
            state.voteCount=state.voteCount-1
        },
    }
})

export default competitorSlice.reducer;
export const {setCurrentCompetitor,decreaseVote,increaseVote} = competitorSlice.actions;