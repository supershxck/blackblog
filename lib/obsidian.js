// lib/obsidian.js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const VAULT_PATH = process.env.OBSIDIAN_VAULT_PATH || './content'

export function getNotes() {
  const files = fs.readdirSync(VAULT_PATH)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(VAULT_PATH, file)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)
      
      return {
        slug: file.replace('.md', ''),
        title: data.title || file.replace('.md', ''),
        date: data.date || null,
        tags: data.tags || [],
        excerpt: content.slice(0, 200) + '...',
        content,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getNoteBySlug(slug) {
  const filePath = path.join(VAULT_PATH, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  
  return {
    slug,
    title: data.title || slug,
    date: data.date || null,
    tags: data.tags || [],
    content,
  }
}