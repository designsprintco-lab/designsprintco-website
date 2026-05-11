import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { getSprintPage } from '@/lib/content'

export const metadata: Metadata = {
  title: 'The Reclaim Sprint',
  description: 'A 6-week 1:1 coaching program to break through career confusion, reclaim your identity, and step into a career you are truly proud of.',
}

export default function ReclaimSprintPage() {
  const sprint = getSprintPage()

  return (
    <>
      <div className="page-hero bg-deep">
        <div className="s-tag">Signature Program</div>
        <h1>
          {sprint.headline[0]}<br />
          {sprint.headline[1]}<br />
          In <span className="cr">{sprint.headline[2].replace('In ', '')}</span>
        </h1>
      </div>

      <section style={{ background: 'var(--deep)' }}>
        <AnimateIn>
          <div className="sprint-wrapper">
            <div>
              <div className="sprint-badge">{sprint.badge}</div>
              <h2 className="sprint-name">
                {sprint.headline[0]}<br />
                {sprint.headline[1]}<br />
                <span className="cr">{sprint.headline[2]}</span>
              </h2>
              <div className="sprint-duration">{sprint.duration}</div>
              <p className="sprint-desc">{sprint.description}</p>
              <div className="who-title">This Sprint is For You If...</div>
              <ul className="who-list">
                {sprint.forYouIf.map(item => (
                  <li key={item}><span className="who-arrow">→</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="sprint-right">
              <div className="outcomes-title">{sprint.outcomesTitle}</div>
              {sprint.outcomes.map((o, i) => (
                <div key={i} className="outcome-item">
                  <div className="outcome-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="outcome-text">{o}</div>
                </div>
              ))}
              <Link href="/contact" className="sprint-cta">{sprint.ctaLabel}</Link>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="s-tag">The Structure</div>
          <h2 className="s-title">Three Sprints.<br />Total Transformation.</h2>
          <p className="s-sub">Each 2-week sprint has a clear focus. No filler, no theory without action.</p>
        </AnimateIn>
        <AnimateIn>
          <div className="fw-grid">
            {[
              { num: '01', title: 'Sprint 1: Discover', subtitle: 'Weeks 1–2', desc: 'We begin with the truth. Empathy mapping, values clarification, and identifying the real source of your stuck. Before strategy, we need honesty.' },
              { num: '02', title: 'Sprint 2: Design', subtitle: 'Weeks 3–4', desc: 'Armed with clarity, we design the path forward. Career options, identity alignment, removing limiting beliefs, and building the strategic roadmap.' },
              { num: '03', title: 'Sprint 3: Deploy', subtitle: 'Weeks 5–6', desc: 'We move from planning to doing. Accountability, momentum, action — this is where transformation becomes real and tangible results appear.' },
            ].map((s, i) => (
              <div key={s.num} className="fw-card">
                <div className="fw-accent" />
                <div className="fw-num">{s.num}</div>
                <div className="fw-pillar">{s.title}</div>
                <div className="fw-subtitle" style={{ color: ['var(--crimson)', 'var(--amber)', 'var(--gold)'][i] }}>{s.subtitle}</div>
                <p className="fw-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--deep)', textAlign: 'center' }}>
        <AnimateIn>
          <div className="s-tag" style={{ textAlign: 'center' }}>Your Next Step</div>
          <h2 className="s-title" style={{ textAlign: 'center' }}>Ready to Reclaim?</h2>
          <p style={{ fontSize: 16, color: '#666', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Book a free 30-minute discovery call. We'll explore where you are, where you want to be, and whether the Reclaim Sprint is right for you.
          </p>
          <Link href="/contact" className="btn-fire">Book Your Free Discovery Call →</Link>
        </AnimateIn>
      </section>
    </>
  )
}
