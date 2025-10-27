import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(postsDir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  return { slug: realSlug, frontmatter: data, content: contentHtml }
}

export async function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = await Promise.all(slugs.map(s => getPostBySlug(s)))
  return posts.sort((a,b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
}
