import * as React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Box, Button, CardActionArea, CardActions, Link, createTheme } from "@mui/material";

interface Props {
  title: string;
  width: number;
  showDescription: boolean;
  mangaID?: string;
}

export default async function MangaCard({
  width,
  title,
  showDescription,
  mangaID = ''
}: Props) {
  const url = "https://api.mangadex.org";

  if (mangaID) {
    const response = await fetch(`${url}/manga/${mangaID}`);
    if (!response.ok) throw new Error("Failed to find manga info");
    const manga = await response.json();

    let coverArtID = manga.data.relationships.find((relationship) =>{
      return (relationship.type==='cover_art');
    })
    
    const response2 = await fetch(`${url}/cover/${coverArtID.id}`);

    if (!response2.ok) throw new Error("Failed to find manga cover");
    const filename = await response2.json();

    const picture = `https://uploads.mangadex.org/covers/${mangaID}/${filename.data.attributes.fileName}.${width}.jpg`;

    return (
      <>
        <Card sx={{width: width * 2, display: "flex", flexDirection: "row", backgroundColor: "#f5f5f5", marginTop: 5, boxShadow: "5px 4px 10px rgba(85, 39, 127, 0.25)" }}>
          <CardMedia component="img" height={width} image={picture} />
          <CardContent>
            <Typography fontWeight="bold" variant="h5" sx={{ marginBottom: 5 }}>
              {manga.data.attributes.title.en}
            </Typography>

            <div>
              {manga.data.attributes.tags.map((tag: any) => (
                <Chip
                  sx={{ marginTop: 1, marginRight: 1, backgroundColor: "transparent", border: "2px solid #a084ff", borderRadius: 5, color: "#a084ff" }}
                  key={tag.attributes.name.en}
                  label={tag.attributes.name.en}
                />
              ))}
            </div>

            <CardActions sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
              <Link href={`/${manga.data.attributes.title.en}`}>
                <Button variant="contained" style={{ backgroundColor: "purple", color: "white" }}>Read More</Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
        <br></br>
      </>
    );
  }

  const response = await fetch(`${url}/manga/?title=${title}`);
  if (!response.ok) throw new Error("Failed to find manga info");
  const manga = await response.json();

  let coverArtID = manga.data[0].relationships.find((relationship) =>{
    return (relationship.type==='cover_art');
  })
  
  const response2 = await fetch(`${url}/cover/${coverArtID.id}`);
  if (!response2.ok) throw new Error("Failed to find manga cover");
  const filename = await response2.json();
  const picture = `https://uploads.mangadex.org/covers/${manga.data[0].id}/${filename.data.attributes.fileName}.${width}.jpg`;

  if (showDescription) {
    return (
      <>
        <center>
          <Card sx={{ width: width * 3, display: "flex", flexDirection: "row", marginTop: 15, backgroundColor: "#f5f5f5", boxShadow: "5px 4px 10px rgba(85, 39, 127, 0.25)" }}>
            <CardMedia component="img" height={width * 2} image={picture} />
            <CardContent>
              <Typography sx={{ marginBottom: 5, marginLeft: 5 }} variant="h1" fontWeight="bold">
                {manga.data[0].attributes.title.en}
              </Typography>
              <Typography sx={{ marginBottom: 5, marginLeft: 5, marginRight: 5 }} variant="subtitle1">
                {manga.data[0].attributes.description.en}
              </Typography>
              <Box sx={{ marginBottom: 5, marginLeft: 5, marginRight: 5, marginTop: 5 }} >
                {manga.data[0].attributes.tags.map((tag: any) => (
                  <Chip
                    sx={{ marginTop: 1, marginRight: 1, backgroundColor: "transparent", border: "2px solid #a084ff", borderRadius: 5, color: "#a084ff" }}
                    key={tag.attributes.name.en}
                    label={tag.attributes.name.en}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </center>
        <br></br>
        <Link href={`/`}>
          <center>
            <Button variant="contained" size="large" style={{ backgroundColor: "purple", color: "white" }}>Home</Button>
          </center>
        </Link>
      </>
    );
  } else {
    return (
      <>
        <Card sx={{width: width * 2, display: "flex", flexDirection: "row", backgroundColor: "#f5f5f5", marginTop: 5, boxShadow: "5px 4px 10px rgba(85, 39, 127, 0.25)" }}>
          <CardMedia component="img" height={width} image={picture} />
          <CardContent>
            <Typography fontWeight="bold" variant="h5" sx={{ marginBottom: 5 }}>
              {manga.data[0].attributes.title.en}
            </Typography>

            <div>
              {manga.data[0].attributes.tags.map((tag: any) => (
                <Chip
                  sx={{ marginTop: 1, marginRight: 1, backgroundColor: "transparent", border: "2px solid #a084ff", borderRadius: 5, color: "#a084ff" }}
                  key={tag.attributes.name.en}
                  label={tag.attributes.name.en}
                />
              ))}
            </div>

            <CardActions sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
              <Link href={`/${title}`}>
                <Button variant="contained" style={{ backgroundColor: "purple", color: "white" }}>Read More</Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
        <br></br>
      </>
    );
  }
}