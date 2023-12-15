import React from 'react'
import MangaCard from '@/app/components/MangaCard';

interface Props {
  tagName: string;
}

export default async function FilterTag({tagName}:Props){

  const selectedTagName = [tagName];
  const baseUrl = 'https://api.mangadex.org';
  const response = await fetch('https://api.mangadex.org/manga/tag');
  if (!response.ok) throw new Error("Failed to find manga tag list");
  const tagResponse = await response.json();

  console.log(tagResponse)
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

   const filteredManga = resp.data.data.map((manga: { title: any; }) => {
    return(
      <MangaCard key={manga.title} width={512} title={manga.title} showDescription={true} />
     );
 })

  return filteredManga
  
}
