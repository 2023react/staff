import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { theme } from "../constants/styles";
import { ThemeProvider } from "@emotion/react";

export default function BasicButtons({ children, customStyles, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        color="customGreen"
        sx={{ textTransform: "none", ...customStyles }}
        {...props}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
}
