import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default function CustomColoredButton({ children }) {
  return (
    <Button variant="contained" color="success" size="small">
      {children}
    </Button>
  );
}
