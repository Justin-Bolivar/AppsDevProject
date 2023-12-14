import React from 'react'
import TagWindow from './tag_window'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getAllTags from '../../lib/getAllTags';
import { Tag } from '../../types';


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

export default function Home() {

  return <TagWindow/>
}


