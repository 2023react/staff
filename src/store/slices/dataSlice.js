import { createSlice } from "@reduxjs/toolkit/dist";

const initialState = {
  jobsData: [],
  companyData: [],
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    addJobsData(state, action) {
      state.jobsData = action.payload;
    },
  },
});

export const { addJobsData } = dataSlice.actions;

export default dataSlice.reducer;
