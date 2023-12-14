import SearchBar from "./components/SearchBar";
import LikeButton from "./components/LikeButton";
import Link from "next/link";
import MangaCard from "./components/MangaCard";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Link href="/LikedManga">
        <LikeButton />
      </Link>
      <MangaCard title="chainsaw man"/>
    </main>
  );
}
