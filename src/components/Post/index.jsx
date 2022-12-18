import React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import truncate from "truncate";
import { POST_DEFAULT_LENGTH } from "../../js/const";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

{
  /* <div className="post-container">
      <h3>{post.title}</h3>
      <div>
        {user.name} {user.surname}
      </div>
      <div>{post}</div>
      {post.createdAt}
      {post.modifiedAt && <div>{post.modifiedAt}</div>}
    </div> */
}

export default function Post({ post, user }) {
  const [expanded, setExpanded] = React.useState(false);
  const [allPostVisible, setAllPostVisible] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const postToggle = () => setAllPostVisible(!allPostVisible);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <>
            <Typography component="h4" fontSize="0.8em">
              {user.name} {user.surname}
            </Typography>
            <Typography fontSize="1.3em">{post.title}</Typography>
          </>
        }
        subheader={<Typography fontSize="0.8em">{post.createdAt}</Typography>}
      />
      <CardMedia component="img" height="194" image="" alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {allPostVisible
            ? post.text
            : truncate(post.text, POST_DEFAULT_LENGTH)}
          {post.text.length > POST_DEFAULT_LENGTH && (
            <b>
              <span onClick={postToggle}>
                {allPostVisible ? "see less" : "see more"}
              </span>
            </b>
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="asdfasdfasdfasdfasdfasdfasdf"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        {post.modifiedAt && (
          <Typography fontSize="0.6em">Modified {post.modifiedAt}</Typography>
        )}
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {post.text}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
