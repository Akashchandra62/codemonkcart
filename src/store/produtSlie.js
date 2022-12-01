import { createSlice } from "@reduxjs/toolkit";
import data from "../data";


const initialState = data.products;

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        removeProduct(state, action){
            return state.filter(item => item.id !== action.payload)
        }
    }
});

export const {removeProduct} = productSlice.actions;
export default productSlice.reducer;