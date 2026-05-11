import type { Metadata } from 'next'
import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/content'

export function generateStaticParams() {
  return getAllPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return (
    <>
      <div className="page-hero bg-deep">
        <div className="s-tag">{post.category} · {post.readTime}</div>
        <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 60px)' }}>{post.title}</h1>
        <p className="s-sub" style={{ marginTop: 16 }}>{post.excerpt}</p>
      </div>

      <section style={{ background: 'var(--obsidian)' }}>
        <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

        <div style={{ marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border)' }}>
          <Link href="/blog" className="btn-ghost">← Back to Insights</Link>
          <div style={{ marginTop: 48 }}>
            <div className="s-tag">Ready for more?</div>
            <h2 className="s-title" style={{ marginBottom: 24 }}>Book Your Free<br />Discovery Call</h2>
            <Link href="/contact" className="btn-fire">Start the Conversation →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
