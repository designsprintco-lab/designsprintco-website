import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { getSettings } from '@/lib/content'

export const metadata: Metadata = {
  title: { default: 'DesignSprintCo — Transforming Life, One Sprint at a Time', template: '%s | DesignSprintCo' },
  description: 'Career transformation coaching for mid-career professionals. Built on design thinking, lived experience, and championship energy. Melbourne & Remote.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
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
