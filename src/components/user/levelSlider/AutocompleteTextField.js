import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({
  optionsData,
  setValue,
  disabled,
  defaultValue,
}) {
  const options = optionsData.map((option) => {
    return { label: option };
  });

  return (
    <Autocomplete
      disabled={disabled}
      onChange={(event, value) => setValue(value.label)}
      defaultValue={options.find((option) => option.label === defaultValue)}
      size="small"
      options={options}
      getOptionLabel={(option) => option.label}
      filterOptions={(options, { inputValue }) =>
        options.filter(
          (option) =>
            option.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
        )
      }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField color="customGreen" {...params} />}
    />
  );
}
