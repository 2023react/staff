import * as React from "react";

import Button from "@mui/material/Button";

export default function BasicButtons({ children, customStyles, ...props }) {
  return (
    <Button
      variant="contained"
      color="customGreen"
      sx={{ textTransform: "none", padding: "3px", ...customStyles }}
      {...props}
    >
      {children}
    </Button>
  );
}
