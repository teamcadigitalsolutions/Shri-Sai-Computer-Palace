import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './PromoCarousel.module.css'

const slides = [
  {
    id: 1,
    image: '/carousel/slide-poster1.png',
    alt: 'Shri Sai Computer Palace — Sales, Service and Solutions in Kumta Karnataka',
    tag: 'Sales & Service',
    headline: 'Computers, Laptops & Accessories',
    sub: 'Everything you need — under one roof in Kumta.',
    cta: { label: 'View Services', href: '/services', external: false },
  },
  {
    id: 2,
    image: '/carousel/slide-repair.jpg',
    alt: 'Expert laptop and desktop repair service in Kumta — Shri Sai Computer Palace',
    tag: 'Repair & Maintenance',
    headline: 'Expert Laptop & Desktop Repair',
    sub: 'Fast diagnosis. Same-day fixes. All brands serviced.',
    cta: { label: 'Book a Repair', href: '/contact', external: false },
  },
  {
    id: 3,
    image: '/carousel/slide-sales.jpg',
    alt: 'New laptops desktops and accessories available at Shri Sai Computer Palace Kumta',
    tag: 'New Arrivals',
    headline: 'Laptops, Desktops & Accessories',
    sub: 'Trusted brands. Best prices. In stock now.',
    cta: { label: 'Get a Quotation', href: '/contact', external: false },
  },
  {
    id: 4,
    image: '/carousel/slide-cctv-pc.jpg',
    alt: 'CCTV installation and custom PC builds in Kumta Karnataka',
    tag: 'CCTV & Custom Builds',
    headline: 'CCTV Installation & Custom PC Builds',
    sub: 'Secure your space. Build your dream PC. We handle it all.',
    cta: { label: 'WhatsApp Us', href: 'https://wa.me/919901161204?text=Hello%2C%20I%20need%20help%20with%20my%20computer.', external: true },
  },
  {
    id: 5,
    image: '/carousel/slide-poster2.png',
    alt: 'Ganesh Chaturthi special offers on computers laptops and accessories at Shri Sai Computer Palace',
    tag: 'Festive Offers',
    headline: 'Special Festival Discounts',
    sub: 'Celebrate with the best deals on computers and accessories.',
    cta: { label: 'Call Now', href: 'tel:+919901161204', external: false },
  },
]

const AUTO_PLAY_MS = 5000

export function PromoCarousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((index, dir) => {
    const d = dir !== undefined ? dir : 1
    setDirection(d)
    setCurrent(((index % slides.length) + slides.length) % slides.length)
  }, [])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, AUTO_PLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, next])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev])

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  }

  const slide = slides[current]

  return (
    <section
      className={styles.carousel}
      aria-label="Promotions and services carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.track} aria-live="polite">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={slide.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={styles.slide}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={styles.bgImg}
              loading="lazy"
              draggable={false}
            />
            <div className={styles.overlay} aria-hidden="true" />
            <motion.div
              className={styles.textOverlay}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className={styles.tag}>{slide.tag}</span>
              <h2 className={styles.headline}>{slide.headline}</h2>
              <p className={styles.sub}>{slide.sub}</p>
              <a
                href={slide.cta.href}
                className={styles.ctaBtn}
                target={slide.cta.external ? '_blank' : undefined}
                rel={slide.cta.external ? 'noopener noreferrer' : undefined}
              >
                {slide.cta.label}
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className={styles.dots} role="tablist" aria-label="Slide indicators">
        {slides.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}: ${s.tag}`}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i, i > current ? 1 : -1)}
          />
        ))}
      </div>

      <div className={styles.progressBar} aria-hidden="true">
        {!paused && (
          <motion.div
            key={`${current}-progress`}
            className={styles.progressFill}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: AUTO_PLAY_MS / 1000, ease: 'linear' }}
          />
        )}
      </div>
    </section>
  )
}

export default PromoCarousel
