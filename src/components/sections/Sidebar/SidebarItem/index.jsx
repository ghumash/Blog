import React from "react";

import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function SidebarItem({ children, name, icon }) {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
        <ListItemIcon>{icon}</ListItemIcon>
        {children}
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
}
