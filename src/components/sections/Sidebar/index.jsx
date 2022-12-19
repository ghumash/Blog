import React from "react";

import {
  AccountBox,
  Favorite,
  Group,
  Home,
  ModeNight,
  Pages,
  Settings,
} from "@mui/icons-material";
import { Box, List, Switch } from "@mui/material";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ mode, setMode }) {
  return (
    <Box flex={1} p={2} display={{ xs: "none", sm: "block" }}>
      <Box position="fixed">
        <List>
          <SidebarItem name={"Homepage"} icon={<Home />} />
          <SidebarItem name={"Profile"} icon={<AccountBox />} />
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
