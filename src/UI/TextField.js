import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchJob } from "../store/slices/filterSlice";

export default function SearchTextField() {
  // const value = useSelector((state) => state.filterSlice.searchJobs);
  // const dispatch = useDispatch();
  // const onChange = (e) => {
  //   dispatch(changeSearchJob(e.target.value));
  // };

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
        value={"value"}
        onChange={"onChange"}
      />
    </Box>
  );
}
