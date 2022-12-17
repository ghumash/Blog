import React from "react";

import "./App.css";
import Post from "../Post";
import { posts as userPosts, users as authors } from "../../js/const.js";

export default function App() {
  const [posts, setPosts] = React.useState(userPosts);
  const [users, setUsers] = React.useState(authors);

  const findUser = (userId) => {
    console.log( users.find((user) => user.id === userId));
  };

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} user={findUser(post.userId)} />
      ))}
    </div>
  );
}
