// pages/index.jsx
import { useState } from 'react'
import NoteCard from '../components/notes/NoteCard'
import SearchBar from '../components/ui/SearchBar'
import { getNotes } from '../lib/obsidian'

export default function Home({ notes }) {
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <div className="max-w-2xl mx-auto">
        <SearchBar 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.map(note => (
          <NoteCard key={note.slug} note={note} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const notes = getNotes() // Implement this in lib/obsidian.js
  return {
    props: {
      notes,
    },
    revalidate: 60, // Revalidate every minute
  }
}