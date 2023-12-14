import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '10%',
    left: '10%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export async function TagList() {
    const response = await fetch('https://api.mangadex.org/manga/tag');
      if (!response.ok) throw new Error("Failed to find manga tag list");
      const tagResponse = await response.json();
  
      const tagList = tagResponse.data.map((tag: { attributes: { name: { en: any; }; }; }) => {
          return(
            <><Button key={tag.attributes.name.en}> {tag.attributes.name.en} </Button></>
          );
      })
  
    return tagList
    
  }