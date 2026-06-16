'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * GrowingThread — a single meandering line that draws itself from top to bottom
 * as the visitor scrolls, like a root sending up a sprout. It is the warm-tone
 * counterpart to suiheisen v2's glowing horizon: one continuous axis that ties
 * the whole page together, and here it literally embodies the brand idea of
 * "growing the roots of body and mind".
 *
 * Rendered as a full-height absolute SVG inside the page wrapper, so it spans the
 * real document height. preserveAspectRatio="none" stretches the gentle wave to
 * whatever the page height turns out to be.
 */
export default function GrowingThread() {
  const { scrollYProgress } = useScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 90, damping: 30, restDelta: 0.001 })

  return (
    <div
      aria-hidden
      className="absolute top-0 bottom-0 left-[5vw] w-[160px] sm:left-[7vw] z-0 pointer-events-none hidden sm:block"
    >
      <svg
        viewBox="0 0 200 2000"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="thread-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A7D9AA" />
            <stop offset="45%" stopColor="#81C784" />
            <stop offset="100%" stopColor="#FFB300" />
          </linearGradient>
        </defs>

        {/* faint full guide so the drawn part reads as "already grown" vs "to come" */}
        <path
          d="M100,0 C40,200 160,400 100,600 C40,800 160,1000 100,1200 C40,1400 160,1600 100,1800 C72,1900 128,1960 100,2000"
          fill="none"
          stroke="#E9C77A"
          strokeOpacity="0.18"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {/* the growing line */}
        <motion.path
          d="M100,0 C40,200 160,400 100,600 C40,800 160,1000 100,1200 C40,1400 160,1600 100,1800 C72,1900 128,1960 100,2000"
          fill="none"
          stroke="url(#thread-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>
    </div>
  )
}
