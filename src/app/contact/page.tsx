import type { Metadata } from 'next'
import AnimateIn from '@/components/AnimateIn'
import ContactForm from '@/components/ContactForm'
import { getContactPage } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Book a Discovery Call',
  description: 'Book your free 30-minute discovery call with Anikesh Sasmal — no obligation, just a genuine conversation about where you are and where you want to be.',
}

export default function ContactPage() {
  const content = getContactPage()

  return (
    <>
      <div className="page-hero bg-deep">
        <div className="s-tag">{content.sectionTag}</div>
        <h1>{content.headline[0]}<br /><span className="cr">{content.headline[1]}</span></h1>
        <p className="s-sub">{content.subtitle}</p>
      </div>

      <section style={{ background: 'var(--obsidian)' }}>
        <AnimateIn>
          <div className="contact-grid">
            <div>
              <div className="c-items">
                {content.contactItems.map(item => (
                  <div key={item.label} className="c-item">
                    <div className="c-icon">{item.icon}</div>
                    <div>
                      <div className="c-label">{item.label}</div>
                      <div className="c-val">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm content={content} />
          </div>
        </AnimateIn>
      </section>
    </>
  )
}
