"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ButtonGroup from '@mui/material/ButtonGroup';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
          <Typography color={'black'} id="modal-modal-title" variant="h6" component="h1">
            TAGS
          </Typography>
          <Typography color={'black'} id="modal-modal-title" variant="h6" component="h2">
            Format
          </Typography>
          
            <Button variant="text">4-Koma</Button>
            <Button>Adaptation</Button>
            <Button>Anthology</Button>
            <Button>Award Winning</Button>
            <Button>Doujinshi</Button>
            <Button>Fan Colored</Button>
            <Button>Full Color</Button>
            <Button>Long Strip</Button>
            <Button>Official Colored</Button>
            <Button>Oneshot</Button>
            <Button>Self-Published</Button>
            <Button>Web Comic</Button>
          

          <Typography color={'black'} id="modal-modal-title" variant="h6" component="h2">
            Genre
          </Typography>
        
              <Button>Action</Button>
              <Button>Adventure</Button>
              <Button>Boys Love</Button>
              <Button>Comedy</Button>
              <Button>Crime</Button>
              <Button>Drama</Button>
              <Button>Fantasy</Button>
              <Button>Girls Love</Button>
              <Button>Historical</Button>
              <Button>Horror</Button>
              <Button>Isekai</Button>
              <Button>Magical Girls</Button>
              <Button>Mecha</Button>
              <Button>Medical</Button>
              <Button>Mystery</Button>
              <Button>Philosophical</Button>
              <Button>Psychological</Button>
              <Button>Romance</Button>
              <Button>Sci-Fi</Button>
              <Button>Slice of Life</Button>
              <Button>Sports</Button>
              <Button>Superhero</Button>
              <Button>Thriller</Button>
              <Button>Tragedy</Button>
              <Button>Wuxia</Button>

          <Typography color={'black'} id="modal-modal-title" variant="h6" component="h2">
            Theme
          </Typography>
              <Button>Aliens</Button>
              <Button>Animals</Button>
              <Button>Cooking</Button>
              <Button>Crossdressing</Button>
              <Button>Delinquents</Button>
              <Button>Demons</Button>
              <Button>Genderswap</Button>
              <Button>Ghosts</Button>
              <Button>Gyaru</Button>
              <Button>Harem</Button>
              <Button>Incest</Button>
              <Button>Loli</Button>
              <Button>Mafia</Button>
              <Button>Magic</Button>
              <Button>Martial Arts</Button>
              <Button>Military</Button>
              <Button>Monster Girls</Button>
              <Button>Monsters</Button>
              <Button>Music</Button>
              <Button>Ninja</Button>
              <Button>Office Workers</Button>
              <Button>Police</Button>
              <Button>Post-Apocalyptic</Button>
              <Button>Reincarnation</Button>
              <Button>Reverse Harem</Button>
              <Button>Samurai</Button>
              <Button>School Life</Button>
              <Button>Shota</Button>
              <Button>Supernatural</Button>
              <Button>Survival</Button>
              <Button>Time Travel</Button>
              <Button>Traditional Games</Button>
              <Button>Vampires</Button>
              <Button>Video Games</Button>
              <Button>Villainess</Button>
              <Button>Virtual Reality</Button>
              <Button>Zombies</Button>
              

        </Box>
      </Modal>
    </div>
  );
}
