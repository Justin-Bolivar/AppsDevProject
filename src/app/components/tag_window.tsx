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
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
        <Box sx={style}>
          {/* tags */}
          <Typography color={'black'} id="modal-modal-title" variant="h4" sx={{mt:3}}>
            TAGS
          </Typography>
          
          <Typography color={'black'} id="modal-modal-title" variant="button">
            <Divider textAlign='left'sx={{fontWeight: "bold"}}>Format</Divider>
          </Typography>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>4-Koma</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Adaptation</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Anthology</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Award Winning</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Doujinshi</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Fan Colored</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Full Color</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Long Strip</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Official Colored</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Oneshot</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Self-Published</Button>
            <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Web Comic</Button>
          
            
          <Typography color={'black'} id="modal-modal-title" variant="button">
          <Divider textAlign='left'sx={{fontWeight: "bold"}}>Genre</Divider>
          </Typography>
          
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Action</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Adventure</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Boys Love</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Comedy</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Crime</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Drama</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Fantasy</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Girls Love</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Historical</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Horror</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Isekai</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Magical Girls</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Mecha</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Medical</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Mystery</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Philosophical</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Psychological</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Romance</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Sci-Fi</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Slice of Life</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Sports</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Superhero</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Thriller</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Tragedy</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Wuxia</Button>
              
          <Typography color={'black'} id="modal-modal-title" variant="button">
          <Divider textAlign='left'sx={{fontWeight: "bold"}}>Theme</Divider>
          </Typography>
          
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Aliens</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Animals</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Cooking</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Crossdressing</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Delinquents</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Demons</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Genderswap</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Ghosts</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Gyaru</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Harem</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Incest</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Loli</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Mafia</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Magic</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Martial Arts</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Military</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Monster Girls</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Monsters</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Music</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Ninja</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Office Workers</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Police</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Post-Apocalyptic</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Reincarnation</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Reverse Harem</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Samurai</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>School Life</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Shota</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Supernatural</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Survival</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Time Travel</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Traditional Games</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Vampires</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Video Games</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Villainess</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Virtual Reality</Button>
              <Button variant="outlined" size="small" sx={{fontWeight: "bold", color:"#a084ff", borderBlockColor: "#a084ff"}}>Zombies</Button>
              

        </Box>
      {/* </Modal> */}
    </div>
  );
}