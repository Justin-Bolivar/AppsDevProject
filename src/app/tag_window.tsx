"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '.5px solid #000',
  boxShadow: .54,
  p: 4,
  '& button': { m: .5 }
};



export default function TagWindow() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* tags */}
          <Typography color={'black'} id="modal-modal-title" variant="h4" sx={{mt:3}}>
            TAGS
          </Typography>
          
          <Typography color={'black'} id="modal-modal-title" variant="button">
            <Divider textAlign='left'>Format</Divider>
          </Typography>
            <Button color="success" variant="outlined" size="small">4-Koma</Button>
            <Button color="success" variant="outlined" size="small">Adaptation</Button>
            <Button color="success" variant="outlined" size="small">Anthology</Button>
            <Button color="success" variant="outlined" size="small">Award Winning</Button>
            <Button color="success" variant="outlined" size="small">Doujinshi</Button>
            <Button color="success" variant="outlined" size="small">Fan Colored</Button>
            <Button color="success" variant="outlined" size="small">Full Color</Button>
            <Button color="success" variant="outlined" size="small">Long Strip</Button>
            <Button color="success" variant="outlined" size="small">Official Colored</Button>
            <Button color="success" variant="outlined" size="small">Oneshot</Button>
            <Button color="success" variant="outlined" size="small">Self-Published</Button>
            <Button color="success" variant="outlined" size="small">Web Comic</Button>
          
            
          <Typography color={'black'} id="modal-modal-title" variant="button">
          <Divider textAlign='left'>Genre</Divider>
          </Typography>
          
              <Button color="success" variant="outlined" size="small">Action</Button>
              <Button color="success" variant="outlined" size="small">Adventure</Button>
              <Button color="success" variant="outlined" size="small">Boys Love</Button>
              <Button color="success" variant="outlined" size="small">Comedy</Button>
              <Button color="success" variant="outlined" size="small">Crime</Button>
              <Button color="success" variant="outlined" size="small">Drama</Button>
              <Button color="success" variant="outlined" size="small">Fantasy</Button>
              <Button color="success" variant="outlined" size="small">Girls Love</Button>
              <Button color="success" variant="outlined" size="small">Historical</Button>
              <Button color="success" variant="outlined" size="small">Horror</Button>
              <Button color="success" variant="outlined" size="small">Isekai</Button>
              <Button color="success" variant="outlined" size="small">Magical Girls</Button>
              <Button color="success" variant="outlined" size="small">Mecha</Button>
              <Button color="success" variant="outlined" size="small">Medical</Button>
              <Button color="success" variant="outlined" size="small">Mystery</Button>
              <Button color="success" variant="outlined" size="small">Philosophical</Button>
              <Button color="success" variant="outlined" size="small">Psychological</Button>
              <Button color="success" variant="outlined" size="small">Romance</Button>
              <Button color="success" variant="outlined" size="small">Sci-Fi</Button>
              <Button color="success" variant="outlined" size="small">Slice of Life</Button>
              <Button color="success" variant="outlined" size="small">Sports</Button>
              <Button color="success" variant="outlined" size="small">Superhero</Button>
              <Button color="success" variant="outlined" size="small">Thriller</Button>
              <Button color="success" variant="outlined" size="small">Tragedy</Button>
              <Button color="success" variant="outlined" size="small">Wuxia</Button>
              
          <Typography color={'black'} id="modal-modal-title" variant="button">
          <Divider textAlign='left'>Theme</Divider>
          </Typography>
          
              <Button color="success" variant="outlined" size="small">Aliens</Button>
              <Button color="success" variant="outlined" size="small">Animals</Button>
              <Button color="success" variant="outlined" size="small">Cooking</Button>
              <Button color="success" variant="outlined" size="small">Crossdressing</Button>
              <Button color="success" variant="outlined" size="small">Delinquents</Button>
              <Button color="success" variant="outlined" size="small">Demons</Button>
              <Button color="success" variant="outlined" size="small">Genderswap</Button>
              <Button color="success" variant="outlined" size="small">Ghosts</Button>
              <Button color="success" variant="outlined" size="small">Gyaru</Button>
              <Button color="success" variant="outlined" size="small">Harem</Button>
              <Button color="success" variant="outlined" size="small">Incest</Button>
              <Button color="success" variant="outlined" size="small">Loli</Button>
              <Button color="success" variant="outlined" size="small">Mafia</Button>
              <Button color="success" variant="outlined" size="small">Magic</Button>
              <Button color="success" variant="outlined" size="small">Martial Arts</Button>
              <Button color="success" variant="outlined" size="small">Military</Button>
              <Button color="success" variant="outlined" size="small">Monster Girls</Button>
              <Button color="success" variant="outlined" size="small">Monsters</Button>
              <Button color="success" variant="outlined" size="small">Music</Button>
              <Button color="success" variant="outlined" size="small">Ninja</Button>
              <Button color="success" variant="outlined" size="small">Office Workers</Button>
              <Button color="success" variant="outlined" size="small">Police</Button>
              <Button color="success" variant="outlined" size="small">Post-Apocalyptic</Button>
              <Button color="success" variant="outlined" size="small">Reincarnation</Button>
              <Button color="success" variant="outlined" size="small">Reverse Harem</Button>
              <Button color="success" variant="outlined" size="small">Samurai</Button>
              <Button color="success" variant="outlined" size="small">School Life</Button>
              <Button color="success" variant="outlined" size="small">Shota</Button>
              <Button color="success" variant="outlined" size="small">Supernatural</Button>
              <Button color="success" variant="outlined" size="small">Survival</Button>
              <Button color="success" variant="outlined" size="small">Time Travel</Button>
              <Button color="success" variant="outlined" size="small">Traditional Games</Button>
              <Button color="success" variant="outlined" size="small">Vampires</Button>
              <Button color="success" variant="outlined" size="small">Video Games</Button>
              <Button color="success" variant="outlined" size="small">Villainess</Button>
              <Button color="success" variant="outlined" size="small">Virtual Reality</Button>
              <Button color="success" variant="outlined" size="small">Zombies</Button>
              

        </Box>
      </Modal>
    </div>
  );
}
