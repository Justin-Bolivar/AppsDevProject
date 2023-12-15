'use client'
import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'; //if liked
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'; // if not liked

interface Props {
  isLiked: boolean;
}

export default function LikeButton({isLiked}: Props) {
  
  const likeStatus = 
    !isLiked? <FavoriteBorderRoundedIcon sx={{color: '#ab47bc', fontSize: '30px'}}/> 
    : <FavoriteRoundedIcon sx={{color: '#ab47bc', fontSize: '30px'}}/>
    
  return likeStatus
}
