import { configureStore } from "@reduxjs/toolkit";

export const store= configureStore({
    reducer:{
        searchId: searchIdSlice,
    }
})