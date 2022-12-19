import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

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
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/assets/avatars/avatar_14.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/assets/avatars/avatar_15.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/assets/avatars/avatar_16.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
