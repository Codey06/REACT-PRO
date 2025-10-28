import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

// Hel dhamaan posts
export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || null,
    }
  })
}

// Hel hal post
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8') // <-- meesha uu error-ka ka yimaado
  const matterResult = matter(fileContents)

  return {
    slug,
    content: matterResult.content,
    ...matterResult.data,
  }
}
