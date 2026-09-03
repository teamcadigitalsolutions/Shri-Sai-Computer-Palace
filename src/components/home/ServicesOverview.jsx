import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/common/SectionHeading'
import { services } from '@/data/services'
import { business } from '@/data/businessInfo'
import styles from './ServicesOverview.module.css'

const featuredServices = services.filter(s => s.featured)

export function ServicesOverview() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading title="Our Services" subtitle="From basic repairs to complete custom PC builds — we cover all your computer needs." />
        <div className={styles.grid}>
          {featuredServices.map((service, i) => (
            <motion.div key={service.id} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
              <a href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(service.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className={styles.ctaLink} aria-label={`WhatsApp about ${service.title}`}>
                Enquire via WhatsApp →
              </a>
            </motion.div>
          ))}
        </div>
        <div className={styles.allLink}>
          <Link to="/services" className={styles.allBtn}>View All 10 Services</Link>
        </div>
      </div>
    </section>
  )
}
export default ServicesOverview
