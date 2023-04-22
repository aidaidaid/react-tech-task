import { configureStore } from "@reduxjs/toolkit";
import slice from "./toolkitSlice";

export const store = configureStore({
	reducer: {
	toolkit: slice,
}})
