import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchTextField() {
  return (
    <Box
      size="small"
      required={true}
      component="form"
      sx={{
        width: "calc(100 % - 20px)",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        size="small"
        color="success"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        placeholder="All keywords"
      />
    </Box>
  );
}
