import React from 'react'
import { Link } from 'react-router-dom'
import { business } from '@/data/businessInfo'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        {/* Col 1: Business Info */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>{business.name}</h3>
          <p className={styles.tagline}>{business.tagline}</p>
          <address className={styles.address}>
            <p>{business.address.line1},</p>
            <p>{business.address.line2},</p>
            <p>{business.address.city}, {business.address.state} {business.address.pincode}</p>
          </address>
          <div className={styles.contactLinks}>
            <a href={`tel:${business.phoneRaw}`} className={styles.contactLink}>
              📞 {business.phone}
            </a>
            {business.email && (
              <a href={`mailto:${business.email}`} className={styles.contactLink}>
                ✉️ {business.email}
              </a>
            )}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Get Quotation</Link></li>
          </ul>
        </div>

        {/* Col 3: Business Hours */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Business Hours</h3>
          <ul className={styles.hoursList}>
            {business.hours.map((h) => (
              <li key={h.day} className={styles.hoursRow}>
                <span className={styles.hoursDay}>{h.day}</span>
                <span className={h.closed ? styles.hoursClosed : styles.hoursTime}>
                  {h.closed ? 'Closed' : `${h.open} – ${h.close}`}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Connect */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Connect With Us</h3>
          <div className={styles.socialLinks}>
            <a
              href={business.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="View us on Google Business"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
              </svg>
              Google Business
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Follow us on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
          <div className={styles.waBlock}>
            <p className={styles.waText}>Quick support on WhatsApp:</p>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waBtn}
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <p>© {currentYear} {business.name}. All rights reserved.</p>
          <p className={styles.credit}>
            Developed by{' '}
            <a href="https://teamca.in/" target="_blank" rel="noopener noreferrer" className={styles.creditLink}>
              teamca.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
