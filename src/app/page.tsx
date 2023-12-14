import Link from "next/link";
import MangaCard from "./components/MangaCard";
import React from "react";

export default function Home() {
  return (
    <main>
      <center>
        <MangaCard width={256} title="Kagurabachi" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Spy Family" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Mob Psycho 100" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Jujutsu Kaisen" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Hajime no Ippo" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Akira" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Blue Period" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Steel Ball Run" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="Sousou no Frieren" showDescription={false} />
        <br></br>
        <MangaCard width={256} title="One Piece" showDescription={false} />
        <br></br>
      </center>
    </main>
  );
}
