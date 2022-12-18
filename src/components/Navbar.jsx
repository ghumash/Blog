import { AutoAwesomeMotion } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import React from "react";

export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Blog
        </Typography>
        <AutoAwesomeMotion sx={{ display: { xs: "block", sm: "none" } }} />
      </StyledToolbar>
    </AppBar>
  );
}
