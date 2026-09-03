import React from 'react'
import { business } from '@/data/businessInfo'
import styles from './MapEmbed.module.css'

export function MapEmbed() {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={business.googleMapsEmbed}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${business.name} — ${business.address.full}`}
        className={styles.iframe}
      />
    </div>
  )
}
export default MapEmbed
