'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import LottieSignature from '@/components/ui/LottieSignature'
import treeData from '@/lottie/base-tree.json'

const pillars = [
  { num: '01', title: '褒め育', desc: '小さな「できた」をたくさん褒めて自己肯定感を育む' },
  { num: '02', title: '個別対応', desc: 'お子さまの発達段階・特性に合わせたオーダーメイド支援' },
  { num: '03', title: '就学準備', desc: '5領域をカバーし小学校入学への土台をつくる' },
]

export default function MessageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="philosophy" ref={ref} className="py-20 md:py-28 bg-transparent relative overflow-hidden">
      {/* Large background watermark */}
      <span className="absolute text-[18rem] font-black text-yellow-100/50 leading-none select-none top-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
        kiitos!
      </span>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="spread text-center px-7 py-14 sm:px-12 md:px-16 md:py-20">
        {/* Signature: the kiitos!BASE tree growing from its roots — the philosophy, alive */}
        <LottieSignature
          animationData={treeData}
          idleStart={180}
          ariaLabel="根から育つ木のアニメーション"
          className="mx-auto w-40 sm:w-48 md:w-52 -mt-2 mb-1"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-kb-yellow font-bold tracking-widest text-sm mb-10"
        >
          OUR PHILOSOPHY
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-kb-black leading-[1.25] mb-10"
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
          initial={{ scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
          className="mt-12 mb-20 mx-auto w-24 h-1.5 bg-kb-yellow rounded-full"
        />

        {/* 3 pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {pillars.map((p) => (
            <div key={p.num} className="flex flex-col items-center">
              <span className="text-7xl font-black text-yellow-100 leading-none mb-2">{p.num}</span>
              <h3 className="text-xl font-black text-kb-black mb-2">{p.title}</h3>
              <p className="text-kb-gray text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  )
}
