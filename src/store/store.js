import { configureStore } from "@reduxjs/toolkit";
import totalReducer from "./totalSlice";
import productReducer from "./produtSlie";


const store = configureStore({
    reducer: {
        total: totalReducer,
        products: productReducer
    }
})

export default store;