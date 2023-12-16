'use client';
import React from 'react'
import { Modal,Tooltip,Fab, Box,Typography, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LikedManga from './likedManga';

const styleFAB = {
    margin: 0,
    top: 'auto',
    right: 40,
    bottom: 40,
    left: 'auto',
    position: 'fixed',
    color: '#221266',
    
}; 


export default function FavouriteFAB() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <Tooltip title="Your Favourites">
        <Fab sx={styleFAB} onClick={handleOpen}>
            <FavoriteIcon color='primary' sx={{color: '#ab47bc', fontSize: '30px'}} />
        </Fab> 
    </Tooltip>
    <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <LikedManga/>
    </Modal>
    </>
  )
}

    