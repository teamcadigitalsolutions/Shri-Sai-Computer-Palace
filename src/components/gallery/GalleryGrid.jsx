import React, { useState } from 'react'
import { galleryCategories } from '@/data/gallery'
import { GalleryPlaceholder } from './GalleryPlaceholder'
import styles from './GalleryGrid.module.css'

export function GalleryGrid({ images }) {
  const [activeCategory, setActiveCategory] = useState('all')

  if (!images || images.length === 0) {
    return <GalleryPlaceholder />
  }

  const filtered =
    activeCategory === 'all'
      ? images
      : images.filter(img => img.category === activeCategory)

  return (
    <div>
      {/* Category filter */}
      <div className={styles.filters} role="tablist" aria-label="Filter gallery by category">
        {galleryCategories.map(cat => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={[styles.filterBtn, activeCategory === cat.id ? styles.filterBtnActive : ''].join(' ')}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className={styles.empty}>No photos in this category yet.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map(img => (
            <figure key={img.id} className={styles.item}>
              <img
                src={img.src}
                alt={img.alt}
                className={styles.img}
                loading="lazy"
                decoding="async"
              />
              {img.caption && (
                <figcaption className={styles.caption}>{img.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </div>
  )
}
export default GalleryGrid
