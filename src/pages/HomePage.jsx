import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/common/SEO'
import { Hero } from '@/components/home/Hero'
import { PromoCarousel } from '@/components/home/PromoCarousel'
import { ServiceScroll } from '@/components/home/ServiceScroll'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { StatsStrip } from '@/components/home/StatsStrip'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { BrandsStrip } from '@/components/home/BrandsStrip'
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

      {/* 1. Hero */}
      <Hero />

      {/* 2. Promo image carousel */}
      <PromoCarousel />

      {/* 3. Service category horizontal scroll — inspired by modxcomputers "Shop by Category" */}
      <ServiceScroll />

      {/* 4. About snippet */}
      <AboutSnippet />

      {/* 5. Animated stats strip — dark navy, builds trust */}
      <StatsStrip />

      {/* 6. Services overview cards */}
      <ServicesOverview />

      {/* 7. Brand trust marquee strip */}
      <BrandsStrip />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Testimonials auto-carousel */}
      <TestimonialsPreview />

      {/* 10. CTA Banner — rich gradient with availability pulse */}
      <section className={styles.ctaBanner} aria-label="Contact call to action">
        <div className="container">
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <div className={styles.ctaAvailability}>
                <span className={styles.ctaDot} aria-hidden="true" />
                <span className={styles.ctaAvailText}>Open Mon – Sat · 10 AM – 8 PM</span>
              </div>
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

      {/* 11. Location + map */}
      <LocationSection />
    </main>
  )
}

export default HomePage
