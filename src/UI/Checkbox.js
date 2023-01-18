import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "../components/content//contents.module.scss";
export default function CheckboxLabels({ label, ...props }) {
  return (
    <FormGroup {...props}>
      <FormControlLabel control={<Checkbox defaultChecked />} label={label} />
      <span>rrrr</span>
    </FormGroup>
  );
}
