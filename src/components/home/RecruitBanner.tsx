'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function RecruitBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="recruit" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="bg-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 shadow-xl shadow-yellow-100/60 border border-yellow-100"
        >
          <div className="flex-1">
            <span className="inline-block bg-kb-yellow text-white text-xs font-bold px-3 py-1 rounded-full mb-4">RECRUIT</span>
            <h2 className="text-3xl font-black text-kb-black mb-4">
              子どもの根っこを育てる仕事を、<br />一緒にしませんか？
            </h2>
            <p className="text-kb-gray leading-relaxed text-sm">
              児童発達支援管理責任者・保育士・児童指導員を募集しています。
              経験・資格は問いません。子どもが好きな方、大歓迎です。
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <Link
              href="/recruit"
              className="px-8 py-4 bg-kb-yellow text-white font-bold rounded-full hover:bg-kb-yellow-hover transition-colors text-center text-base shadow-md shadow-yellow-100"
            >
              採用情報を見る →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-kb-black text-kb-black font-bold rounded-full hover:bg-kb-black hover:text-white transition-all text-center text-base"
            >
              採用エントリー
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
