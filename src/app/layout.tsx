import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getSettings } from '@/lib/content'

export const metadata: Metadata = {
  title: { default: 'DesignSprintCo — Transforming Life, One Sprint at a Time', template: '%s | DesignSprintCo' },
  description: 'Career transformation coaching for mid-career professionals. Built on design thinking, lived experience, and championship energy. Melbourne & Remote.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = getSettings()
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  )
}
