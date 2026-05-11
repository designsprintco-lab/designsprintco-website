'use client'
import { useState } from 'react'
import type { ContactContent } from '@/lib/types'

export default function ContactForm({ content }: { content: ContactContent }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', interest: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function update(k: string, v: string) {
    setForm(f => ({ ...f, [k]: v }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: content.web3formsKey,
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          subject: `Discovery Call Request: ${form.interest}`,
          message: form.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-form-box">
        <div className="form-success">
          <h3>Thank you!</h3>
          <p>Anikesh will be in touch within 24 hours to schedule your discovery call.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-box">
      <div className="form-title">{content.formTitle}</div>
      <div className="form-sub">{content.formSubtitle}</div>
      <form onSubmit={submit}>
        <div className="form-row">
          <div className="fg">
            <label>First Name</label>
            <input type="text" placeholder="Anikesh" required value={form.firstName} onChange={e => update('firstName', e.target.value)} />
          </div>
          <div className="fg">
            <label>Last Name</label>
            <input type="text" placeholder="Sasmal" required value={form.lastName} onChange={e => update('lastName', e.target.value)} />
          </div>
        </div>
        <div className="fg">
          <label>Email Address</label>
          <input type="email" placeholder="you@company.com" required value={form.email} onChange={e => update('email', e.target.value)} />
        </div>
        <div className="fg">
          <label>I&apos;m interested in</label>
          <select required value={form.interest} onChange={e => update('interest', e.target.value)}>
            <option value="">Select an option...</option>
            {content.interestOptions.map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="fg">
          <label>What&apos;s your biggest challenge right now?</label>
          <textarea placeholder="Tell me where you're stuck and what you're hoping to change..." required value={form.message} onChange={e => update('message', e.target.value)} />
        </div>
        {status === 'error' && (
          <p style={{ color: 'var(--crimson)', fontSize: 13, marginBottom: 12 }}>
            Something went wrong. Please email us directly at {content.contactItems.find(i => i.label === 'Email')?.value}.
          </p>
        )}
        <button className="form-btn" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Book My Discovery Call →'}
        </button>
        <p className="form-note">{content.formNote}</p>
      </form>
    </div>
  )
}
