// import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import slice from "./toolkitSlice";

// const rootReducer = combineReducers({
//     toolkit: slice
// })
export const store = configureStore({
    // reducer: slice,
        reducer: {
        toolkit: slice,
    },
})
