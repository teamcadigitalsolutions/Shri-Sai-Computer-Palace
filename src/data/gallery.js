/**
 * gallery.js — Image gallery data for Shri Sai Computer Palace
 *
 * ★ HOW TO ADD PHOTOS:
 *   1. Place image files in /public/gallery/
 *   2. Add entries to the array below
 *   3. The GalleryGrid component will automatically render them
 *
 * Example entry:
 * {
 *   id: 1,
 *   src: '/gallery/shop-front.jpg',
 *   alt: 'Shri Sai Computer Palace shop front, Kumta',
 *   category: 'shop',        // 'shop' | 'products' | 'repairs' | 'team'
 *   caption: 'Our shop at K V Shetty Complex, Kumta',
 * }
 *
 * Categories:
 *   'shop'     — Shop exterior and interior
 *   'products' — Computers, laptops, accessories on display
 *   'repairs'  — Repair work in progress
 *   'team'     — Team/staff photos
 */

export const galleryCategories = [
  { id: 'all',      label: 'All Photos' },
  { id: 'shop',     label: 'Our Shop' },
  { id: 'products', label: 'Products' },
  { id: 'repairs',  label: 'Repairs' },
  { id: 'team',     label: 'Team' },
]

// ★ Add your images here — currently empty (gallery shows placeholder)
export const galleryImages = []

export default galleryImages
