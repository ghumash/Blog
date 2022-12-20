import React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  List,
  Typography,
} from "@mui/material";
import CommentsItem from "./CommentsItem";

export default function Rightbar() {
  return (
    <Box flex={2} display={{ xs: "none", sm: "block" }}>
      <Box p={2}>
        <Typography variant="h6" fontWeight={100} mt={1} mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup max={6} sx={{ mb: 2 }}>
          <Avatar src="/assets/avatars/avatar_1.jpg" />
          <Avatar src="/assets/avatars/avatar_2.jpg" />
          <Avatar src="/assets/avatars/avatar_3.jpg" />
          <Avatar src="/assets/avatars/avatar_4.jpg" />
          <Avatar src="/assets/avatars/avatar_5.jpg" />
          <Avatar src="/assets/avatars/avatar_6.jpg" />
          <Avatar src="/assets/avatars/avatar_7.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mb={1}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} sx={{ mb: 2 }}>
          <ImageListItem>
            <img src="/assets/covers/cover_1.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_2.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_3.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_4.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_5.jpg" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_6.jpg" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Comments
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <CommentsItem
            name={"Ali"}
            surname={"Connors"}
            imgUrl={"avatar_14.jpg"}
            text={" — I'll be in your neighborhood doing errands this…"}
          />
          <CommentsItem
            name={"Remy"}
            surname={"Sharp"}
            imgUrl={"avatar_15.jpg"}
            text={" — Wish I could come, but I'm out of town this…"}
          />
          <CommentsItem
            name={"Sandra"}
            surname={"Darrel"}
            imgUrl={"avatar_16.jpg"}
            text={" — Do you have Paris recommendations? Have you ever…"}
          />
        </List>
      </Box>
    </Box>
  );
}
