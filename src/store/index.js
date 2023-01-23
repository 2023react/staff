import { configureStore } from "@reduxjs/toolkit";

import { getDefaultMiddleware } from "@reduxjs/toolkit";

import filterSlice from "./slices/filterSlice";
import jobsSlice from "./slices/jobsSlice";
import loginSlice from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    jobsSlice,
    filterSlice,
    loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
