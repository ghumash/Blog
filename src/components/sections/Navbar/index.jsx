import React from "react";

import { AutoAwesomeMotion, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Badge, InputBase, Typography } from "@mui/material";

import Profile from "../../shared/Profile";
import {
  StyledToolbar,
  Search,
  Icons,
  UserBoxMobile,
} from "../../../custom/mui.components";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Blog
        </Typography>
        <AutoAwesomeMotion sx={{ display: { xs: "block", sm: "none" } }} />
        <Search sx={{ bgcolor: "background.default", color: "text.primary" }}>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Profile />
        </Icons>
        <UserBoxMobile>
          <Typography variant="span">John</Typography>
          <Profile />
        </UserBoxMobile>
      </StyledToolbar>
    </AppBar>
  );
}
