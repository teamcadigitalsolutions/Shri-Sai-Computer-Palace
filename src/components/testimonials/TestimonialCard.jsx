import React from 'react'
import { motion } from 'framer-motion'
import styles from './TestimonialCard.module.css'

function StarRating({ rating }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <StarRating rating={testimonial.rating} />
      <blockquote className={styles.quote}>
        <p>&#8220;{testimonial.text}&#8221;</p>
      </blockquote>
      <footer className={styles.footer}>
        <div className={styles.avatar} aria-hidden="true">{testimonial.name.charAt(0)}</div>
        <div>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.meta}>{testimonial.location} &middot; {testimonial.service}</div>
        </div>
      </footer>
    </motion.article>
  )
}
export default TestimonialCard
