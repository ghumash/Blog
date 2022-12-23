import React from "react";

import {
  Favorite,
  Home,
  ModeNight,
  Settings,
  WbSunny,
} from "@mui/icons-material";
import { Box, List, ListItem, Switch } from "@mui/material";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ mode, setMode }) {
  return (
    <Box p={2}>
      <Box>
        <List>
          <ListItem disablePadding>
            <SidebarItem name={"Homepage"} icon={<Home />} />
          </ListItem>
          <ListItem disablePadding>
            <SidebarItem name={"Favorites"} icon={<Favorite />} />
          </ListItem>
          <ListItem disablePadding>
            <SidebarItem name={"Settings"} icon={<Settings />} />
          </ListItem>

          <ListItem
            disablePadding
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            <SidebarItem
              name={<Switch checked={mode === "light" ? false : true} />}
              icon={<ModeNight color={mode === "light" ? "" : "primary"} />}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
