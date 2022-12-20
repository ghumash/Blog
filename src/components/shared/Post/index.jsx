import React from "react";

import { Favorite, FavoriteBorder, Share } from "@mui/icons-material";
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

export default function Post({ post, user }) {
  return (
    <Card sx={{ m: 5 }}>
      <CardHeader
        avatar={<Avatar src="/assets/avatars/avatar_8.jpg" />}
        action={<PostMenu />}
        title={post.title}
        subheader={post.createdAt}
      />
      <CardMedia
        component="img"
        image="/assets/covers/cover_3.jpg"
        alt={post.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite color="error" />}
        />
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
