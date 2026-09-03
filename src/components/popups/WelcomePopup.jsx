import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { business } from '@/data/businessInfo'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import styles from './WelcomePopup.module.css'

const SESSION_KEY = 'ssp_welcome_shown'

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(SESSION_KEY)
    if (!alreadyShown) {
      // Short delay so the page renders first
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem(SESSION_KEY, 'true')
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const close = useCallback(() => setIsOpen(false), [])

  function handleOption(option) {
    close()
    if (option.action === 'whatsapp' && option.message) {
      window.open(buildWhatsAppUrl(option.message), '_blank', 'noopener,noreferrer')
    } else if (option.action === 'route' && option.route) {
      navigate(option.route)
    }
  }

  if (!isOpen || !business.welcomePopup?.enabled) return null

  const { title, subtitle, options } = business.welcomePopup

  return (
    <div className={styles.backdrop} onClick={close} role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        {/* Close button */}
        <button className={styles.closeBtn} onClick={close} aria-label="Close welcome popup">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logoMark} aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 36 36" fill="none">
              <rect width="36" height="36" rx="9" fill="var(--color-primary)" />
              <rect x="7" y="9" width="22" height="14" rx="2" stroke="white" strokeWidth="2" fill="none" />
              <rect x="11" y="24" width="14" height="2.5" rx="1.25" fill="white" />
              <rect x="14.5" y="26.5" width="7" height="2" rx="1" fill="white" />
            </svg>
          </div>
          <h2 id="welcome-title" className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* Options */}
        <div className={styles.options}>
          {options.map((option) => (
            <button
              key={option.label}
              className={styles.optionBtn}
              onClick={() => handleOption(option)}
              aria-label={option.label}
            >
              <span className={styles.optionIcon} aria-hidden="true">{option.icon}</span>
              <span className={styles.optionLabel}>{option.label}</span>
              <svg className={styles.optionArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          ))}
        </div>

        <button className={styles.skipBtn} onClick={close}>
          Just browsing — skip for now
        </button>
      </div>
    </div>
  )
}

export default WelcomePopup
