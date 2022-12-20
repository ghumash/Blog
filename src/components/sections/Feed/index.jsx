import { Box } from "@mui/material";
import React from "react";
import Post from "../../shared/Post";

import { users } from "../../../js/const";

export default function Feed({ posts }) {
  const findUser = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <Box flex={4} p={2} m={"0 !important"}>
      {posts.map((post) => (
        <Post key={post.id} post={post} user={findUser(post.userId)} />
      ))}
    </Box>
  );
}
