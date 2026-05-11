import Link from 'next/link'
import type { SiteSettings } from '@/lib/types'

export default function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer>
      <div className="ft-grid">
        <div>
          <Link href="/" className="ft-logo">Design<em>Sprint</em><span>Co</span></Link>
          <div className="ft-tagline">"{settings.tagline}"</div>
          <p className="ft-desc">Career transformation coaching built on design thinking, lived experience, and championship energy.</p>
        </div>
        <div className="ft-col">
          <h5>Programs</h5>
          <ul>
            <li><Link href="/reclaim-sprint">The Reclaim Sprint</Link></li>
            <li><Link href="/framework">Our Framework</Link></li>
            <li><Link href="/contact">Corporate Coaching</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Company</h5>
          <ul>
            <li><Link href="/about">About Anikesh</Link></li>
            <li><Link href="/testimonials">Client Results</Link></li>
            <li><Link href="/blog">Insights</Link></li>
          </ul>
        </div>
        <div className="ft-col">
          <h5>Connect</h5>
          <ul>
            <li><Link href="/contact">Book a Call</Link></li>
            <li><a href={settings.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href={settings.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href={`https://${settings.website}`} target="_blank" rel="noopener noreferrer">Live Site</a></li>
          </ul>
        </div>
      </div>
      <div className="ft-bottom">
        <p>{settings.copyright} · {settings.website}</p>
        <p>{settings.location}</p>
      </div>
    </footer>
  )
}
