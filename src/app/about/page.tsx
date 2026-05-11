import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import PageHero from '@/components/PageHero'
import { getAboutPage } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About Anikesh',
  description: 'Anikesh Sasmal — founder of DesignSprintCo, ICG coach, design thinker, and the Wounded Healer. Melbourne-based, globally delivered.',
}

export default function AboutPage() {
  const about = getAboutPage()

  return (
    <>
      <PageHero
        tag={about.sectionTag}
        title={about.headline.join(' ')}
        accentWord="Lived It."
      />

      {/* ABOUT */}
      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-avatar">{about.founderInitials}</div>
              <div className="about-name">{about.founderName}</div>
              <div className="about-role">{about.founderRole}</div>
              <div className="divider" />
              <div className="about-chips">
                {about.chips.map(c => <span key={c} className="chip">{c}</span>)}
              </div>
            </div>
            <div>
              {about.paragraphs.map((p, i) => (
                <p key={i} className="about-p">{p}</p>
              ))}
              <div className="values">
                {about.values.map(v => (
                  <div key={v.title} className="val-row">
                    <div className="val-icon">{v.icon}</div>
                    <div className="val-body">
                      <h4>{v.title}</h4>
                      <p>{v.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* BRAND VOICE */}
      <section style={{ background: 'var(--deep)' }}>
        <AnimateIn>
          <div className="s-tag">Brand Voice</div>
          <h2 className="s-title">How We Show Up</h2>
          <p className="s-sub">Three words define everything we say, how we say it, and the energy we bring into every room and conversation.</p>
        </AnimateIn>
        <AnimateIn>
          <div className="voice-grid">
            {about.voiceWords.map(v => (
              <div key={v.word} className="voice-card">
                <div className="voice-word">{v.word}</div>
                <p className="voice-desc">{v.description}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
