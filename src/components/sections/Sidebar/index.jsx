import React from "react";

import { Favorite, Home, ModeNight, Settings } from "@mui/icons-material";
import { Box, List, Switch, useTheme } from "@mui/material";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ mode, setMode }) {
  const theme = useTheme();

  return (
    <Box
      p={2}
      flex={{
        xs: "0",
        [theme.breakpoints.up("md")]: {
          flex: "1",
        },
      }}
    >
      <Box position="fixed">
        <List>
          <SidebarItem name={"Homepage"} icon={<Home />} />
          <SidebarItem name={"Favorites"} icon={<Favorite />} />
          <SidebarItem name={"Settings"} icon={<Settings />} />
          <SidebarItem icon={<ModeNight />}>
            <Switch
              onChange={() => setMode(mode === "light" ? "dark" : "light")}
            />
          </SidebarItem>
        </List>
      </Box>
    </Box>
  );
}
