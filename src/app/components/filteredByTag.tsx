import React from 'react'
import Button from '@mui/material/Button';

interface Props {
  tagName: string;
}

export default async function FilterTag({tagName}:Props){

  const selectedTagName = [tagName];
  const baseUrl = 'https://api.mangadex.org';
  const response = await fetch('https://api.mangadex.org/manga/tag');
  if (!response.ok) throw new Error("Failed to find manga tag list");
  const tagResponse = await response.json();


  const selectedTagID = tagResponse.data.data
    .filter((tag: { attributes: { name: { en: string; }; }; }) => selectedTagName.includes(tag.attributes.name.en))
    .map((tag: { id: any; }) => tag.id);

  
  const resp = tagResponse({
    method: 'GET',
    url: `${baseUrl}/manga`,
    params: {
        'selectedTags': selectedTagID
    }
  });


  const mangaList = resp.data.data.map((manga: { id: any; }) => {
      return(
        <p key={manga.id}> {manga.id} </p>
      );
  })

  return mangaList
  
}
