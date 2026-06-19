'use client'

import { useEffect, useRef, type ForwardRefExoticComponent, type RefAttributes } from 'react'
import { useInView } from 'framer-motion'
import type { AnimatedIconHandle, AnimatedIconProps } from '@/icons/types'

type IconType = ForwardRefExoticComponent<AnimatedIconProps & RefAttributes<AnimatedIconHandle>>

/**
 * Wraps an itshover animated icon. On PC the icon plays on hover (built in);
 * on touch devices it plays once when scrolled into view. Disabled for
 * reduced-motion users.
 */
export default function HoverInViewIcon({ icon: Icon, className }: { icon: IconType; className?: string }) {
  const iconRef = useRef<AnimatedIconHandle>(null)
  const wrapRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(wrapRef, { once: true, margin: '-15%' })

  useEffect(() => {
    if (!inView || typeof window === 'undefined') return
    const touch = window.matchMedia('(hover: none)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!touch || reduce) return
    iconRef.current?.startAnimation()
    const t = setTimeout(() => iconRef.current?.stopAnimation(), 850)
    return () => clearTimeout(t)
  }, [inView])

  return (
    <span ref={wrapRef} className="inline-flex">
      <Icon ref={iconRef} className={className} />
    </span>
  )
}
