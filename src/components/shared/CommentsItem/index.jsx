import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function CommentsItem({ comment }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src={`./assets/avatars/${comment.userAvatar}`}
        />
      </ListItemAvatar>
      <ListItemText
        primary={comment?.userId}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            ></Typography>
            {comment?.text}
            <span
              style={{ display: "block", fontSize: "12px", marginTop: "5px" }}
            >
              {comment?.createdAt}
            </span>
          </>
        }
      />
    </ListItem>
  );
}
