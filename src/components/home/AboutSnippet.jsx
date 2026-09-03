import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import styles from './AboutSnippet.module.css'

const features = [
  { icon: '🛠️', title: 'Sales & Service', desc: 'Computers, laptops, accessories and full repair services for all brands.' },
  { icon: '⚡', title: 'Fast Repairs', desc: 'Most repairs diagnosed and resolved quickly — same-day service for common issues.' },
  { icon: '💰', title: 'Transparent Pricing', desc: 'Clear, upfront quotes before any work begins. No hidden charges.' },
  { icon: '📍', title: 'Local & Trusted', desc: 'A familiar face in Kumta — serving the local community with honest computer service.' },
]

export function AboutSnippet() {
  return (
    <section className={`section section--alt ${styles.about}`}>
      <div className="container">
        <SectionHeading title="About Shri Sai Computer Palace" subtitle="Your dependable computer sales and service center, right here in Kumta, Karnataka." />
        <div className={styles.grid}>
          <motion.div className={styles.textBlock} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }}>
            <p>Shri Sai Computer Palace has been serving individuals, students, professionals, and small businesses in Kumta and the surrounding Karnataka region. Located at K V Shetty Complex, Old Bus Stand Road — right opposite GMS Courier — we are easy to find and always ready to help.</p>
            <p>Whether you need your laptop repaired, a new computer purchased, Windows reinstalled, hardware upgraded, or a custom PC built to your exact requirements — we handle it all with skill and care.</p>
            <div className={styles.actions}>
              <Link to="/services" className={styles.btnPrimary}>View All Services</Link>
              <Link to="/contact" className={styles.btnSecondary}>Contact Us</Link>
            </div>
          </motion.div>
          <div className={styles.features}>
            {features.map(({ icon, title, desc }, i) => (
              <motion.div key={title} className={styles.featureCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <span className={styles.featureIcon} aria-hidden="true">{icon}</span>
                <div>
                  <h3 className={styles.featureTitle}>{title}</h3>
                  <p className={styles.featureDesc}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSnippet
