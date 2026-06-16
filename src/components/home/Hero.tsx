'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const tickerItems = [
  '🌱 見学・相談 無料',
  '📋 受給者証があれば利用できます',
  '✏️ 公文メソッド導入',
  '👶 2〜6歳（未就学児）対象',
  '⭐ 少人数10名・丁寧な支援',
  '🏠 月〜金 9:00〜16:00',
]

const chips = ['2024年11月開設', '月〜金 受け入れ', '2〜6歳対象', '見学無料']

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background photo (gentle parallax — scaled so the drift never reveals an edge) */}
      <motion.div className="absolute inset-0 scale-125" style={{ y: bgY }}>
        <Image
          src="https://images.pexels.com/photos/8613057/pexels-photo-8613057.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-kb-yellow text-white text-sm font-bold px-5 py-2 rounded-full mb-8 shadow-lg shadow-yellow-500/30"
            >
              児童発達支援 ／ 2〜6歳 ／ 船橋市
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[1.05] tracking-tight"
              >
                心身の根っこを、<br />
                <span className="text-kb-yellow">すくすく</span><br />
                育てる。
              </motion.h1>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: 'easeOut' }}
              style={{ transformOrigin: 'left center' }}
              className="mt-8 mb-8 w-20 h-1.5 bg-kb-yellow rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/85 text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              kiitos!BASEは、未就学児（2〜6歳）の「できた！」を大切にする児童発達支援の療育教室。
              一人ひとりの個性に寄り添い、小学校入学への土台をつくります。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-10 py-4 bg-kb-yellow text-white font-black text-base rounded-full hover:bg-kb-yellow-hover transition-all shadow-xl shadow-yellow-500/30 hover:scale-105 duration-200"
              >
                見学・相談を申し込む →
              </Link>
              <a
                href="tel:0474011205"
                className="px-10 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/50 text-white font-bold text-base rounded-full hover:bg-white/25 transition-all duration-200"
              >
                📞 047-401-1205
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {chips.map((s) => (
                <span
                  key={s}
                  className="text-xs font-bold text-white/80 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full"
                >
                  {s}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="bg-kb-yellow/90 backdrop-blur-sm overflow-hidden flex-shrink-0 py-3.5 relative z-10">
        <div className="animate-ticker flex gap-0 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-white font-bold text-sm inline-flex items-center">
              <span className="px-8">{item}</span>
              <span className="text-yellow-200 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
