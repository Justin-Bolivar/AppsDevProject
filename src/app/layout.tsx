import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SearchBar from './components/searchBar'
import { Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manga Search App',
  description: 'Apps Dev Nextjs Projecc',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-fuchsia-950 via-violet-300 to-fuchsia-950'>
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000}}>
          <center>
            <SearchBar/>
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {children }
        </body>
    </html>
  )
}