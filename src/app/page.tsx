import SearchBar from "./components/SearchBar";
import LikeButton from "./components/LikeButton";
import Link from "next/link";
import MangaCard from "./components/MangaCard";
import React from "react";

export default function Home() {
  return (
    <main>
      <center>
        <MangaCard width={256} title="Kagurabachi" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="One Piece" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Spy Family" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Spy Family" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
      </center>
    </main>
  );
}
