import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    simple: { fontSize: 12 },
  },
  palette: {
    student0: {
      light: "#757ce8",
      main: "#ff7f50",
      dark: "#ff7f50",
      contrastText: "#fff",
    },
    student1: {
      light: "#ff7961",
      main: "#9c27b0",
      dark: "#9c27b0",
      contrastText: "#000",
    },
    student2: {
      light: "#757ce8",
      main: "#673ab7",
      dark: "#673ab7",
      contrastText: "#fff",
    },
    student3: {
      light: "#757ce8",
      main: "#00bcd4",
      dark: "#00bcd4",
      contrastText: "#fff",
    },
    student4: {
      light: "#757ce8",
      main: "#009688",
      dark: "#009688",
      contrastText: "#fff",
    },
    student5: {
      light: "#757ce8",
      main: "#07689f",
      dark: "#07689f",
      contrastText: "#fff",
    },
    customGreen: {
      light: "#757ce8",
      main: "#46af3a",
      dark: "#07689f",
      contrastText: "#fff",
    },

    customRed: {
      light: "#757ce8",
      main: "#e14c4c",
      dark: "#07689f",
      contrastText: "#fff",
    },
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

export const COLORS = {
  customRed: "#e14c4c",
  customGreen: "#46af3a",
};
