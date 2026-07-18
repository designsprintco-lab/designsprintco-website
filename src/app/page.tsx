import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { getHomePage, getSprintPage, getAllTestimonials, getAllPostFrontmatter } from '@/lib/content'

const avatarStyles: Record<string, React.CSSProperties> = {
  crimson: { background: 'rgba(255,69,0,0.15)', color: 'var(--crimson)' },
  amber: { background: 'rgba(255,140,0,0.15)', color: 'var(--amber)' },
  gold: { background: 'rgba(255,215,0,0.1)', color: 'var(--gold)' },
}

export default function HomePage() {
  const home = getHomePage()
  const sprint = getSprintPage()
  const testimonials = getAllTestimonials().slice(0, 3)
  const posts = getAllPostFrontmatter().slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section id="hero">
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-with-photo">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" />{home.eyebrow}</div>
            <h1>
              {home.h1Line1}<br />
              <span className="cr">{home.h1Line2}</span><br />
              {home.h1Line3}<br />
              <span className="grad">{home.h1Line4}</span>
            </h1>
            <p className="hero-sub">{home.subtitle}</p>
            <div className="cta-row">
              <Link href="/contact" className="btn-fire">{home.ctaPrimary}</Link>
              <Link href="/true-self-unpack" className="btn-ghost">{home.ctaSecondary} →</Link>
            </div>
            <div className="stats-bar">
              {home.stats.map(s => (
                <div key={s.label}>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-frame">
              <img src={home.heroImage} alt="Anikesh smiling in front of a wall of client video calls" />
            </div>
            <div className="hero-photo-caption">{home.heroImageCaption}</div>
          </div>
        </div>
        <div className="scroll-hint"><div className="scroll-line" />Scroll to explore</div>
      </section>

      {/* SPRINT TEASER */}
      <section style={{ background: 'var(--deep)' }}>
        <AnimateIn>
          <div className="s-tag">Signature Program</div>
          <div className="sprint-wrapper">
            <div>
              <div className="sprint-badge">{sprint.badge}</div>
              <h2 className="sprint-name">{sprint.headline[0]}<br />{sprint.headline[1]}<br /><span className="cr">{sprint.headline[2]}</span></h2>
              <p className="sprint-desc" style={{ marginBottom: 32 }}>{sprint.description}</p>
              <Link href="/true-self-unpack" className="btn-fire">Explore {sprint.badge} →</Link>
            </div>
            <div className="sprint-right">
              <div className="outcomes-title">{sprint.outcomesTitle}</div>
              {sprint.outcomes.map((o, i) => (
                <div key={i} className="outcome-item">
                  <div className="outcome-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="outcome-text">{o}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* TESTIMONIALS PREVIEW */}
      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="s-tag">Client Results</div>
          <h2 className="s-title">Real Breakthroughs.<br />Real People.</h2>
          <p className="s-sub">{sprint.badge} works because it's built on lived experience, not theory.</p>
        </AnimateIn>
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
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/testimonials" className="btn-ghost">See All Client Results →</Link>
          </div>
        </AnimateIn>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ background: 'var(--deep)' }}>
        <AnimateIn>
          <div className="s-tag">Insights & Resources</div>
          <h2 className="s-title">From the Sprint Lab</h2>
          <p className="s-sub">Practical ideas on career reclamation, identity, and bold living — straight from the coaching floor.</p>
        </AnimateIn>
        <AnimateIn>
          <div className="blog-grid">
            {posts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <div className="blog-thumb" style={{ background: p.emojiBackground }}>{p.emoji}</div>
                <div className="blog-body">
                  <div className="blog-cat">{p.category}</div>
                  <div className="blog-title">{p.title}</div>
                  <div className="blog-excerpt">{p.excerpt}</div>
                  <div className="blog-meta"><span>{p.readTime}</span><span>{p.category}</span></div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/blog" className="btn-ghost">View All Insights →</Link>
          </div>
        </AnimateIn>
      </section>

      {/* CTA BAND */}
      <section style={{ background: 'var(--mid)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <AnimateIn>
          <div className="s-tag" style={{ textAlign: 'center' }}>Ready to Start?</div>
          <h2 className="s-title" style={{ textAlign: 'center' }}>Book Your Free<br />Discovery Call</h2>
          <p style={{ fontSize: 16, color: '#666', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
            30 minutes. No obligation. Just an honest conversation about where you are and where you could be.
          </p>
          <Link href="/contact" className="btn-fire">Book Your Free Discovery Call →</Link>
        </AnimateIn>
      </section>
    </>
  )
}
