import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

export default function CommentsItem({ imgUrl, name, surname, text, date }) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`/assets/avatars/${imgUrl}`} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {name} {surname} {date}
              </Typography>
              {text}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
