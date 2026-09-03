import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { business } from '@/data/businessInfo'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import styles from './Hero.module.css'

const slides = [
  {
    id: 1,
    title: 'Available Services',
    dots: ['#FF5F57', '#FEBC2E', '#28C840'],
    items: [
      { icon: '🖥️', label: 'Desktop Repair' },
      { icon: '💻', label: 'Laptop Repair' },
      { icon: '🔩', label: 'Hardware Upgrade' },
      { icon: '💾', label: 'Windows Install' },
      { icon: '⚙️', label: 'Custom PC Build' },
    ]
  },
  {
    id: 2,
    title: 'CCTV Services',
    dots: ['#0EA5E9', '#38BDF8', '#7DD3FC'],
    items: [
      { icon: '📹', label: 'CCTV Installation' },
      { icon: '🎥', label: 'IP Cameras Setup' },
      { icon: '📼', label: 'DVR/NVR Config' },
      { icon: '🔧', label: 'Maintenance & Repair' },
      { icon: '📱', label: 'Mobile View Setup' },
    ]
  },
  {
    id: 3,
    title: 'Bulk Orders (B2B)',
    dots: ['#8B5CF6', '#A78BFA', '#C4B5FD'],
    items: [
      { icon: '🏢', label: 'Office Setup' },
      { icon: '🏫', label: 'Schools & Colleges' },
      { icon: '💻', label: 'Bulk Laptops' },
      { icon: '🖥️', label: 'Bulk Desktops' },
      { icon: '🖨️', label: 'Bulk Printers' },
    ]
  },
  {
    id: 4,
    title: 'Printers & More',
    dots: ['#F59E0B', '#FBBF24', '#FDE68A'],
    items: [
      { icon: '🖨️', label: 'Printer Repair' },
      { icon: '💧', label: 'Ink & Toner Refill' },
      { icon: '🌐', label: 'Networking Setup' },
      { icon: '🔌', label: 'Accessories' },
      { icon: '🛡️', label: 'Antivirus' },
    ]
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero} aria-label="Welcome to Shri Sai Computer Palace">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgPattern} />
        <div className={styles.bgGradient} />
      </div>
      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.badge}>📍 Kumta, Karnataka — Trusted Computer Service Center</span>
          <h1 className={styles.headline}>
            Your Trusted
            <span className={styles.highlight}> Computer Service</span>
            <br />Center in Kumta
          </h1>
          <p className={styles.sub}>
            Sales, repair, upgrades, and complete computer services — all at one place.
            Serving Kumta and surrounding areas with professional, honest service.
          </p>
          <div className={styles.actions}>
            <a
              href={`tel:${business.phoneRaw}`}
              className={styles.btnCall}
              aria-label={`Call us: ${business.phone}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.66A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call Now
            </a>
            <a
              href={buildWhatsAppUrl('Hello, I need help with my computer.')}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWa}
              aria-label="Chat on WhatsApp"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            WhatsApp Us
          </a>
          <Link to="/contact" className={styles.btnQuote}>
            Get a Quotation
          </Link>
        </div>
        <div className={styles.trustBar}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔧</span>
            <span>All Brands Serviced</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span>Fast Turnaround</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✅</span>
            <span>Honest Pricing</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span>Kumta, Karnataka</span>
          </div>
        </div>
      </motion.div>

      {/* Carousel info card */}
      <motion.div
        className={styles.visual}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        aria-hidden="true"
      >
        <div className={styles.carouselContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={styles.visualCard}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.cardHeader}>
                {slides[currentSlide].dots.map((dotColor, i) => (
                  <div key={i} className={styles.dot} style={{ background: dotColor }} />
                ))}
                <span className={styles.cardTitle}>{slides[currentSlide].title}</span>
              </div>
              <div className={styles.cardBody}>
                {slides[currentSlide].items.map(({ icon, label }) => (
                  <div key={label} className={styles.serviceRow}>
                    <span>{icon} {label}</span>
                    <span className={styles.statusBadge}>Available</span>
                  </div>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.openBadge}>🟢 Open Mon–Sat · 10 AM – 8 PM</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default Hero
