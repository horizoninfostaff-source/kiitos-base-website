'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MessageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-32 bg-kb-bg relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-kb-yellow/12 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-kb-green/8 rounded-full blur-[60px] pointer-events-none" />
      <div className="dot-pattern absolute inset-0 opacity-[0.05] pointer-events-none" />

      {/* Floating decorative */}
      <span className="absolute top-[18%] left-[7%] text-5xl opacity-15 select-none pointer-events-none animate-float-a" style={{ animationDelay: '0.2s' }}>✨</span>
      <span className="absolute top-[25%] right-[9%] text-5xl opacity-15 select-none pointer-events-none animate-float-b" style={{ animationDelay: '1.1s' }}>⭐</span>
      <span className="absolute bottom-[20%] left-[11%] text-4xl opacity-15 select-none pointer-events-none animate-float-c" style={{ animationDelay: '0.7s' }}>🌟</span>
      <span className="absolute bottom-[25%] right-[7%] text-4xl opacity-15 select-none pointer-events-none animate-float-d" style={{ animationDelay: '1.6s' }}>💫</span>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-kb-yellow font-bold tracking-widest text-sm mb-8"
        >
          OUR PHILOSOPHY
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 55 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-kb-black leading-[1.3] mb-10"
        >
          「できた！」が、<br />
          <span className="text-kb-yellow">自信になる。</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="text-kb-gray text-xl leading-relaxed max-w-2xl mx-auto"
        >
          小さな「できた」を積み重ねることが、お子さまの大きな自信につながります。
          kiitos!BASEでは、一人ひとりの成長スピードに合わせ、
          焦らず丁寧に笑顔で育ちを支えます。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
          className="mt-14 mx-auto w-24 h-1.5 bg-kb-yellow rounded-full"
        />
      </div>
    </section>
  )
}
