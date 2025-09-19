import { configureStore } from "@reduxjs/toolkit";
import siswaReducer from "./siswaSlice";

export const store = configureStore({
    reducer: {
        siswa: siswaReducer,
    },
});