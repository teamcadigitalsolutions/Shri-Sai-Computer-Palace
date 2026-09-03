import React from 'react'
import styles from './Button.module.css'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  className = '',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  target,
  rel,
  'aria-label': ariaLabel,
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    fullWidth ? styles['btn--full'] : '',
    loading ? styles['btn--loading'] : '',
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={target === '_blank' ? 'noopener noreferrer' : rel} aria-label={ariaLabel} {...rest}>
        {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled || loading} onClick={onClick} aria-label={ariaLabel} {...rest}>
      {loading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      {children}
    </button>
  )
}

export default Button
