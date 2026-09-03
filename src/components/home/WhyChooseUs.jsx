import React from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import styles from './WhyChooseUs.module.css'

const reasons = [
  { icon: '🔍', title: 'Honest Diagnosis', desc: 'We explain the problem clearly before starting any work. No unnecessary repairs, no hidden fees.' },
  { icon: '💰', title: 'Fair & Transparent Pricing', desc: 'Upfront quotes that you agree to before we begin. What we quote is what you pay.' },
  { icon: '🔧', title: 'Skilled Technicians', desc: 'Experienced in servicing and repairing all major computer and laptop brands — hardware and software.' },
  { icon: '⚡', title: 'Quick Turnaround', desc: 'We understand your time matters. Common repairs handled efficiently without compromising quality.' },
  { icon: '📍', title: 'Conveniently Located', desc: 'Right at Old Bus Stand Road, Kumta — easy to reach for residents across Kumta and nearby areas.' },
  { icon: '🤝', title: 'After-Service Support', desc: "We stand behind our work. If something isn't right after repair, we're here to help." },
]

export function WhyChooseUs() {
  return (
    <section className={`section section--alt ${styles.section}`}>
      <div className="container">
        <SectionHeading title="Why Choose Shri Sai Computer Palace?" subtitle="We believe in doing the job right — with honesty, skill, and care for every customer." />
        <div className={styles.grid}>
          {reasons.map(({ icon, title, desc }, i) => (
            <motion.div key={title} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.07 }}>
              <div className={styles.iconWrap} aria-hidden="true"><span className={styles.icon}>{icon}</span></div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default WhyChooseUs
