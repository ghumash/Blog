import { TextareaAutosize } from "@mui/material";
import CommentsItem from "../shared/CommentsItem";

export default function PostComments({ comment }) {
  return (
    <CommentsItem
      name={comment.userId}
      surname={comment.userId}
      text={comment.text}
      date={comment.createdAt}
    />
  );
}
