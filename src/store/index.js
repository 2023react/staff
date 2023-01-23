import { configureStore } from "@reduxjs/toolkit";

import { getDefaultMiddleware } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import dataSlice from "./slices/dataSlice";
import loginSlice from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    dataSlice,
    filterSlice,
    loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
