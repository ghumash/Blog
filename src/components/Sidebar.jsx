import { Box } from "@mui/material";
import React from "react";

export default function Sidebar() {
  return (
    <Box bgcolor="red" flex={1} p={2} display={{ xs: "none", sm: "block" }}>
      Sidebar
    </Box>
  );
}
