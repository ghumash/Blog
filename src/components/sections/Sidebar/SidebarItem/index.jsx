import React from "react";

import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

export default function SidebarItem({ children, name, icon }) {
  const theme = useTheme();

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#home">
        <ListItemIcon>{icon}</ListItemIcon>
        <Box
          display={{
            xs: "none",
            [theme.breakpoints.up("md")]: {
              display: "block",
            },
          }}
        >
          {children}
        </Box>
        <ListItemText
          primary={
            <Typography
              display={{
                xs: "none",
                [theme.breakpoints.up("md")]: {
                  display: "block",
                },
              }}
            >
              {name}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
