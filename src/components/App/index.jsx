import React from "react";

import "./App.css";
import Post from "../Post";

import POSTS from "../../js/posts";
import USERS from "../../js/users";

export default function App() {
  const [posts, setPosts] = React.useState(POSTS);
  const [users, setUsers] = React.useState(USERS);

  const findUser = (userId) => {
    users.find((user) => user.id === userId);
  };
  
  return (
    <div>
      {POSTS.map((post) => (
        <Post key={post.id} user={findUser(post.userId)} />
      ))}
    </div>
  );
}
