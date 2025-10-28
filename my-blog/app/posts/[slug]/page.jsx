import { getPostBySlug } from '@/lib/posts'
import { marked } from 'marked'

export default function PostPage({ params }) {
  console.log('✅ params:', params) // <-- si aan u hubino waxa soo baxaya
  const slug = params?.slug

  if (!slug) {
    return <h1 className="text-red-600">Slug not found!</h1>
  }

  const post = getPostBySlug(slug)

  if (!post) {
    return <h1 className="text-red-600">Post not found!</h1>
  }

  const contentHtml = marked(post.content)

  return (
    <article className="prose mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}
