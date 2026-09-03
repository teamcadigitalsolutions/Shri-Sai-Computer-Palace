import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { TopBar } from '@/components/layout/TopBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileActionBar } from '@/components/layout/MobileActionBar'
import { FloatingWidget } from '@/components/common/FloatingWidget'
import { WelcomePopup } from '@/components/popups/WelcomePopup'
import { BuildPCPopup } from '@/components/popups/BuildPCPopup'
import { TawkToWidget } from '@/components/common/TawkToWidget'
import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { GalleryPage } from '@/pages/GalleryPage'
import { TestimonialsPage } from '@/pages/TestimonialsPage'
import { ContactPage } from '@/pages/ContactPage'

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
}

const pageTransition = { duration: 0.25, ease: 'easeInOut' }

function AnimatedRoute({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

function AppContent() {
  const location = useLocation()

  return (
    <>
      {/* Skip to main content — accessibility */}
      <a href="#main-content" className="sr-only" style={{ position: 'absolute', left: '-9999px' }}>
        Skip to main content
      </a>

      <TopBar />
      <Header />

      <div className="page-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedRoute><HomePage /></AnimatedRoute>} />
            <Route path="/services" element={<AnimatedRoute><ServicesPage /></AnimatedRoute>} />
            <Route path="/gallery" element={<AnimatedRoute><GalleryPage /></AnimatedRoute>} />
            <Route path="/testimonials" element={<AnimatedRoute><TestimonialsPage /></AnimatedRoute>} />
            <Route path="/contact" element={<AnimatedRoute><ContactPage /></AnimatedRoute>} />
            {/* 404 fallback */}
            <Route path="*" element={
              <AnimatedRoute>
                <main id="main-content" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
                  <h1 style={{ marginBottom: '1rem' }}>Page Not Found</h1>
                  <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                    The page you're looking for doesn't exist.
                  </p>
                  <a href="/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    Go Home
                  </a>
                </main>
              </AnimatedRoute>
            } />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />

      {/* Floating contact widget (Desktop mostly) & Mobile sticky Call/WA bar */}
      <FloatingWidget />
      <MobileActionBar />

      {/* Popups */}
      <WelcomePopup />
      <BuildPCPopup />

      {/* Tawk.to placeholder — see TawkToWidget.jsx for integration instructions */}
      <TawkToWidget />
    </>
  )
}

export function App() {
  return <AppContent />
}

export default App
