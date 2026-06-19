'use client'

import { useRef, type ReactNode, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  /** how strongly the element follows the cursor (0–1) */
  strength?: number
  /** max travel in px */
  max?: number
}

/**
 * Subtle magnetic pull toward the cursor. PC only (pointer:fine + hover),
 * disabled for touch and reduced-motion users.
 */
export default function MagneticButton({ children, className, strength = 0.3, max = 7 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const enabled = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    const el = ref.current
    if (!el || !enabled()) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    const clamp = (v: number) => Math.max(-max, Math.min(max, v * strength))
    x.set(clamp(dx))
    y.set(clamp(dy))
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy, display: 'inline-block' }}
      className={className}
    >
      {children}
    </motion.span>
  )
}
