import React from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function LikeButton() {
  return (

      <IconButton sx={{ p: "10px" }} aria-label="favorite_border">
        <FavoriteBorderIcon />
      </IconButton>

  );
}

export default LikeButton;
