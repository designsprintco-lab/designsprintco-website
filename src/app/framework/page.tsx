import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import PageHero from '@/components/PageHero'
import { getFrameworkPage } from '@/lib/content'

export const metadata: Metadata = {
  title: 'The DSCo Framework',
  description: 'Design thinking applied to career transformation. Desirability, Viability, Feasibility — the human-centred framework behind The True Self Unpack.',
}

const subtitleColors = ['var(--crimson)', 'var(--amber)', 'var(--gold)']

export default function FrameworkPage() {
  const fw = getFrameworkPage()

  return (
    <>
      <PageHero
        tag="The DSCo Framework"
        title="Design Thinking Applied to Your Life"
        subtitle="We apply the world's most proven product design framework to career and leadership transformation — human-centred, strategically sound, practically executable."
      />

      {/* POSITIONING */}
      <section style={{ background: 'var(--deep)' }}>
        <AnimateIn>
          <div className="s-tag">Who We Serve</div>
          <h2 className="s-title">Built for the Ones<br />Who Know Something Must Change</h2>
          <p className="s-sub">Our positioning is precise. We work with a very specific person — because transformation requires specificity.</p>
        </AnimateIn>
        <AnimateIn>
          <div className="pos-grid">
            {fw.positioning.map(cell => (
              <div key={cell.label} className="pos-cell">
                <div className="pos-label">{cell.label}</div>
                <div className="pos-text">{cell.text}</div>
              </div>
            ))}
          </div>
          <div className="archetype-block">
            <div className="archetype-title">{fw.archetype.title}</div>
            <p className="archetype-text">"{fw.archetype.text}"</p>
          </div>
        </AnimateIn>
      </section>

      {/* FRAMEWORK PILLARS */}
      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="s-tag">The DVF Model</div>
          <h2 className="s-title">Three Pillars.<br />One Transformation.</h2>
          <p className="s-sub">The True Self Unpack is built on these three foundations — applied in sequence, with intention.</p>
        </AnimateIn>
        <AnimateIn>
          <div className="fw-grid">
            {fw.pillars.map((p, i) => (
              <div key={p.num} className="fw-card">
                <div className="fw-accent" />
                <div className="fw-num">{p.num}</div>
                <div className="fw-pillar">{p.pillar}</div>
                <div className="fw-subtitle" style={{ color: subtitleColors[i] }}>{p.subtitle}</div>
                <p className="fw-desc">{p.description}</p>
                <ul className="fw-items">
                  {p.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-photo">
            <div className="photo-frame">
              <img src={fw.sessionImage} alt="Anikesh laughing while facilitating a workshop at a whiteboard, audience applauding" />
            </div>
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
