import { createSlice } from "@reduxjs/toolkit/dist";

const dataSlice = createSlice({
  name: "staff",
  initialState: {
    specialistLevel: [
      {
        title: "Filter by specialist level",
        categories: [
          {
            title: "Student",

            config: {
              isClicked: false,
              color: "student",
            },
          },
          {
            title: "Junior",

            config: { isClicked: false, color: "junior" },
          },
          {
            title: "Mid level",

            config: { isClicked: false, color: "mid_level" },
          },
          {
            title: "Senior",

            config: { isClicked: false, color: "senior" },
          },
          {
            title: "C level",

            config: { isClicked: false, color: "c_level" },
          },
          {
            title: "Not defined",

            config: { isClicked: false, color: "not_defined" },
          },
        ],
      },
    ],
  },
  reducers: {
    toggleIsClickedLevel(state, action) {
      console.log(action.payload.level);
      state.specialistLevel[0].categories.map((level) => {
        if (level.title === action.payload.level) {
          level.config.isClicked = !level.config.isClicked;
        }
      });
    },
  },
});

export const { toggleIsClickedLevel } = dataSlice.actions;

export default dataSlice.reducer;
