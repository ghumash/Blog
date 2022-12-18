import React from "react";

import "./Post.css";
import { useToggle } from "../../hooks/useToggle";
import { POST_DEFAULT_LENGTH } from "../../js/const";

import truncate from "truncate";

export default function Post({ post, user }) {
  const { status: seeMoreStatus, toggleStatus: seeMoreToggle } = useToggle();

  return (
    <div className="post-container">
      <h3 style={{ marginBottom: "0" }}>{post.title}</h3>
      {user.name} {user.surname}
      <br />
      Posted {post.createdAt}
      <br />
      <br />
      {seeMoreStatus ? post.text : truncate(post.text, POST_DEFAULT_LENGTH)}
      {post.text.length > POST_DEFAULT_LENGTH && (
        <b onClick={seeMoreToggle}>{seeMoreStatus ? "See Less" : "See More"}</b>
      )}
      {post.modifiedAt && <p>Modified {post.modifiedAt}</p>}
    </div>
  );
}
