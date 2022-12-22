import React from "react";

import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export default function SidebarItem({ name, icon }) {
  return (
    <ListItemButton component="a" href="#home">
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={<Typography>{name}</Typography>} />
    </ListItemButton>
  );
}
