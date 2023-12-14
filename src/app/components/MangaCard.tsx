import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions } from "@mui/material";

interface Props {
  title: string;
  width: number;
  showDescription: boolean;
}

export default async function MangaCard({
  width,
  title,
  showDescription,
}: Props) {
  const url = "https://api.mangadex.org";
  const response = await fetch(`${url}/manga/?title=${title}`);
  if (!response.ok) throw new Error("Failed to find manga info");
  const manga = await response.json();

  const response2 = await fetch(
    `${url}/cover/${manga.data[0].relationships[2].id}`
  );
  if (!response2.ok) throw new Error("Failed to find manga cover");
  const filename = await response2.json();
  const picture = `https://uploads.mangadex.org/covers/${manga.data[0].id}/${filename.data.attributes.fileName}.${width}.jpg`;

  if (showDescription) {
    return (
      <>
        <Card sx={{ width: width * 2, display: "flex", flexDirection: "row" }}>
          <CardMedia
            component="img"
            height={width * 2}
            image={picture}
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              {manga.data[0].attributes.title.en}

            </Typography>
            <Typography variant="h4" color="text.primary">{/*variant="body2" color="text.secondary"*/}
              {manga.data[0].attributes.description.en}

            </Typography>
            <div>
              {manga.data[0].attributes.tags.map((tag: any) => (
              <Chip
                key={tag.attributes.name.en}
                label={tag.attributes.name.en}
              />
            ))}
            </div>
          </CardContent>
        </Card>
        <br></br>
      </>
    );
  } else {
    return (
      <>
        <Card sx={{ width: width * 2, display: "flex", flexDirection: "row" }}>
          <CardMedia component="img" height={width} image={picture} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {manga.data[0].attributes.title.en}
              
            </Typography>
            <div>
              {manga.data[0].attributes.tags.map((tag: any) => (
              <Chip
                key={tag.attributes.name.en}
                label={tag.attributes.name.en}
              />
            ))}
              
            </div>
            <CardActions>
              <Button size="large" color="primary">
                <b>Read More</b>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <br></br>
      </>
    );
  }
}
