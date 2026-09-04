import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { business } from '@/data/businessInfo'
import styles from './TestimonialsPreview.module.css'

const AUTO_MS = 5000

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

const quoteIcon = (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M9.5 20c0-3.3 2.7-6 6-6V8c-6.6 0-12 5.4-12 12v8h12v-8H9.5zm17 0c0-3.3 2.7-6 6-6V8c-6.6 0-12 5.4-12 12v8h12v-8h-6z" fill="currentColor" opacity=".12"/>
  </svg>
)

export function TestimonialsPreview() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(p => (p + 1) % testimonials.length)
  }, [])
  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(p => (p - 1 + testimonials.length) % testimonials.length)
  }, [])
  const goTo = useCallback((i) => {
    setDirection(i > current ? 1 : -1)
    setCurrent(i)
  }, [current])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, AUTO_MS)
    return () => clearInterval(timerRef.current)
  }, [paused, next])

  const variants = {
    enter: d => ({ x: d > 0 ? '60%' : '-60%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  d => ({ x: d > 0 ? '-60%' : '60%', opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section className="section" aria-label="Customer testimonials">
      <div className="container">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Hear from people who trust Shri Sai Computer Palace for their computer needs."
        />

        <div
          className={styles.carouselWrap}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Prev/Next arrows */}
          <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous testimonial">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next testimonial">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* Slider */}
          <div className={styles.slider} aria-live="polite">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.25,0.46,0.45,0.94] }}
                className={styles.card}
              >
                <div className={styles.quoteIcon} aria-hidden="true">
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <text x="2" y="36" fontSize="52" fill="var(--color-primary)" opacity=".15" fontFamily="Georgia,serif">"</text>
                  </svg>
                </div>
                <StarRating rating={t.rating} />
                <blockquote className={styles.quote}>
                  <p>"{t.text}"</p>
                </blockquote>
                <footer className={styles.reviewer}>
                  <div className={styles.avatar} aria-hidden="true">{t.name.charAt(0)}</div>
                  <div>
                    <div className={styles.reviewerName}>{t.name}</div>
                    <div className={styles.reviewerMeta}>{t.location} · {t.service}</div>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className={styles.dots} role="tablist" aria-label="Testimonial indicators">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Testimonial ${i + 1}`}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar} aria-hidden="true">
          {!paused && (
            <motion.div
              key={`${current}-p`}
              className={styles.progressFill}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: AUTO_MS / 1000, ease: 'linear' }}
            />
          )}
        </div>

        {/* CTAs */}
        <div className={styles.ctaRow}>
          <Link to="/testimonials" className={styles.moreBtn}>Read All Reviews</Link>
          <a href={business.googleBusiness} target="_blank" rel="noopener noreferrer" className={styles.googleBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
            </svg>
            View on Google Business
          </a>
        </div>
      </div>
    </section>
  )
}
export default TestimonialsPreview
