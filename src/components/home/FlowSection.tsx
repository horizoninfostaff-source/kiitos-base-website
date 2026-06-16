'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const steps = [
  {
    no: '01',
    icon: '📞',
    title: 'お問い合わせ',
    desc: 'まずはお電話またはフォームからご連絡ください。気軽なご相談でOK。',
  },
  {
    no: '02',
    icon: '🏫',
    title: '見学・体験',
    desc: '実際の活動の様子を見学・体験していただけます。無料で何度でも。',
  },
  {
    no: '03',
    icon: '📋',
    title: '受給者証の申請',
    desc: 'お住まいの市区町村で「受給者証」を申請します。手続きもサポートします。',
  },
  {
    no: '04',
    icon: '🌱',
    title: 'ご利用開始',
    desc: '支援計画を作成し、いよいよご利用開始。一緒に笑顔の土台を作りましょう。',
  },
]

export default function FlowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="flow" className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-kb-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-kb-green/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-kb-yellow font-bold tracking-widest text-sm mb-3">HOW TO START</p>
          <h2 className="text-4xl font-black text-kb-black">ご利用までの流れ</h2>
          <p className="mt-4 text-kb-gray text-sm">受給者証の申請サポートもお任せください</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-yellow-200 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay: i * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="w-28 h-28 bg-white border-4 border-kb-yellow rounded-3xl flex flex-col items-center justify-center shadow-[0_18px_36px_-20px_rgba(96,72,20,0.45)] mb-5">
                <span className="text-4xl">{step.icon}</span>
                <span className="text-xs font-black text-kb-yellow mt-1">{step.no}</span>
              </div>
              <h3 className="font-black text-kb-black text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-kb-gray leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-kb-yellow text-white font-black rounded-full hover:bg-kb-yellow-hover transition-colors shadow-lg shadow-yellow-200 text-base"
          >
            まずはお問い合わせ →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
