'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function FadeIn({ children, className, delay = 0, direction = 'up' }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const initial = {
    opacity: 0,
    y: direction === 'up' ? 90 : 0,
    x: direction === 'left' ? 90 : direction === 'right' ? -90 : 0,
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay }}
    >
      {children}
    </motion.div>
  )
}
