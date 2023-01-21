import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slices/filterSlice";
import dataSlice from "./slices/dataSlice";
import loginSlice from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    staffdata: dataSlice,
    filterSlice,
    loginSlice,
  },
});

export default store;
