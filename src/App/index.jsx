import React from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

import Feed from "../components/sections/Feed";
import Navbar from "../components/sections/Navbar";
import Rightbar from "../components/sections/Rightbar";
import Sidebar from "../components/sections/Sidebar";
import Add from "../components/Add";

export default function App() {
  const [mode, setMode] = React.useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-evenly">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}
