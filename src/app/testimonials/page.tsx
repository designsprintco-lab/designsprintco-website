import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import PageHero from '@/components/PageHero'
import { getAllTestimonials } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Client Results',
  description: 'Real breakthroughs from real people. Read what DesignSprintCo clients say about The Reclaim Sprint.',
}

const avatarStyles: Record<string, React.CSSProperties> = {
  crimson: { background: 'rgba(255,69,0,0.15)', color: 'var(--crimson)' },
  amber: { background: 'rgba(255,140,0,0.15)', color: 'var(--amber)' },
  gold: { background: 'rgba(255,215,0,0.1)', color: 'var(--gold)' },
}

export default function TestimonialsPage() {
  const testimonials = getAllTestimonials()

  return (
    <>
      <PageHero
        tag="Client Results"
        title="Real Breakthroughs. Real People."
        subtitle="The Reclaim Sprint works because it's built on lived experience, not theory. Here's what our clients say."
      />

      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="testi-grid">
            {testimonials.map(t => (
              <div key={t.slug} className="testi-card">
                <div className="stars">{'★'.repeat(t.stars)}</div>
                <p className="testi-q">"{t.quote}"</p>
                <div className="testi-author">
                  <div className="t-avatar" style={avatarStyles[t.avatarColor]}>{t.initials}</div>
                  <div>
                    <div className="t-name">{t.authorName}</div>
                    <div className="t-role">{t.authorRole}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      <section style={{ background: 'var(--deep)', textAlign: 'center' }}>
        <AnimateIn>
          <div className="s-tag" style={{ textAlign: 'center' }}>Your Story Starts Here</div>
          <h2 className="s-title" style={{ textAlign: 'center' }}>Ready to Write<br />Your Own?</h2>
          <p style={{ fontSize: 16, color: '#666', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Book a free 30-minute discovery call and let's explore what's possible for you.
          </p>
          <Link href="/contact" className="btn-fire">Book Your Free Discovery Call →</Link>
        </AnimateIn>
      </section>
    </>
  )
}
