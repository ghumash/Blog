import { IconButton } from "@mui/material";
import React from "react";

export default function Emoji({ addEmoji, emoji }) {
  return (
    <IconButton
      sx={{ fontSize: "17px", padding: "5px", color: "#000" }}
      onClick={addEmoji(`${emoji}`)}
    >
      {emoji}
    </IconButton>
  );
}
