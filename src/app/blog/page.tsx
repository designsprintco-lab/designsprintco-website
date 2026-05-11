import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import PageHero from '@/components/PageHero'
import { getAllPostFrontmatter } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Practical ideas on career reclamation, identity, and bold living — straight from the coaching floor.',
}

export default function BlogPage() {
  const posts = getAllPostFrontmatter()

  return (
    <>
      <PageHero
        tag="Insights & Resources"
        title="From the Sprint Lab"
        subtitle="Practical ideas on career reclamation, identity, and bold living — straight from the coaching floor."
      />

      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="blog-grid">
            {posts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-thumb" style={{ background: p.emojiBackground }}>{p.emoji}</div>
                <div className="blog-body">
                  <div className="blog-cat">{p.category}</div>
                  <div className="blog-title">{p.title}</div>
                  <div className="blog-excerpt">{p.excerpt}</div>
                  <div className="blog-meta">
                    <span>{p.readTime}</span>
                    <span>{new Date(p.date).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
