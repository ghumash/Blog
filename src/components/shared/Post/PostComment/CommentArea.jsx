import { TextField } from "@mui/material";
import React from "react";
import Emoji from "../../Emoji/Emoji";

export default function CommentArea() {
  const [text, setText] = React.useState("");
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

  return (
    <>
      <TextField
        fullWidth
        focused
        multiline
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={4}
        placeholder="Leave a comment"
        variant="filled"
        label={
          <>
            <Emoji addEmoji={addEmoji} emoji={"👍"} />
            <Emoji addEmoji={addEmoji} emoji={"😜"} />
            <Emoji addEmoji={addEmoji} emoji={"😍"} />
          </>
        }
        sx={{
          mb: "15px",
          "& > div": {
            borderRadius: "0",
            paddingTop: "33px",
          },
        }}
      />
    </>
  );
}
