import React from "react";

import { Comment, Favorite, FavoriteBorder, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import PostMenu from "./PostMenu";

import truncate from "truncate";
import { POST_DEFAULT_LENGTH } from "../../../js/const";
import { useToggle } from "../../../hooks/useToggle";
import CommentsItem from "../CommentsItem";
import CommentArea from "./PostComment/CommentArea";

export default function Post({ post, user }) {
  const { status: allPostVisible, toggleStatus: setAllPostVisible } =
    useToggle();
  const { status: commentStatus, toggleStatus: commentStatusToggle } =
    useToggle();

  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={<Avatar src={`./assets/avatars/${post.userImg}`} />}
        action={<PostMenu />}
        title={post.title}
        subheader={
          <>
            {post.createdAt}
            {post.modifiedAt && <div>Modified {post.modifiedAt}</div>}
          </>
        }
      />
      <CardMedia
        component="img"
        image={`./assets/covers/${post.cover}`}
        alt={post.title}
      />

      <CardContent>
        {allPostVisible ? (
          <Typography variant="body2" color="text.secondary">
            {post.text}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {truncate(post.text, POST_DEFAULT_LENGTH)}
          </Typography>
        )}
        {post.text.length > POST_DEFAULT_LENGTH && (
          <span onClick={setAllPostVisible}>
            {allPostVisible ? "See less" : "See more"}
          </span>
        )}
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite color="error" />}
        />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton onClick={commentStatusToggle} aria-label="share">
          <Comment />
        </IconButton>
        {!!post.comments.length && (
          <Typography>{post.comments.length}</Typography>
        )}
      </CardActions>
      {commentStatus && (
        <>
          <CommentArea />
          {post.comments?.map((comment) => (
            <CommentsItem key={comment.id} comment={comment} />
          ))}
        </>
      )}
    </Card>
  );
}
