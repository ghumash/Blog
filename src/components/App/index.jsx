import { useState } from "react";

import { posts as userPosts, users as authors } from "../../js/const";
import Post from "../Post";

import Container from '@mui/material/Container';

function App() {
  const [posts, setPosts] = useState(userPosts);
  const [users] = useState(authors);

  const findUser = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <Container maxWidth="xl">
      {posts.map((post) => (
        <Post key={post.id} post={post} user={findUser(post.userId)} />
      ))}
    </Container>
  );
}

export default App;
