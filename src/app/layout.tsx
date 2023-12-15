import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SearchBar from './components/searchBar'
import { AppBar, Box } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manga Search App',
  description: 'Apps Dev Nextjs Projecc',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box>
          <SearchBar/>
        </Box>
        {children}
        </body>
    </html>
  )
}