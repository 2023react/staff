import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    staffdata: dataReducer,
  },
});

export default store;
