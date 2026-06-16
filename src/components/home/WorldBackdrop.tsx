'use client'

import { useEffect } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'

/**
 * WorldBackdrop — one continuous, scroll-reactive sky-to-earth world behind every
 * section, now with hand-cut "collage" motifs (sun, leaf, crayon squiggle, paper
 * confetti) that drift on *multiple axes* from both scroll and mouse movement.
 *
 * Layers, back to front:
 *   1. an always-on vertical light (cool top → warm bottom);
 *   2. three cross-fading washes carrying the light through the day on scroll;
 *   3. cut-paper shapes that drift multi-axis (x+y+rotate) from scroll + cursor;
 *   4. a faint grain.
 *
 * The shapes are fixed within the viewport (0–95vh) so they stay alive as ambient
 * companions while you scroll, rather than being clipped off-screen.
 */

type ShapeCfg = {
  top: string
  left?: string
  right?: string
  w: number
  sx: number // horizontal scroll drift span (px)
  sy: number // vertical scroll drift span (px)
  mx: number // mouse-x parallax amount (px)
  my: number // mouse-y parallax amount (px)
  r0: number
  r1: number
  svg: React.ReactNode
}

function CollageShape({
  p,
  mvx,
  mvy,
  c,
}: {
  p: MotionValue<number>
  mvx: MotionValue<number>
  mvy: MotionValue<number>
  c: ShapeCfg
}) {
  // centred drift: base position at mid-scroll, drifts ± as you scroll, plus cursor parallax
  const x = useTransform([p, mvx], ([pp, m]: number[]) => (pp - 0.5) * c.sx + m * c.mx)
  const y = useTransform([p, mvy], ([pp, m]: number[]) => (pp - 0.5) * c.sy + m * c.my)
  const rotate = useTransform(p, [0, 1], [c.r0, c.r1])

  return (
    <motion.div
      aria-hidden
      className="absolute"
      style={{
        top: c.top,
        left: c.left,
        right: c.right,
        width: c.w,
        height: c.w,
        x,
        y,
        rotate,
        filter: 'drop-shadow(0 12px 18px rgba(120,90,30,0.16))',
      }}
    >
      {c.svg}
    </motion.div>
  )
}

const Sun = (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <g fill="#FFC94D">
      <circle cx="50" cy="50" r="25" />
      {Array.from({ length: 10 }).map((_, i) => (
        <rect
          key={i}
          x="48"
          y="4"
          width="4"
          height="12"
          rx="2"
          transform={`rotate(${i * 36} 50 50)`}
        />
      ))}
    </g>
  </svg>
)
const Leaf = (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <path d="M50 6 C82 30 82 70 50 94 C18 70 18 30 50 6 Z" fill="#8FD0A0" />
    <path d="M50 14 L50 86" stroke="#6BBE83" strokeWidth="3" strokeLinecap="round" />
  </svg>
)
const Squiggle = (
  <svg viewBox="0 0 100 56" width="100%" height="100%">
    <path
      d="M6 34 C24 6 38 52 56 30 S92 8 94 38"
      stroke="#FF96A8"
      strokeWidth="9"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
)
const Triangle = (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <path d="M50 12 L88 84 Q90 90 82 90 L18 90 Q10 90 12 84 Z" fill="#7FC0F2" />
  </svg>
)
const Blob = (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <path
      d="M54 8 C78 6 96 26 92 50 C88 74 70 96 46 92 C22 88 6 68 10 44 C14 22 30 10 54 8 Z"
      fill="#E0AEE8"
    />
  </svg>
)
const Dots = (
  <svg viewBox="0 0 100 60" width="100%" height="100%">
    <g fill="#FFB300">
      <circle cx="18" cy="30" r="10" />
      <circle cx="50" cy="18" r="8" />
      <circle cx="78" cy="38" r="11" />
    </g>
  </svg>
)

const SHAPES: ShapeCfg[] = [
  { top: '7vh', right: '7vw', w: 116, sx: -60, sy: 90, mx: 26, my: 18, r0: -6, r1: 10, svg: Sun },
  { top: '20vh', left: '9vw', w: 120, sx: 70, sy: -70, mx: -32, my: 22, r0: 8, r1: -10, svg: Squiggle },
  { top: '64vh', left: '5vw', w: 96, sx: 54, sy: -120, mx: 30, my: -20, r0: -8, r1: 14, svg: Leaf },
  { top: '58vh', right: '8vw', w: 78, sx: -48, sy: -90, mx: -24, my: -16, r0: 6, r1: -16, svg: Triangle },
  { top: '82vh', left: '16vw', w: 70, sx: 40, sy: -60, mx: 20, my: 14, r0: -4, r1: 12, svg: Dots },
  { top: '40vh', right: '4vw', w: 92, sx: -36, sy: 70, mx: -18, my: -24, r0: 10, r1: -8, svg: Blob },
]

export default function WorldBackdrop() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 30, restDelta: 0.001 })

  // Light moves over the day as you scroll.
  const morningOpacity = useTransform(p, [0, 0.3, 0.5], [1, 0.5, 0])
  const noonOpacity = useTransform(p, [0.18, 0.55, 0.85], [0, 1, 0.5])
  const glowOpacity = useTransform(p, [0.6, 1], [0, 1])

  // Cursor parallax (mouse only; held still for touch / reduced-motion).
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const mvx = useSpring(rawX, { stiffness: 50, damping: 22, restDelta: 0.001 })
  const mvy = useSpring(rawY, { stiffness: 50, damping: 22, restDelta: 0.001 })

  useEffect(() => {
    if (reduce) return
    const onMove = (e: MouseEvent) => {
      rawX.set((e.clientX / window.innerWidth - 0.5) * 2)
      rawY.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduce, rawX, rawY])

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* 1 ── always-on vertical light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg,#CFE4F4 0%,#E4ECDF 30%,#FAEFD8 62%,#F3DBB6 100%)',
        }}
      />

      {/* 2 ── day washes cross-fading over scroll */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: morningOpacity,
          background:
            'radial-gradient(120% 80% at 78% 8%,rgba(228,243,251,0.9),transparent 60%),linear-gradient(180deg,#E6F1FA 0%,#F4F4EC 46%,#FFFCF1 100%)',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: noonOpacity,
          background:
            'radial-gradient(120% 80% at 24% 18%,rgba(255,238,200,0.8),transparent 62%),linear-gradient(180deg,#FFF8E6 0%,#FFFAEC 50%,#FFF4DF 100%)',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: glowOpacity,
          background:
            'radial-gradient(120% 90% at 70% 100%,rgba(255,206,150,0.85),transparent 60%),linear-gradient(180deg,#FFF1D6 0%,#FFE6C4 60%,#FFDDB4 100%)',
        }}
      />

      {/* 3 ── cut-paper collage motifs, multi-axis drift from scroll + cursor */}
      {SHAPES.map((c, i) => (
        <CollageShape key={i} p={p} mvx={mvx} mvy={mvy} c={c} />
      ))}

      {/* 4 ── grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '160px 160px',
        }}
      />
    </div>
  )
}
