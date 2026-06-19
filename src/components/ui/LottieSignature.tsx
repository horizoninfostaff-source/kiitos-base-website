'use client'

import { useEffect, useRef } from 'react'
import Lottie, { type LottieRefCurrentProps } from 'lottie-react'
import { useInView } from 'framer-motion'

type Props = {
  animationData: object
  /** frame where the looping idle tail starts (intro plays once, then this loops) */
  idleStart: number
  className?: string
  ariaLabel?: string
}

/**
 * Signature Lottie: plays the intro once when scrolled into view, then loops a
 * seamless idle tail. Honors prefers-reduced-motion by holding the final pose.
 */
export default function LottieSignature({ animationData, idleStart, className, ariaLabel }: Props) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const inView = useInView(wrapRef, { once: true, margin: '-10%' })
  const started = useRef(false)

  const total = (animationData as { op?: number })?.op ?? 360

  useEffect(() => {
    const api = lottieRef.current
    if (!api || started.current || !inView) return
    started.current = true

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      api.goToAndStop(total - 1, true) // fully-formed pose, no motion
      return
    }
    api.playSegments([0, total], true) // intro, once
  }, [inView, total])

  const handleComplete = () => {
    const api = lottieRef.current
    if (!api) return
    if (api.animationItem) api.animationItem.loop = true
    api.playSegments([idleStart, total], true) // seamless idle loop
  }

  return (
    <div ref={wrapRef} className={className}>
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        onComplete={handleComplete}
        aria-label={ariaLabel}
        role={ariaLabel ? 'img' : undefined}
      />
    </div>
  )
}
