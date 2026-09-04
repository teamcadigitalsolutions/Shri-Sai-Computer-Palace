import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './StatsStrip.module.css'

const stats = [
  { value: 500,  suffix: '+', label: 'Devices Repaired',    icon: '🔧' },
  { value: 10,   suffix: '+', label: 'Years Serving Kumta', icon: '📅' },
  { value: 12,   suffix: '',  label: 'Service Categories',  icon: '🛠️' },
  { value: 6,    suffix: '',  label: 'Days a Week Open',    icon: '🕐' },
]

function CountUp({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export function StatsStrip() {
  return (
    <section className={styles.strip} aria-label="Our achievements and trust stats">
      <div className={`container ${styles.inner}`}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className={styles.stat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
          >
            <span className={styles.statIcon} aria-hidden="true">{s.icon}</span>
            <div className={styles.statValue}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div className={styles.statLabel}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsStrip
