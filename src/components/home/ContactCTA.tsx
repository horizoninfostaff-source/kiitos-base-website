'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-kb-yellow relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/15 rounded-full blur-3xl" />
      <div className="dot-pattern absolute inset-0 opacity-[0.08]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 90 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="text-center"
        >
          <p className="text-white/70 font-bold tracking-widest text-sm mb-4">CONTACT</p>
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            まずは、<br />
            見学から。
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-12 max-w-md mx-auto">
            「どんな場所か見てみたい」「うちの子に合うかな？」
            どんな小さな疑問でも、お気軽にご連絡ください。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { icon: '🏫', title: '見学無料', desc: '療育の様子をご覧ください' },
              { icon: '💬', title: '相談無料', desc: '手続きも丁寧にご説明します' },
              { icon: '📋', title: '受給者証サポート', desc: '申請手続きをお手伝いします' },
            ].map((item, i) => (
              <div key={i} className="bg-white/15 border border-white/30 rounded-2xl p-5 text-center">
                <p className="text-4xl mb-2">{item.icon}</p>
                <p className="font-black text-white text-base">{item.title}</p>
                <p className="text-sm text-white/70 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-kb-yellow font-black rounded-full hover:bg-yellow-50 transition-colors text-base shadow-lg"
            >
              見学・相談を申し込む →
            </Link>
            <a
              href="tel:0474011205"
              className="px-10 py-4 bg-white/15 border-2 border-white/50 text-white font-bold rounded-full hover:bg-white/25 transition-colors text-base"
            >
              📞 047-401-1205
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
