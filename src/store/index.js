import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import companyInfoSlice from "./slices/companyInfoSlice";
import filterSlice from "./slices/filterSlice";
import jobsSlice from "./slices/jobsSlice";
import loginSlice from "./slices/loginSlice";
<<<<<<< HEAD
import { dataApi } from "./slices/dataControlRTKQ";
=======
import newJobSlice from "./slices/newJobSlice";
>>>>>>> 46e265ba4a584560c0f860085056295302500cb0

const store = configureStore({
  reducer: {
    jobsSlice,
    filterSlice,
    loginSlice,
<<<<<<< HEAD
    companyInfoSlice,
    [dataApi.reducerPath]: dataApi.reducer,
=======
    newJobSlice,
>>>>>>> 46e265ba4a584560c0f860085056295302500cb0
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      dataApi.middleware
    ),
});
setupListeners(store.dispatch);
export default store;
