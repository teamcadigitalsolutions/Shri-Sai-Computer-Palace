/**
 * contactFormService.js — Abstracted contact form submission handler
 *
 * ★ INTEGRATION READY: This function is the single point to wire in a real backend.
 *   Current behaviour: returns a resolved promise (frontend-only demo state).
 *
 * To integrate later, replace the body of `submitContactForm` with one of:
 *   - EmailJS:       emailjs.send(serviceId, templateId, formData)
 *   - Google Sheets: fetch to a Google Apps Script web app endpoint
 *   - WhatsApp:      window.open(buildWhatsAppUrl(formattedMessage))
 *   - Custom API:    fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
 */

/**
 * Submit the contact form.
 * @param {Object} formData - { name, phone, email, service, message, preferredContact }
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitContactForm(formData) {
  // ── STUB: Replace this block with real submission logic ──────────────────
  console.log('[contactFormService] Form submission (stub):', formData)

  // Simulate network delay for realistic UX testing
  await new Promise((resolve) => setTimeout(resolve, 1200))

  // In production: return { success: true/false, message: '...' } from your API
  return {
    success: true,
    message:
      'Thank you! We have received your message and will get back to you shortly via your preferred contact method.',
  }
  // ── END STUB ──────────────────────────────────────────────────────────────
}

export default submitContactForm
