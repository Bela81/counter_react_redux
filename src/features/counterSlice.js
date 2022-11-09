import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        decrement: function(state){
            state.value--;
        },
        increment: function(state){
            state.value++;
        }
    }
})

export const { decrement, increment } = counterReducer.actions;

export default counterReducer.reducer;