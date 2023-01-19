import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import dataSlice from "./slices/dataSlice";

const store = configureStore({
  reducer: {
    staffdata: dataSlice,
    filterSlice,
  },
});

export default store;
