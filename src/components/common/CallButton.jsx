import React from 'react'
import { business } from '@/data/businessInfo'
import styles from './CallButton.module.css'

export function CallButton({ label = 'Call Now', size = 'md', fullWidth = false, className = '' }) {
  return (
    <a href={`tel:${business.phoneRaw}`}
      className={[styles.btn, styles[`btn--${size}`], fullWidth ? styles['btn--full'] : '', className].filter(Boolean).join(' ')}
      aria-label={`Call ${business.name}: ${business.phone}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
      {label}
    </a>
  )
}
export default CallButton
