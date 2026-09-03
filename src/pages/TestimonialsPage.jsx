import React from 'react'
import { SEO } from '@/components/common/SEO'
import { SectionHeading } from '@/components/common/SectionHeading'
import { TestimonialCard } from '@/components/testimonials/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { business } from '@/data/businessInfo'
import styles from './TestimonialsPage.module.css'

export function TestimonialsPage() {
  return (
    <main id="main-content">
      <SEO
        title="Customer Reviews & Testimonials"
        description={`Read reviews and testimonials from customers of ${business.name} in Kumta, Karnataka. Real experiences from laptop repair, desktop repair, and computer service customers.`}
        path="/testimonials"
      />
      <div className={styles.pageHeader}>
        <div className="container">
          <SectionHeading
            title="Customer Reviews"
            subtitle="Genuine feedback from people who trusted us with their computers."
          />
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {testimonials.map((t, i) => <TestimonialCard key={t.id} testimonial={t} index={i} />)}
          </div>
          <div className={styles.googleCta}>
            <p>Have more reviews to share? Or want to see all verified reviews?</p>
            <a href={business.googleBusiness} target="_blank" rel="noopener noreferrer" className={styles.googleBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" /></svg>
              View on Google Business Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
export default TestimonialsPage
