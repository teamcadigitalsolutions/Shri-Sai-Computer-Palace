import React from 'react'
import { Link } from 'react-router-dom'
import { SectionHeading } from '@/components/common/SectionHeading'
import { business } from '@/data/businessInfo'
import styles from './LocationSection.module.css'

export function LocationSection() {
  return (
    <section className={`section section--alt ${styles.location}`}>
      <div className="container">
        <SectionHeading title="Find Us in Kumta" subtitle="Visit us at our shop, or get in touch via call or WhatsApp — we're always ready to help." />
        <div className={styles.grid}>
          <div className={styles.mapWrap}>
            <iframe src={business.googleMapsEmbed} width="100%" height="100%" style={{ border: 0, minHeight: '360px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Map showing ${business.name} in Kumta, Karnataka`} />
          </div>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>📍 Address</h3>
              <address className={styles.address}>
                <strong>{business.name}</strong><br />
                {business.address.line1},<br />
                {business.address.line2},<br />
                {business.address.city}, {business.address.state} {business.address.pincode}
              </address>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>📞 Contact</h3>
              <div className={styles.contactItems}>
                <a href={`tel:${business.phoneRaw}`} className={styles.contactItem}>📞 Call: {business.phone}</a>
                <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.contactItem}>💬 WhatsApp: {business.phone}</a>
              </div>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>🕐 Business Hours</h3>
              <ul className={styles.hoursList}>
                {business.hours.map(h => (
                  <li key={h.day} className={styles.hoursRow}>
                    <span className={styles.day}>{h.day}</span>
                    <span className={h.closed ? styles.closed : styles.time}>{h.closed ? 'Closed' : `${h.open} – ${h.close}`}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/contact" className={styles.bookBtn}>Book a Service →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LocationSection
