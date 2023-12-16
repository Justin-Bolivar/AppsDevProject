import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SearchBar from './components/searchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manga Search App',
  description: 'Apps Dev Nextjs Project',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
          <SearchBar/>
        </div>
        {children }
        </body>
    </html>
  )
}