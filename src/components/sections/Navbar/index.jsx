import React from "react";

import { Mail, Menu, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  SwipeableDrawer,
  Typography,
} from "@mui/material";

import Profile from "../../shared/Profile";
import Sidebar from "../Sidebar";
import { useToggle } from "../../../hooks/useToggle";

import {
  StyledToolbar,
  Search,
  Icons,
  UserBoxMobile,
} from "../../../custom/mui.components";

export default function Navbar({ mode, setMode }) {
  const { status: burgerStatus, toggleStatus: setBurgerStatus } = useToggle();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", md: "block" } }}>
          Blog
        </Typography>
        <IconButton
          color="inherit"
          onClick={setBurgerStatus}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Menu />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={burgerStatus}
          onClose={setBurgerStatus}
          onOpen={setBurgerStatus}
        >
          <Sidebar mode={mode} setMode={setMode} />
        </SwipeableDrawer>

        <Search sx={{ bgcolor: "background.default", color: "text.primary" }}>
          <InputBase fullWidth placeholder="Search..." />
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
