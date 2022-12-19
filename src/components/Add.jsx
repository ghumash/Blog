import React from "react";

import { Add as AddIcon, Image, EmojiEmotions } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useToggle } from "../hooks/useToggle";

export default function Add() {
  const { status: modal, toggleStatus: setModal } = useToggle();

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Tooltip
        onClick={setModal}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 28px)", md: 30 },
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
          <ButtonGroup variant="contained" fullWidth>
            <Button>Post</Button>
            <Button color="error">Cancel</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
