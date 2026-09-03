import React from 'react'
import { business } from '@/data/businessInfo'
import styles from './BusinessHours.module.css'

export function BusinessHours() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>🕐 Business Hours</h3>
      <ul className={styles.list}>
        {business.hours.map(h => (
          <li key={h.day} className={[styles.row, h.day === today ? styles.today : ''].join(' ')}>
            <span className={styles.day}>{h.day}{h.day === today && <span className={styles.todayBadge}>Today</span>}</span>
            <span className={h.closed ? styles.closed : styles.time}>{h.closed ? 'Closed' : `${h.open} – ${h.close}`}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default BusinessHours
