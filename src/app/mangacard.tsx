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
const url = "https://api.mangadex.org";
const response = await fetch(`${url}/manga/?title=${title}`);
if (!response.ok) throw new Error("Failed to find manga info");
const manga = await response.json();

const response2 = await fetch(`${url}/cover/${manga.data[0].relationships[2].id}`);
if (!response2.ok) throw new Error("Failed to find manga cover");
const filename = await response2.json();
const picture = `https://uploads.mangadex.org/covers/${manga.data[0].id}/${filename.data.attributes.fileName}`

return (
    <Card sx={{ maxWidth: 345 }}> {/*345*/}
    <CardMedia component="img" height="140" image={picture} />
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