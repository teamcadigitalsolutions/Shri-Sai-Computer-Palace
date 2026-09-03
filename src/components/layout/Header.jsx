import React, { useState, useEffect, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { business } from '@/data/businessInfo'
import styles from './Header.module.css'

const NAV_LINKS = [
  { to: '/',             label: 'Home' },
  { to: '/services',     label: 'Services' },
  { to: '/gallery',      label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact',      label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), [])

  return (
    <>
      <header className={[styles.header, scrolled ? styles.scrolled : ''].join(' ')}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label={`${business.name} — Home`}>
            <div className={styles.logoMark} aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="9" fill="var(--color-primary)" />
                <rect x="7" y="9" width="22" height="14" rx="2" stroke="white" strokeWidth="2" fill="none" />
                <rect x="11" y="24" width="14" height="2.5" rx="1.25" fill="white" />
                <rect x="14.5" y="26.5" width="7" height="2" rx="1" fill="white" />
                <circle cx="18" cy="16" r="2" fill="white" opacity="0.7" />
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>{business.shortName}</span>
              <span className={styles.logoSub}>Kumta, Karnataka</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
                }
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
            <Link to="/contact" className={styles.navCta}>
              Get Quotation
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : ''].join(' ')}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Overlay + Nav rendered via portal to escape fixed header stacking context */}
      {createPortal(
        <>
          {menuOpen && (
            <div
              className={styles.overlay}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
          )}
          <nav
            id="mobile-menu"
            className={[styles.mobileNav, menuOpen ? styles.mobileNavOpen : ''].join(' ')}
            aria-label="Mobile navigation"
            aria-hidden={!menuOpen}
          >
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  [styles.mobileLink, isActive ? styles.mobileLinkActive : ''].join(' ')
                }
                end={to === '/'}
              >
                {label}
              </NavLink>
            ))}
            <div className={styles.mobileActions}>
              <a href={`tel:${business.phoneRaw}`} className={styles.mobileCall}>
                📞 {business.phone}
              </a>
              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mobileWhatsApp}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </nav>
        </>,
        document.body
      )}
    </>
  )
}

export default Header
