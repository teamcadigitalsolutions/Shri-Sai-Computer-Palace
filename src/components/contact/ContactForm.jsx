import React, { useState } from 'react'
import { submitContactForm } from '@/services/contactFormService'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import { services } from '@/data/services'
import styles from './ContactForm.module.css'

const initialState = { name: '', phone: '', email: '', service: '', message: '', preferredContact: 'whatsapp' }
const initialErrors = {}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.phone.trim()) { errors.phone = 'Phone number is required.' }
  else if (!/^[\d\s\+\-]{7,15}$/.test(form.phone.trim())) { errors.phone = 'Please enter a valid phone number.' }
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Please enter a valid email address.' }
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.message.trim()) errors.message = 'Please describe your issue or requirement.'
  return errors
}

export function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle')
  const [serverMsg, setServerMsg] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setStatus('loading')
    try {
      const result = await submitContactForm(form)
      if (result.success) {
        setStatus('success')
        setServerMsg(result.message)
        setForm(initialState)
      } else {
        setStatus('error')
        setServerMsg(result.message || 'Something went wrong. Please try calling or WhatsApp directly.')
      }
    } catch {
      setStatus('error')
      setServerMsg('Unable to submit. Please contact us directly via call or WhatsApp.')
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successBox} role="alert">
        <span className={styles.successIcon} aria-hidden="true">✅</span>
        <h3>Message Received!</h3>
        <p>{serverMsg}</p>
        <button className={styles.resetBtn} onClick={() => setStatus('idle')}>Send Another Message</button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate aria-label="Contact and service booking form">
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">Full Name <span aria-hidden="true" className={styles.required}>*</span></label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} className={[styles.input, errors.name ? styles.inputError : ''].join(' ')} placeholder="Your name" autoComplete="name" aria-required="true" aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className={styles.errorMsg} role="alert">{errors.name}</p>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">Phone Number <span aria-hidden="true" className={styles.required}>*</span></label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className={[styles.input, errors.phone ? styles.inputError : ''].join(' ')} placeholder="e.g. 099011 61204" autoComplete="tel" aria-required="true" aria-describedby={errors.phone ? 'phone-error' : undefined} />
          {errors.phone && <p id="phone-error" className={styles.errorMsg} role="alert">{errors.phone}</p>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">Email Address <span className={styles.optional}>(optional)</span></label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={[styles.input, errors.email ? styles.inputError : ''].join(' ')} placeholder="your@email.com" autoComplete="email" aria-describedby={errors.email ? 'email-error' : undefined} />
        {errors.email && <p id="email-error" className={styles.errorMsg} role="alert">{errors.email}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="service">Service Required <span aria-hidden="true" className={styles.required}>*</span></label>
        <select id="service" name="service" value={form.service} onChange={handleChange} className={[styles.select, errors.service ? styles.inputError : ''].join(' ')} aria-required="true" aria-describedby={errors.service ? 'service-error' : undefined}>
          <option value="">Select a service...</option>
          {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
          <option value="other">Other / General Enquiry</option>
        </select>
        {errors.service && <p id="service-error" className={styles.errorMsg} role="alert">{errors.service}</p>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">Problem Description / Message <span aria-hidden="true" className={styles.required}>*</span></label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} className={[styles.textarea, errors.message ? styles.inputError : ''].join(' ')} placeholder="Describe your issue or what you need help with..." rows={5} aria-required="true" aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p id="message-error" className={styles.errorMsg} role="alert">{errors.message}</p>}
      </div>

      <div className={styles.field}>
        <span className={styles.label}>Preferred Contact Method</span>
        <div className={styles.radioGroup} role="radiogroup" aria-label="Preferred contact method">
          {['whatsapp', 'call', 'email'].map(method => (
            <label key={method} className={styles.radioLabel}>
              <input type="radio" name="preferredContact" value={method} checked={form.preferredContact === method} onChange={handleChange} className={styles.radioInput} />
              <span className={styles.radioText}>{method === 'whatsapp' ? '💬 WhatsApp' : method === 'call' ? '📞 Call' : '✉️ Email'}</span>
            </label>
          ))}
        </div>
      </div>

      {status === 'error' && (
        <div className={styles.errorBox} role="alert">
          <strong>⚠️ Submission failed.</strong> {serverMsg}
        </div>
      )}

      <button type="submit" className={styles.submitBtn} disabled={status === 'loading'} aria-busy={status === 'loading'}>
        {status === 'loading' ? (
          <><span className={styles.spinner} aria-hidden="true" /> Sending...</>
        ) : ('Send Message')}
      </button>

      <p className={styles.disclaimer}>
        Or contact us directly:
        {' '}<a href="tel:+919901161204" className={styles.directLink}>📞 Call</a>
        {' · '}
        <a href={buildWhatsAppUrl('Hello, I need help with my computer.')} target="_blank" rel="noopener noreferrer" className={styles.directLink}>💬 WhatsApp</a>
      </p>
    </form>
  )
}
export default ContactForm
