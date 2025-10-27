import Link from 'next/link'
import { getAllPosts } from '../lib/posts'

export default async function Home() {
  const posts = await getAllPosts()
  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul>
        {posts.map(p => (
          <li key={p.slug} className="mb-4">
            <Link href={`/posts/${p.slug}`} className="text-xl">{p.frontmatter.title}</Link>
            <div className="text-sm text-gray-600">{p.frontmatter.date}</div>
            <p>{p.frontmatter.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
