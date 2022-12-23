import React from "react";

import { Menu, MenuItem, IconButton } from "@mui/material";
import { Delete, Edit, MoreVert, Share } from "@mui/icons-material";

export default function PostMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          Edit
          <Edit sx={{ marginLeft: "auto", pl: 5 }} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          Delete
          <Delete sx={{ marginLeft: "auto", pl: 5 }} />
        </MenuItem>
      </Menu>
    </div>
  );
}
