import React from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

import Feed from "../components/sections/Feed";
import Navbar from "../components/sections/Navbar";
import Rightbar from "../components/sections/Rightbar";
import Sidebar from "../components/sections/Sidebar";
import Add from "../components/Add";

import { posts as userPosts, users as authors } from "../js/const";

export default function App() {
  const [mode, setMode] = React.useState("light");
  const [posts, setPosts] = React.useState(userPosts);
  const [users, setUsers] = React.useState(authors);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar mode={mode} setMode={setMode} />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Sidebar mode={mode} setMode={setMode} />
          </Box>
          <Feed posts={posts} />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}
