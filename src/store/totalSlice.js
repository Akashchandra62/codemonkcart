import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const totalSlice = createSlice({
    name: "total",
    initialState,
    reducers: {
        add(state, action){
            return state += action.payload;
        },
        remove(state, action){
            return state -= action.payload;
        }
    }
});

export const {add, remove} = totalSlice.actions;
export default totalSlice.reducer;