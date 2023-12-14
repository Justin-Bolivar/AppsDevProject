import React from 'react'

export default async function getAllTags() {
    const res = await fetch(`https://api.mangadex.org/manga/tag`) // link for tags 

    if (!res.ok) throw new Error('failed to fetch tags')
        
  return res.json()
}