'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/framework', label: 'Framework' },
  { href: '/true-self-unpack', label: 'The True Self Unpack' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Results' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav data-scrolled={scrolled.toString()}>
        <Link href="/" className="logo">
          Design<em>Sprint</em><span>Co</span>
        </Link>
        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={isActive(l.href) ? 'active' : ''}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="nav-cta">Book Discovery Call</Link>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map(l => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta" style={{ marginTop: 16, textAlign: 'center' }}>
          Book Discovery Call
        </Link>
      </div>
    </>
  )
}
