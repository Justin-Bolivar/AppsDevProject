'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
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
      <Button onClick={handleOpen}>Tags</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <h4 className="">Format</h4>
          <div className=" flex-wrap gap-2 mb-4"><a href="" className="">
            <Button>4-Koma</Button></a><a href="" className="">
            <Button>Adaptation</Button></a><a href="" className="">
            <Button>Anthology</Button></a><a href="" className="">
            <Button>Award Winning</Button></a><a href="" className="">
            <Button>Doujinshi</Button></a><a href="" className="">
            <Button>Fan Colored</Button></a><a href="" className="">
            <Button>Full Color</Button></a><a href="" className="">
            <Button>Long Strip</Button></a><a href="" className="">
            <Button>Official Colored</Button></a><a href="" className="">
            <Button>Oneshot</Button></a><a href="" className="">
            <Button>Self-Published</Button></a><a href="" className="">
            <Button>Web Comic</Button></a></div>
          <h4 className="">Genre</h4>
          <div className="">
          <a href="" className="">
            <Button>Action</Button></a><a href="" className="">
            <Button>Adventure</Button></a><a href="" className="">
            <Button>Boys Love</Button></a><a href="" className="">
            <Button>Comedy</Button></a><a href="" className="">
            <Button>Crime</Button></a><a href="" className="">
            <Button>Drama</Button></a><a href="" className="">
            <Button>Fantasy</Button></a><a href="" className="">
            <Button>Girls Love</Button></a><a href="" className="">
            <Button>Historical</Button></a><a href="" className="">
            <Button>Horror</Button></a><a href="" className="">
            <Button>Isekai</Button></a><a href="" className="">
            <Button>Magical Girls</Button></a><a href="" className="">
            <Button>Mecha</Button></a><a href="" className="">
            <Button>Medical</Button></a><a href="" className="">
            <Button>Mystery</Button></a><a href="" className="">
            <Button>Philosophical</Button></a><a href="" className="">
            <Button>Psychological</Button></a><a href="" className="">
            <Button>Romance</Button></a><a href="" className="">
            <Button>Sci-Fi</Button></a><a href="" className="">
            <Button>Slice of Life</Button></a><a href="" className="">
            <Button>Sports</Button></a><a href="" className="">
            <Button>Superhero</Button></a><a href="" className="">
            <Button>Thriller</Button></a><a href="" className="">
            <Button>Tragedy</Button></a><a href="" className="">
            <Button>Wuxia</Button></a>
          </div>
           
        </Box>
      </Modal>
    </div>
  );
}