/**
 * businessInfo.js — SINGLE SOURCE OF TRUTH
 *
 * ★ REUSABILITY: To deploy this website system for a new client,
 *   edit ONLY this file (and services.js, testimonials.js, tokens.css).
 *   No component changes required for a basic client setup.
 */

export const business = {
  name: 'Shri Sai Computer Palace',
  shortName: 'Shri Sai Computer Palace',
  tagline: 'Your Trusted Computer Service Center in Kumta',
  description:
    'Shri Sai Computer Palace is Kumta\'s trusted destination for computer sales, laptop and desktop repair, Windows installation, hardware upgrades, custom PC builds, and complete computer servicing — all at one place.',

  // ── Contact ──────────────────────────────────────────────────────────────
  phone: '099011 61204',
  phoneRaw: '+919901161204',       // for tel: links
  whatsapp: '919901161204',        // for wa.me links (country code, no +)
  email: '',                       // add when available

  // ── Address ───────────────────────────────────────────────────────────────
  address: {
    line1: 'K V Shetty Complex',
    line2: 'Old Bus Stand Road, GMS Courier Opposite',
    city: 'Kumta',
    state: 'Karnataka',
    pincode: '581343',
    country: 'India',
    full: 'K V Shetty Complex, Old Bus Stand Road, GMS Courier opposite, Kumta, Karnataka 581343',
  },

  // ── Google Maps ───────────────────────────────────────────────────────────
  // Embed URL — replace with actual business embed from Google Maps → Share → Embed
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.9381620057816!2d74.41741898002077!3d14.430727250029884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc275de15ac497%3A0xf68ed93ba7efa02!2sShri%20Sai%20Computer%20Palace!5e0!3m2!1sen!2sin!4v1788458351196!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin',
  googleMapsLink: 'https://maps.app.goo.gl/ztzPBfnDhMxT6oQ89', // update with real link

  // ── Social ────────────────────────────────────────────────────────────────
  googleBusiness: 'https://share.google/RSAPpNyKpJArKnkEc',
  instagram: 'https://www.instagram.com/shrisaicomputerpalace/',
  facebook: '',   // add when available

  // ── Business Hours ────────────────────────────────────────────────────────
  hours: [
    { day: 'Monday',    open: '10:00 AM', close: '8:00 PM', closed: false },
    { day: 'Tuesday',   open: '10:00 AM', close: '8:00 PM', closed: false },
    { day: 'Wednesday', open: '10:00 AM', close: '8:00 PM', closed: false },
    { day: 'Thursday',  open: '10:00 AM', close: '8:00 PM', closed: false },
    { day: 'Friday',    open: '10:00 AM', close: '8:00 PM', closed: false },
    { day: 'Saturday',  open: '10:00 AM', close: '8:00 PM', closed: false },
    { day: 'Sunday',    open: null,       close: null,       closed: true  },
  ],

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    titleSuffix: 'Shri Sai Computer Palace — Kumta, Karnataka',
    defaultDescription:
      'Shri Sai Computer Palace — trusted computer sales, repair & service in Kumta, Karnataka. Laptop repair, desktop repair, custom PC builds, Windows installation, hardware upgrades.',
    keywords: [
      'computer service in Kumta',
      'computer repair in Kumta',
      'laptop repair in Kumta',
      'desktop repair in Kumta',
      'computer shop in Kumta',
      'computer sales in Kumta',
      'laptop service in Kumta',
      'PC repair Kumta',
      'computer accessories Kumta',
      'custom PC build Kumta',
      'computer service Karnataka',
      '581343',
    ],
    // LocalBusiness JSON-LD geo coordinates (approximate — update with exact coords)
    geo: { latitude: 14.4302, longitude: 74.4130 },
    ogImage: '/og-image.jpg', // place a 1200×630px image in /public/
  },

  // ── Popups (configurable per client) ─────────────────────────────────────
  welcomePopup: {
    enabled: true,
    title: 'Welcome to Shri Sai Computer Palace!',
    subtitle: 'What do you need help with today?',
    options: [
      {
        label: 'Computer / Laptop Repair',
        icon: '🔧',
        action: 'whatsapp',
        message: 'Hello, I need help with computer/laptop repair.',
        route: '/services',
      },
      {
        label: 'Buy a Computer / Laptop',
        icon: '🖥️',
        action: 'whatsapp',
        message: 'Hello, I am interested in buying a computer/laptop.',
        route: '/services',
      },
      {
        label: 'Build a Custom PC',
        icon: '⚙️',
        action: 'whatsapp',
        message: 'Hello, I want to build a custom PC. Can you help?',
        route: '/services',
      },
      {
        label: 'Software / Windows Help',
        icon: '💾',
        action: 'whatsapp',
        message: 'Hello, I need help with software or Windows installation.',
        route: '/services',
      },
      {
        label: 'Get a Quotation',
        icon: '📋',
        action: 'whatsapp',
        message: 'Hello, I would like to get a quotation.',
        route: '/contact',
      },
      {
        label: 'Contact Us',
        icon: '📞',
        action: 'route',
        message: null,
        route: '/contact',
      },
    ],
  },

  buildPCPopup: {
    enabled: true,         // set false for non-computer businesses
    delaySeconds: 50,
    title: 'Build Your Dream PC!',
    subtitle: 'Custom-built computers tailored to your needs and budget',
    options: [
      { label: 'Gaming PC', icon: '🎮', message: 'Hello, I want to build a Gaming PC. Can you give me a quote?' },
      { label: 'Office PC', icon: '💼', message: 'Hello, I want to build an Office PC. Can you help?' },
      { label: 'Custom Configuration', icon: '⚙️', message: 'Hello, I want a custom PC configuration.' },
      { label: 'Get a Quote', icon: '📋', message: 'Hello, I would like a quote for a custom PC build.' },
    ],
  },
}

export default business
