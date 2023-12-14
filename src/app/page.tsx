import Image from 'next/image'
import SearchBar from './components/SearchBar'
import LikeButton from './components/LikeButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <SearchBar />
      <Link href="/LikedManga">
      <LikeButton />
      </Link>
    </main>
  )
}
