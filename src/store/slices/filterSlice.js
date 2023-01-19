import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  jobCategory: [],

  specialistLevel: [],
  jobCities: [],
  industry: [],
  activityType: [],
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    toggleIsClickedLevel(state, action) {
      const categoryName = action.payload.category;
      state[categoryName].push(action.payload.value);
    },
    toggleIsClickedLevel2(state, action) {
      const categoryName = action.payload.category;
      state[categoryName].push(action.payload.value);
    },
  },
});

export const { toggleIsClickedLevel } = filterSlice.actions;

export default filterSlice.reducer;
