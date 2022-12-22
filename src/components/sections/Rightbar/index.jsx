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
import CommentsItem from "../../shared/CommentsItem";

export default function Rightbar() {
  return (
    <Box flex={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box p={2}>
        <Typography variant="h6" fontWeight={100} mt={1} mb={1}>
          Online Friends
        </Typography>
        <AvatarGroup max={6} sx={{ mb: 2 }}>
          <Avatar src="/assets/avatars/avatar_1.jpg" alt="" />
          <Avatar src="/assets/avatars/avatar_2.jpg" alt="" />
          <Avatar src="/assets/avatars/avatar_3.jpg" alt="" />
          <Avatar src="/assets/avatars/avatar_4.jpg" alt="" />
          <Avatar src="/assets/avatars/avatar_5.jpg" alt="" />
          <Avatar src="/assets/avatars/avatar_6.jpg" alt="" />
          <Avatar src="/assets/avatars/avatar_7.jpg" alt="" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mb={1}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} sx={{ mb: 2 }}>
          <ImageListItem>
            <img src="/assets/covers/cover_1.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_2.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_3.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_4.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_5.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/assets/covers/cover_6.jpg" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100}>
          Latest Comments
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <CommentsItem
            comment={{
              userId: "Ali",
              text: " — I'll be in your neighborhood doing errands this…",
              createdAt: "2022-12-15",
              userAvatar: "avatar_19.jpg",
            }}
          />
        </List>
      </Box>
    </Box>
  );
}
