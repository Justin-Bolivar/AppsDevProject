import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';



const MangaCard = () => {
    const mangaID = 1;
    const mangaTitle = 'Kagura Bachi'
    const picture = 'https://mangadex.org/covers/d65c0332-3764-4c89-84bd-b1a4e7278ad7/3fa0e8cc-0e39-4cb8-8f25-d70fb86cf110.jpg';
    const synopsis = 'This is a placeholder synopsis.';
    const tags = ['tag1', 'tag2', 'tag3'];

    return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={picture} alt={synopsis} />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {mangaTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {synopsis}
        </Typography>
        <div>
            {tags.map((tag) => (
            <Chip key={tag} label={tag} />
            ))}
        </div>
        </CardContent>
    </Card>
    );
};

export default MangaCard;