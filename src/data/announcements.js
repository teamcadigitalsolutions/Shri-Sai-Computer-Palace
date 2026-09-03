/**
 * announcements.js — Promotional top-bar messages for Shri Sai Computer Palace
 *
 * HOW TO USE:
 * - Set `enabled: true` to activate an announcement, `false` to hide it.
 * - `type` controls the color: 'promo' (blue), 'offer' (green), 'urgent' (red), 'info' (grey)
 * - Only the FIRST enabled announcement will show.
 * - Change text anytime without touching any component code!
 *
 * EXAMPLES:
 *   { id: 1, enabled: true, icon: '🎉', type: 'promo', message: 'Diwali Special! 20% off on all CCTV Installations — Limited time.' }
 *   { id: 2, enabled: true, icon: '🛡️', type: 'offer', message: 'Free Antivirus with every Laptop Repair this month!' }
 *   { id: 3, enabled: true, icon: '🔥', type: 'urgent', message: 'Hurry! Back-to-School PC & Laptop Deals — Only this week.' }
 */

export const announcements = [
  {
    id: 1,
    enabled: true,
    icon: '🎉',
    type: 'promo', // 'promo' | 'offer' | 'urgent' | 'info'
    message: 'Diwali Special! Free Antivirus + PC Cleaning with every Laptop Repair this month.',
    ctaText: 'Book Now',           // Optional. Leave empty string '' to hide button.
    ctaLink: '/contact',           // Internal path or full URL
    ctaWhatsApp: true,             // If true, CTA opens WhatsApp instead of ctaLink
    whatsAppMessage: 'Hello, I saw your Diwali Special offer and want to book a laptop repair!',
  },
  {
    id: 2,
    enabled: false,
    icon: '📹',
    type: 'offer',
    message: 'CCTV Installation starting at just ₹3,999! Schools & offices get bulk pricing.',
    ctaText: 'Get Quote',
    ctaLink: '/contact',
    ctaWhatsApp: true,
    whatsAppMessage: 'Hello, I am interested in CCTV installation. Please share details.',
  },
  {
    id: 3,
    enabled: false,
    icon: '🔥',
    type: 'urgent',
    message: 'Back-to-School Sale! Special pricing on laptops for students — this week only.',
    ctaText: 'View Deals',
    ctaLink: '/services',
    ctaWhatsApp: false,
    whatsAppMessage: '',
  },
  {
    id: 4,
    enabled: false,
    icon: '💡',
    type: 'info',
    message: 'We are now open on Sundays! Visit us 11 AM – 6 PM at Kumta.',
    ctaText: '',
    ctaLink: '',
    ctaWhatsApp: false,
    whatsAppMessage: '',
  },
]

export default announcements
