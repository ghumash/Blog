import { Box, IconButton, TextField } from "@mui/material";
import React from "react";
import { CommentTextArea } from "../../../../custom/mui.components";
import Emoji from "../../Emoji/Emoji";

export default function CommentArea() {
  const [text, setText] = React.useState("");
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

  return (
    <>
      <CommentTextArea
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="Leave a comment"
        rows={4}
        variant="filled"
        color="primary"
        fullWidth
        multiline
        focused
      />
      <Box
        sx={{
          display: "flex",
          gap: 0.5,
          backgroundColor: "text.secondary",
          p: "5px 10px",
          mb: "10px",
        }}
      >
        <Emoji addEmoji={addEmoji} emoji={"👍"} />
        <Emoji addEmoji={addEmoji} emoji={"😜"} />
        <Emoji addEmoji={addEmoji} emoji={"😍"} />
      </Box>
    </>
  );
}
