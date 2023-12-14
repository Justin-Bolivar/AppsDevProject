import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useState, useEffect } from "react";

interface Props {
  title: string;
}

interface Manga {
    tags: {
      attributes: {
        name: {
          en: string;
        };
      };
    }[];
  
}

interface Tag {
    attributes: {
        name: {
          en: string;
        };
      };
}

async function MangaCard({ title }: Props) {
  const url = "https://api.mangadex.org/manga/";
  const response = await fetch(`${url}?title=${title}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  const manga = await response.json();
  console.log(manga);

  const picture =
    "https://mangadex.org/covers/d65c0332-3764-4c89-84bd-b1a4e7278ad7/3fa0e8cc-0e39-4cb8-8f25-d70fb86cf110.jpg";
  const synopsis = "This is a placeholder synopsis.";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={picture} alt={synopsis} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {manga.data[0].attributes.title.en}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {manga.data[0].attributes.description.en}
        </Typography>
        <div>
          {manga.data[0].attributes.tags.map((tag : any) => (
            <Chip key={tag.attributes.name.en} label={tag.attributes.name.en} /> 
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default MangaCard;
