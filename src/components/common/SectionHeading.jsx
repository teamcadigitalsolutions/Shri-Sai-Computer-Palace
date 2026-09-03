import React from 'react'
import styles from './SectionHeading.module.css'

export function SectionHeading({ title, subtitle, align = 'center', titleAs: TitleTag = 'h2', className = '' }) {
  return (
    <div className={[styles.wrapper, styles[`align--${align}`], className].filter(Boolean).join(' ')}>
      <TitleTag className={styles.title}>{title}</TitleTag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.divider} aria-hidden="true" />
    </div>
  )
}
export default SectionHeading
