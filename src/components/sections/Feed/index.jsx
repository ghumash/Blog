import { Box } from "@mui/material";
import React from "react";
import Post from "../../shared/Post";

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
