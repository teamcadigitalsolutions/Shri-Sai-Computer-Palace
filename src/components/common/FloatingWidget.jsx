import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { business } from '@/data/businessInfo'
import { buildWhatsAppUrl } from '@/utils/whatsapp'
import styles from './FloatingWidget.module.css'

export function FloatingWidget() {
  const [showTop, setShowTop] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className={styles.container}>
      {/* Go to Top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className={styles.btnTop}
            aria-label="Go to top"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contact Widget */}
      <div 
        className={styles.contactWrapper} 
        onMouseEnter={() => setExpanded(true)} 
        onMouseLeave={() => setExpanded(false)}
      >
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={styles.menu}
            >
              <a 
                href={buildWhatsAppUrl('Hello, I need help with your services.')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.menuItemWa}
              >
                <span className={styles.icon}>💬</span> WhatsApp Us
              </a>
              <a 
                href={`tel:${business.phoneRaw}`} 
                className={styles.menuItemCall}
              >
                <span className={styles.icon}>📞</span> Call {business.phone}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          className={styles.btnMain} 
          aria-label="Contact options"
          onClick={() => setExpanded(!expanded)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}
