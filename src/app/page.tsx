import Link from "next/link";
import MangaCard from "./components/MangaCard";
import React from "react";
import { Box, Grid } from "@mui/material";


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