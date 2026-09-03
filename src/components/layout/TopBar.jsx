import React, { useState, useRef, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { announcements } from '@/data/announcements'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import styles from './TopBar.module.css'

export function TopBar() {
  const [dismissed, setDismissed] = useState(false)
  const barRef = useRef(null)

  // Set --topbar-height CSS variable so the fixed Header can offset itself
  useLayoutEffect(() => {
    const update = () => {
      const h = barRef.current ? barRef.current.offsetHeight : 0
      document.documentElement.style.setProperty('--topbar-height', `${h}px`)
    }
    update()
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('resize', update)
      document.documentElement.style.setProperty('--topbar-height', '0px')
    }
  }, [dismissed])

  // Pick the first active announcement
  const active = announcements.find((a) => a.enabled)

  if (!active || dismissed) return null

  const hasCta = active.ctaText && (active.ctaLink || active.ctaWhatsApp)
  const ctaHref = active.ctaWhatsApp
    ? buildWhatsAppUrl(active.whatsAppMessage)
    : active.ctaLink

  return (
    <div
      ref={barRef}
      className={`${styles.topbar} ${styles[`type--${active.type}`]}`}
    >
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          {active.icon && <span className={styles.icon}>{active.icon}</span>}
          {active.message}
          {hasCta && (
            active.ctaWhatsApp ? (
              <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                {active.ctaText} →
              </a>
            ) : (
              <Link to={ctaHref} className={styles.cta}>
                {active.ctaText} →
              </Link>
            )
          )}
        </p>
        <button
          onClick={() => setDismissed(true)}
          className={styles.closeBtn}
          aria-label="Dismiss announcement"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

export default TopBar
