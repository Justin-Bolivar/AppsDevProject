import Image from 'next/image'
import SearchBar from './components/SearchBar'
import LikeButton from './components/LikeButton'
import Link from 'next/link'
import { Container } from 'postcss'

export default function Home() {
  return (
    <main>
      <div className="page-container">
      <SearchBar />
      <Link href="/LikedManga">
      <LikeButton />
      </Link>
      </div>
    </main>
  )
}
