import { createSlice } from "@reduxjs/toolkit/dist";
const initialState = {
  jobsData: [],
  companyData: [],
};
const jobsSlice = createSlice({
  name: "jobsSlice",
  initialState,
  reducers: {
    addJobsData(state, action) {
      state.jobsData = action.payload;
    },
  },
});
export const { addJobsData } = jobsSlice.actions;

export default jobsSlice.reducer;
