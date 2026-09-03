import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/common/SEO'
import { Hero } from '@/components/home/Hero'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { TestimonialsPreview } from '@/components/home/TestimonialsPreview'
import { LocationSection } from '@/components/home/LocationSection'
import { business } from '@/data/businessInfo'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <main id="main-content">
      <SEO
        title="Computer Sales, Repair & Service in Kumta"
        description="Shri Sai Computer Palace — your trusted computer service center in Kumta, Karnataka. Laptop repair, desktop repair, custom PC builds, Windows installation, hardware upgrades. Call or WhatsApp today."
        path="/"
      />
      <Hero />
      <AboutSnippet />
      <ServicesOverview />
      <WhyChooseUs />
      <TestimonialsPreview />

      {/* CTA Banner */}
      <section className={styles.ctaBanner} aria-label="Contact call to action">
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h2>Ready to Get Your Computer Fixed?</h2>
              <p>Reach out now — we'll help you right away via call or WhatsApp.</p>
            </div>
            <div className={styles.ctaActions}>
              <a href={`tel:${business.phoneRaw}`} className={styles.ctaCall}>
                📞 Call Now
              </a>
              <a
                href={buildWhatsAppUrl('Hello, I need help with my computer.')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWa}
              >
                💬 WhatsApp Us
              </a>
              <Link to="/contact" className={styles.ctaBook}>Book a Service</Link>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
    </main>
  )
}

export default HomePage
