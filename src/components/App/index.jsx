import { useState } from "react";

import { posts as userPosts, users as authors } from "../../js/const";
import Post from "../Post";

export default function App() {
  const [posts, setPosts] = useState(userPosts);
  const [users] = useState(authors);

  const findUser = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} user={findUser(post.userId)} />
      ))}
    </div>
  );
}
