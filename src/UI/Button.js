import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function BasicButtons({ children, ...props }) {
  return (
    <Button variant="contained" color="success" {...props}>
      {children}
    </Button>
  );
}
// export default function CustomColoredButton({ children, ...props }) {
//   return (
//
//       <Button variant="contained" color="success" size="small" {...props}>
//         {children}
//       </Button>{" "}
//
//   );
// }
