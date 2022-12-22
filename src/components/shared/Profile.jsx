import React from "react";

import { Logout, Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";

import { profileMenuStyles } from "../../custom/mui.styles";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Avatar onClick={handleClick} src="./assets/avatars/avatar_9.jpg" />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: { ...profileMenuStyles },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar onClick={handleClick} src="./assets/avatars/avatar_9.jpg" />
          Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
