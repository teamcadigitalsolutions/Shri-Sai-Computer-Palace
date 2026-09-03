/**
 * whatsapp.js — Utility to build wa.me deep links with prefilled messages
 *
 * Usage:
 *   import { buildWhatsAppUrl } from '@/utils/whatsapp'
 *   const url = buildWhatsAppUrl('Hello, I need a quote.')
 */

import { business } from '@/data/businessInfo'

/**
 * Build a WhatsApp deep link with an optional prefilled message.
 * @param {string} message - Prefilled message text (optional)
 * @param {string} number  - WhatsApp number (defaults to business number)
 * @returns {string} wa.me URL
 */
export function buildWhatsAppUrl(message = '', number = business.whatsapp) {
  const encoded = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${number}${encoded}`
}

/**
 * Predefined contextual WhatsApp messages
 */
export const whatsappMessages = {
  general:    'Hello, I need help with my computer.',
  repair:     'Hello, I need help with computer/laptop repair.',
  quotation:  'Hello, I would like to get a quotation.',
  customPc:   'Hello, I want to build a custom PC. Can you help?',
  software:   'Hello, I need help with software or Windows installation.',
  upgrade:    'Hello, I am interested in hardware upgrades for my computer.',
  buy:        'Hello, I am interested in buying a computer/laptop.',
  networking: 'Hello, I need help with my network/internet connection.',
  data:       'Hello, I need help with data backup or transfer.',
}

export default buildWhatsAppUrl
