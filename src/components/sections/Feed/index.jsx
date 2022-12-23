import { Box } from "@mui/material";
import React from "react";
import Post from "../../shared/Post";

import { users } from "../../../js/const";

export default function Feed({ posts }) {
  const findUser = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <Box
      sx={{
        margin: { xs: "1.2em !important", sm: 5 },
        p: { xs: "0", sm: 2 },
        flex: 4,
      }}
    >
      {posts.map((post) => (
        <Post key={post.id} post={post} user={findUser(post.userId)} />
      ))}
    </Box>
  );
}
