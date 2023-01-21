import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function BasicButtons({ children, customStyles, ...props }) {
  return (
    <Button
      variant="contained"
      color="success"
      sx={{ ...customStyles }}
      {...props}
    >
      {children}
    </Button>
  );
}
