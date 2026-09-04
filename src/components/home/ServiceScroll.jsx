import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './ServiceScroll.module.css'

const categories = [
  { icon: '💻', label: 'Laptops & PCs',    href: '/services' },
  { icon: '🔧', label: 'Laptop Repair',    href: '/services' },
  { icon: '🖥️', label: 'Desktop Repair',   href: '/services' },
  { icon: '⚙️', label: 'Custom PC Build',  href: '/services' },
  { icon: '📹', label: 'CCTV Setup',       href: '/services' },
  { icon: '🖨️', label: 'Printers',         href: '/services' },
  { icon: '⚡', label: 'Upgrades',          href: '/services' },
  { icon: '💿', label: 'OS & Software',    href: '/services' },
  { icon: '🌐', label: 'Networking',        href: '/services' },
  { icon: '🏢', label: 'AMC & B2B',        href: '/services' },
  { icon: '🖱️', label: 'Accessories',      href: '/services' },
  { icon: '📁', label: 'Data Recovery',    href: '/services' },
]

export function ServiceScroll() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir * 220, behavior: 'smooth' })
  }

  return (
    <section className={styles.section} aria-label="Browse services by category">
      <div className={styles.header}>
        <div className="container">
          <h2 className={styles.heading}>
            <span className={styles.accent}>Browse</span> Our Services
          </h2>
        </div>
      </div>

      <div className={styles.scrollWrapper}>
        {/* Left arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>

        {/* Scrollable track */}
        <div className={styles.track} ref={trackRef} role="list">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              role="listitem"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <Link to={cat.href} className={styles.card} aria-label={`${cat.label} service`}>
                <span className={styles.iconWrap} aria-hidden="true">{cat.icon}</span>
                <span className={styles.label}>{cat.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll(1)}
          aria-label="Scroll right"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
    </section>
  )
}

export default ServiceScroll
