import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { testimonials } from '@/data/testimonials'
import { business } from '@/data/businessInfo'
import styles from './TestimonialsPreview.module.css'

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3)
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="What Our Customers Say" subtitle="Hear from people who have brought their computers to us for repairs and services." />
        <div className={styles.grid}>
          {preview.map((t, i) => (
            <motion.div key={t.id} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <StarRating rating={t.rating} />
              <blockquote className={styles.quote}><p>&#8220;{t.text}&#8221;</p></blockquote>
              <footer className={styles.reviewer}>
                <div className={styles.avatar} aria-hidden="true">{t.name.charAt(0)}</div>
                <div>
                  <div className={styles.reviewerName}>{t.name}</div>
                  <div className={styles.reviewerMeta}>{t.location} &middot; {t.service}</div>
                </div>
              </footer>
            </motion.div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link to="/testimonials" className={styles.moreBtn}>Read All Reviews</Link>
          <a href={business.googleBusiness} target="_blank" rel="noopener noreferrer" className={styles.googleBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" /></svg>
            View on Google Business
          </a>
        </div>
      </div>
    </section>
  )
}
export default TestimonialsPreview
