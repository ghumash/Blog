import React from "react";

import { Add as AddIcon, Image, EmojiEmotions } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";

import { useToggle } from "../hooks/useToggle";
import { modalStyles } from "../custom/mui.styles";
import { UserBox } from "../custom/mui.components";

export default function Add() {
  const { status: modal, toggleStatus: setModal } = useToggle();

  return (
    <>
      <Tooltip
        onClick={setModal}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50vw - 27px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={modal}
        onClose={setModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyles}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            color="gray"
            textAlign="center"
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="./assets/avatars/avatar_9.jpg" />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%", mb: 2 }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's in your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mb={3}>
            <EmojiEmotions color="warning" />
            <Image color="secondary" />
          </Stack>
          <Box display="flex" justifyContent="space-evenly">
            <Button sx={{ width: "7em" }} color="error" variant="contained">
              Cancel
            </Button>
            <Button sx={{ width: "7em" }} color="success" variant="contained">
              Post
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
