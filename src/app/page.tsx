import React from 'react'
import TagWindow from './tag_window'
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import getAllTags from '../../lib/getAllTags';
import { Tag } from '../../types';
import Link from "next/link";
import MangaCard from "./components/MangaCard";
import { Box, Grid } from "@mui/material";


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
  return (
    <main>
      <center>
            <MangaCard width={256} title="Kagurabachi" showDescription={false}  />  
          
            <MangaCard width={256} title="Spy Family" showDescription={false} />
          
            <MangaCard width={256} title="Mob Psycho 100" showDescription={false} />
          
            <MangaCard width={256} title="Jujutsu Kaisen" showDescription={false} />
          
            <MangaCard width={256} title="Hajime no Ippo" showDescription={false} />
          
            <MangaCard width={256} title="Sono Bisque Doll Wa Koi Wo Suru" showDescription={false} />
          
            <MangaCard width={256} title="Blue Period" showDescription={false} />
          
            <MangaCard width={256} title="Youjo Senki" showDescription={false} />
          
            <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
          
            <MangaCard width={256} title="One Piece" showDescription={false} />
          
      </center>
    </main>
  );
}