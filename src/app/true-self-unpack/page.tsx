import type { Metadata } from 'next'
import Link from 'next/link'
import AnimateIn from '@/components/AnimateIn'
import { getSprintPage } from '@/lib/content'

export const metadata: Metadata = {
  title: 'The True Self Unpack',
  description: 'A Metadynamics-led coaching journey to break through career confusion, reclaim your identity, and step into a career you are truly proud of.',
}

export default function TrueSelfUnpackPage() {
  const sprint = getSprintPage()

  return (
    <>
      <div className="page-hero bg-deep">
        <div className="s-tag">Signature Program</div>
        <h1>
          {sprint.headline[0]}<br />
          <span className="cr">{sprint.headline[1]}</span><br />
          {sprint.headline[2]}
        </h1>
      </div>

      <section style={{ background: 'var(--deep)' }}>
        <AnimateIn>
          <div className="sprint-wrapper">
            <div>
              <div className="sprint-badge">{sprint.badge}</div>
              <h2 className="sprint-name">
                {sprint.headline[0]}<br />
                <span className="cr">{sprint.headline[1]}</span><br />
                {sprint.headline[2]}
              </h2>
              <div className="sprint-duration">{sprint.duration}</div>
              <p className="sprint-desc">{sprint.description}</p>
              <div className="who-title">This Is For You If...</div>
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
          <div className="section-photo">
            <div className="photo-frame">
              <img src={sprint.image} alt="Anikesh mid-session, pointing to a whiteboard with an energetic thumbs up" />
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="s-tag">The Structure</div>
          <h2 className="s-title">Three Phases.<br />Built Around Your Profile.</h2>
          <p className="s-sub">Each phase has a clear focus, but no fixed length — pacing follows what your Metadynamics Profile reveals, not a calendar.</p>
        </AnimateIn>
        <AnimateIn>
          <div className="fw-grid">
            {[
              { num: '01', title: 'Discovery & Profiling', subtitle: 'Where We Start', desc: 'Your free Mini Metadynamics Profile, then the full 41-trait assessment. We begin with the truth about who you are, not who you think you should be.' },
              { num: '02', title: 'Values & Alignment', subtitle: 'What Actually Drives You', desc: 'Your meta-values hierarchy, uncovered. Career options, identity alignment, and removing the limiting beliefs standing between you and the work that fits.' },
              { num: '03', title: 'Integration & Action', subtitle: 'Depth Over Duration', desc: 'A roadmap built entirely around your profile. Accountability, momentum, action — this is where transformation becomes real and tangible results appear.' },
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
          <p style={{ fontSize: 16, color: 'var(--sub)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
            Book a free 45-minute discovery call, including your Mini Metadynamics Profile. We'll explore where you are, where you want to be, and whether {sprint.badge} is right for you.
          </p>
          <Link href="/contact" className="btn-fire">Book Your Free Discovery Call →</Link>
        </AnimateIn>
      </section>
    </>
  )
}
