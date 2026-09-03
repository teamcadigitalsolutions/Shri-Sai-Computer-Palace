import React from 'react'
import styles from './GalleryPlaceholder.module.css'

export function GalleryPlaceholder() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.iconArea} aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </div>
        <h2 className={styles.title}>Photos Coming Soon</h2>
        <p className={styles.desc}>
          We are putting together our photo gallery — shop photos, product displays,
          and work in progress. Check back soon!
        </p>
        <p className={styles.hint}>
          In the meantime, visit our{' '}
          <a href="https://www.instagram.com/shrisaicomputerpalace/" target="_blank" rel="noopener noreferrer">
            Instagram page
          </a>{' '}
          for the latest photos.
        </p>
      </div>
    </div>
  )
}
export default GalleryPlaceholder
