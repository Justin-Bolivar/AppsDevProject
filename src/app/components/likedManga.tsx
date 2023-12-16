import * as React from 'react';
import { Box,Typography, Divider } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '.5px solid #000',
  boxShadow: .54,
  p: 4,
  '& button': { m: .5 }
};

export default function LikedManga() {

  return (
    <Box sx={style}>
      <Typography color={'purple'} id="modal-modal-title" variant="h4" sx={{ mt: 1, mb: 3 }}>
      Favourite Manga
      </Typography>
      <Divider/>
      <Typography sx={{ mt: 5, mb: 3, fontWeight:'bold'} }>Oops! No Favourites yet :3</Typography>
  </Box>
);
}
