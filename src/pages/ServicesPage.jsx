import React from 'react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { ServiceCard } from '@/components/services/ServiceCard'
import { services } from '@/data/services'
import { business } from '@/data/businessInfo'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import styles from './ServicesPage.module.css'

export function ServicesPage() {
  return (
    <main id="main-content">
      <SEO
        title="Computer Repair & Services in Kumta"
        description="Full computer repair, laptop repair, desktop repair, Windows installation, virus removal, SSD & RAM upgrades, custom PC builds and more — all in Kumta, Karnataka."
        path="/services"
      />

      <div className={styles.pageHeader}>
        <div className="container">
          <SectionHeading
            title="Our Services"
            subtitle="Professional computer repair, upgrades, and services for all brands — in Kumta, Karnataka."
          />
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.bottomCta}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2>Not Sure What You Need?</h2>
            <p>Describe your problem and we'll help you figure out the best solution and give you a quote.</p>
            <div className={styles.ctaActions}>
              <a
                href={buildWhatsAppUrl('Hello, I need help with my computer. Can you advise?')}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaWa}
              >
                💬 Describe Your Problem on WhatsApp
              </a>
              <a href={`tel:${business.phoneRaw}`} className={styles.ctaCall}>
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
