'use client'

import { motion, useInView, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

// width varies per card for an editorial rhythm along the rail
const photos = [
  { url: 'https://images.pexels.com/photos/8363102/pexels-photo-8363102.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&dpr=1', alt: '先生と子どもたちが楽しく活動する様子', w: 360 },
  { url: 'https://images.pexels.com/photos/8087853/pexels-photo-8087853.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&dpr=1', alt: '先生が子どもに丁寧に教えている様子', w: 300 },
  { url: 'https://images.pexels.com/photos/8466775/pexels-photo-8466775.jpeg?auto=compress&cs=tinysrgb&w=1100&h=1000&dpr=1', alt: '子どもたちが楽しく過ごす教室の様子', w: 440 },
  { url: 'https://images.pexels.com/photos/8422142/pexels-photo-8422142.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&dpr=1', alt: '幼児が集中して学習に取り組む様子', w: 320 },
  { url: 'https://images.pexels.com/photos/8535585/pexels-photo-8535585.jpeg?auto=compress&cs=tinysrgb&w=1100&h=1000&dpr=1', alt: '先生と幼児が一緒に遊ぶ温かな様子', w: 420 },
  { url: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=900&h=1000&dpr=1', alt: '子どもたちが多彩な活動を楽しむ様子', w: 340 },
]

export default function PhotoGallery() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  // Vertical scroll through the section nudges the whole rail sideways — an
  // active horizontal "drift" on top of the native swipe/scroll (never traps).
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const driftX = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [90, -90])

  return (
    <section id="gallery" ref={sectionRef} className="py-20 md:py-24 bg-transparent overflow-hidden">
      {/* header */}
      <div
        ref={headRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex items-end justify-between gap-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-kb-yellow font-bold tracking-widest text-sm mb-3">DAILY LIFE</p>
          <h2 className="text-4xl font-black text-kb-black">毎日の療育</h2>
          <p className="mt-3 text-kb-gray text-sm">子どもたちのいきいきとした姿を、よこにたどってご覧ください。</p>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={headInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden sm:inline-flex items-center gap-2 text-kb-gray text-sm font-bold whitespace-nowrap pb-1"
        >
          よこにスクロール
          <span aria-hidden className="text-kb-yellow text-base">→</span>
        </motion.span>
      </div>

      {/* drift wrapper (visual) → native horizontal scroll rail inside */}
      <motion.div style={{ x: driftX }}>
        <div className="no-scrollbar flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="relative shrink-0 snap-center rounded-[1.5rem] overflow-hidden bg-white shadow-[0_30px_60px_-34px_rgba(96,72,20,0.45)]"
              style={{ width: p.w, height: 380 }}
            >
              <Image
                src={p.url}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="440px"
                loading="lazy"
              />
            </figure>
          ))}
          {/* trailing spacer so the last card can snap clear of the edge */}
          <div aria-hidden className="shrink-0 w-2 sm:w-6" />
        </div>
      </motion.div>
    </section>
  )
}
