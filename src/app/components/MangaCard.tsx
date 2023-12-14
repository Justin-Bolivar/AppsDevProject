import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Button, CardActionArea, CardActions, Link, createTheme } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
        <Card sx={{ width: width * 3, display: "flex", flexDirection: "row" }}>
          <CardMedia component="img" height={width * 2} image={picture} />
          <CardContent>
            <Typography gutterBottom variant="h1">
              {manga.data[0].attributes.title.en}
            </Typography>
            <Typography gutterBottom variant="subtitle1">
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
        <Link href={`/`}>
        <center>
        <Button size="large" variant="outlined">Home</Button>
        </center>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Card sx={{ width: width * 2, display: "flex", flexDirection: "row" }}>
          <CardMedia component="img" height={width} image={picture} />
          <CardContent>
            <Typography gutterBottom variant="h6" >
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
              <Link href={`/${title}`}>
              <Button variant="outlined">Read More</Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
        <br></br>
      </>
    );
  }
}