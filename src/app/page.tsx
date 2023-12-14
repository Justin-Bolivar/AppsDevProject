import SearchBar from "./components/SearchBar";
import LikeButton from "./components/LikeButton";
import Link from "next/link";
import MangaCard from "./components/MangaCard";

export default function Home() {
  return (
    <main>
      <center>
      <SearchBar />
      <Link href="/LikedManga">
        <LikeButton />
      </Link>
      </center>
      <div className ='page-container'>
      <MangaCard width= {256} title="Chainsaw Man" />
      </div>
    </main>
  );
}