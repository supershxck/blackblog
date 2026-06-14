// components/notes/NoteCard.jsx
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NoteCard({ note }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-primary-800/40 backdrop-blur-xl rounded-xl p-6 
                 border border-primary-600/30 hover:border-primary-500/50 
                 transition-all shadow-lg hover:shadow-primary-500/20"
    >
      <Link href={`/notes/${note.slug}`}>
        <h3 className="text-xl font-bold text-primary-200 mb-2">
          {note.title}
        </h3>
        <p className="text-primary-300/80 text-sm mb-4">
          {note.excerpt}
        </p>
        <div className="flex flex-wrap gap-2">
          {note.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary-700/50 text-primary-200 
                       text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}