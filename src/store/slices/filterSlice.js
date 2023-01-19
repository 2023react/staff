import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  levelCategory: [],
  jobCategory: [],
  activTypeCategoryCompany: [],
  industryCategoryCompany: [],
  // isChecked:false
};

const filterSlice = createSlice({
  name: "filter",
  initialState,

  reducers: {
    setFilter(state, action) {
      const category = action.payload.category;
      state[category].push(action.payload.value);
    },

    deleteFilter(state, action) {
      const category = action.payload.category;
      state[category] = state[category].filter(
        (item) => item !== action.payload.value
      );
    },
  },
});

export const { deleteFilter, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
