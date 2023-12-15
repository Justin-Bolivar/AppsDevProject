"use client";
import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import TagWindow from "./tag_window";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputFieldValue, setInputFieldValue] = React.useState("");
  const router = useRouter();
  
  return (
    <Box
      sx={{
        alignContent: "center",
        width: "100%",
        display: "flex",
        m: 3,
        justifyContent: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          boxShadow: "5px 4px 10px rgba(85, 39, 127, 0.25)", 
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 700,
          justifyContent: "center",
        }}
      >
        <IconButton
          sx={{ p: "10px", color: "#a084ff" }}
          aria-label="menu"
          onClick={handleOpen}
        >
          #
        </IconButton>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <TagWindow />
        </Modal>
        <Divider sx={{ height: 28, m: 0. }} orientation="vertical" />
        <InputBase
          sx={{ ml: 1, flex: 1, color: "black", fontWeight: 800 }}
          placeholder="Search Manga"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setInputFieldValue(event.target.value);
            console.log(inputFieldValue);
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              router.push(`/${inputFieldValue}`);
            }
          }}
        />
        <Link href={`/${inputFieldValue}`}>
          <IconButton
            type="button"
            sx={{ p: "10px", color: "#a084ff" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Link>
      </Paper>
    </Box>
  );
}