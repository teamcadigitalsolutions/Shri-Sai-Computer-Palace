import React from 'react'
import styles from './BrandsStrip.module.css'

const brands = [
  'HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Apple',
  'Canon', 'Epson', 'Brother', 'Intel', 'AMD', 'Samsung',
  'MSI', 'Gigabyte', 'Seagate', 'WD', 'LG', 'BenQ',
]

export function BrandsStrip() {
  return (
    <section className={styles.strip} aria-label="Brands we service and sell">
      <div className={styles.heading}>
        <span className={styles.line} aria-hidden="true" />
        <span className={styles.label}>Brands We Service &amp; Sell</span>
        <span className={styles.line} aria-hidden="true" />
      </div>

      <div className={styles.marqueeOuter} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className={styles.pill}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsStrip
