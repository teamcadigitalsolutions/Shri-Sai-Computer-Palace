import { useEffect, useRef } from 'react'

/**
 * usePopupTimer — Shows a popup after a delay, once per session.
 *
 * @param {string}   storageKey   - sessionStorage key to track "shown" state
 * @param {number}   delayMs      - Delay in milliseconds before showing popup
 * @param {Function} onShow       - Callback to open the popup
 * @param {boolean}  enabled      - Whether this popup is enabled at all
 */
export function usePopupTimer({ storageKey, delayMs, onShow, enabled = true }) {
  const timerRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    // Check if already shown this session
    const alreadyShown = sessionStorage.getItem(storageKey)
    if (alreadyShown) return

    timerRef.current = setTimeout(() => {
      onShow()
      sessionStorage.setItem(storageKey, 'true')
    }, delayMs)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [storageKey, delayMs, onShow, enabled])
}

export default usePopupTimer
