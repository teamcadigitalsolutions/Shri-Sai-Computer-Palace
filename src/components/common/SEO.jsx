import React from 'react'
import { Helmet } from 'react-helmet-async'
import { business } from '@/data/businessInfo'

export function SEO({ title, description, path = '', noIndex = false }) {
  const fullTitle = title ? `${title} | ${business.seo.titleSuffix}` : business.seo.titleSuffix
  const metaDesc = description || business.seo.defaultDescription
  const canonicalUrl = `https://shrisaicomputerpalace.com${path}`
  const ogImage = business.seo.ogImage

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ComputerStore'],
    name: business.name,
    description: business.description,
    url: 'https://shrisaicomputerpalace.com',
    telephone: business.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.pincode,
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: business.seo.geo.latitude, longitude: business.seo.geo.longitude },
    openingHoursSpecification: business.hours.filter(h => !h.closed).map(h => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [business.googleBusiness, business.instagram].filter(Boolean),
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
export default SEO
