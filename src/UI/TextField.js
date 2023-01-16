import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchTextField() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        color="success"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        placeholder="All keywords"
      />
    </Box>
  );
}
