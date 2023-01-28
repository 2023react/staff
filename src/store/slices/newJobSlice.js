import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  description: null,
  responsibilities: null,
  qualifications: null,
  additionalInformation: null,
  allData: [],
};

const newJobSlice = createSlice({
  name: "newJob",
  initialState,
  reducers: {
    addDecr(state, action) {
      state.description = action.payload;
    },
    addRespos(state, action) {
      state.responsibilities = action.payload;
    },
    addqual(state, action) {
      state.qualifications = action.payload;
    },
    addInfo(state, action) {
      state.additionalInformation = action.payload;
    },
    addAllData(state, action) {
      state.allData = action.payload;
    },
  },
});

export const { addDecr, addRespos, addqual, addAllData, addInfo } =
  newJobSlice.actions;
export default newJobSlice.reducer;
