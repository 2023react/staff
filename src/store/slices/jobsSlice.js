import { createSlice } from "@reduxjs/toolkit/dist";
const initialState = {
  jobsColections: [],
};
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJobs(state, action) {
      state.jobsColections = action.payload.jobs;
    },

    deleteJobsBylevelCategory(state, action) {
      state.jobsColections = state.jobsColections.filter(
        (job) => job.requiredCandidateLevel !== action.payload.value
      );
    },
    deleteJobsByJobCategory(state, action) {
      state.jobsColections = state.jobsColections.filter(
        (job) => job.jobCategory !== action.payload.value
      );
    },
  },
});

export const { addJobs, deleteJobsByJobCategory, deleteJobsBylevelCategory } =
  jobsSlice.actions;

export default jobsSlice.reducer;
