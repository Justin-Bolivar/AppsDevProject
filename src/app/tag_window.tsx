"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

export const theme = createTheme({

  typography: {

    button: { // Here is where you can customise the button
      fontSize: 16,
      fontWeight: 700,
    },    
  },  
});

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
            <Divider textAlign='left'sx={{fontWeight: "bold"}}>Format</Divider>
          </Typography>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>4-Koma</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Adaptation</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Anthology</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Award Winning</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Doujinshi</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Fan Colored</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Full Color</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Long Strip</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Official Colored</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Oneshot</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Self-Published</Button>
            <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Web Comic</Button>
          
            
          <Typography color={'black'} id="modal-modal-title" variant="button">
           <Divider textAlign='left'sx={{fontWeight: "bold"}}>Genre</Divider>
          </Typography>
          
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Action</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Adventure</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Boys Love</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Comedy</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Crime</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Drama</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Fantasy</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Girls Love</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Historical</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Horror</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Isekai</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Magical Girls</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Mecha</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Medical</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Mystery</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Philosophical</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Psychological</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Romance</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Sci-Fi</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Slice of Life</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Sports</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Superhero</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Thriller</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Tragedy</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Wuxia</Button>
              
          <Typography color={'black'} id="modal-modal-title" variant="button">
           <Divider textAlign='left'sx={{fontWeight: "bold"}}>Theme</Divider>
          </Typography>
          
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Aliens</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Animals</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Cooking</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Crossdressing</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Delinquents</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Demons</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Genderswap</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Ghosts</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Gyaru</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Harem</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Incest</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Loli</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Mafia</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Magic</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Martial Arts</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Military</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Monster Girls</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Monsters</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Music</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Ninja</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Office Workers</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Police</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Post-Apocalyptic</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Reincarnation</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Reverse Harem</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Samurai</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>School Life</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Shota</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Supernatural</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Survival</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Time Travel</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Traditional Games</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Vampires</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Video Games</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Villainess</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Virtual Reality</Button>
              <Button color="success" variant="outlined" size="small" sx={{fontWeight: "bold"}}>Zombies</Button>
              

        </Box>
      </Modal>
    </div>
  );
}
