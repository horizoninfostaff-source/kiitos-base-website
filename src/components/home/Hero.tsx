'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder'

const badges = ['📋 受給者証OK', '✏️ 公文導入', '🏫 見学無料', '👥 少人数10名']

export default function Hero() {
  return (
    <section className="bg-kb-bg pt-16 min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-15%] right-[-15%] w-[800px] h-[800px] bg-kb-yellow/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-8%] w-[600px] h-[600px] bg-kb-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-kb-yellow/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="dot-pattern absolute inset-0 opacity-[0.06] pointer-events-none" />

      {/* Floating decorative elements */}
      <span className="absolute top-[14%] left-[5%] text-4xl select-none pointer-events-none animate-float-a z-10" style={{ animationDelay: '0s' }}>🌟</span>
      <span className="absolute top-[22%] right-[4%] text-3xl select-none pointer-events-none animate-float-b z-10" style={{ animationDelay: '0.8s' }}>✨</span>
      <span className="absolute top-[60%] left-[2%] text-4xl select-none pointer-events-none animate-float-d z-10" style={{ animationDelay: '1.4s' }}>🌼</span>
      <span className="absolute bottom-[22%] right-[5%] text-3xl select-none pointer-events-none animate-float-a z-10" style={{ animationDelay: '0.4s' }}>⭐</span>
      <span className="absolute top-[48%] left-[1%] text-3xl select-none pointer-events-none animate-float-c z-10" style={{ animationDelay: '2.1s' }}>💛</span>
      <span className="absolute top-[9%] right-[22%] text-3xl select-none pointer-events-none animate-float-b z-10" style={{ animationDelay: '1.0s' }}>🎈</span>
      <span className="absolute bottom-[14%] left-[18%] text-3xl select-none pointer-events-none animate-float-d z-10" style={{ animationDelay: '0.6s' }}>🌈</span>
      <span className="absolute top-[36%] right-[1%] text-4xl select-none pointer-events-none animate-float-c z-10" style={{ animationDelay: '1.7s' }}>🌱</span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-20 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 bg-kb-yellow text-white text-sm font-bold px-5 py-2 rounded-full mb-8 shadow-lg shadow-yellow-200"
            >
              🌱 児童発達支援 ／ 2〜6歳 ／ 船橋市
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-6xl sm:text-7xl font-black text-kb-black leading-[1.1]"
            >
              心身の根っこを、<br />
              <span className="relative inline-block text-kb-yellow">
                すくすく
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
                  className="absolute -bottom-1 left-0 w-full h-1.5 bg-kb-yellow/40 rounded-full block"
                  style={{ transformOrigin: 'left center' }}
                />
              </span><br />
              育てる。
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
              className="mt-8 text-kb-gray text-lg leading-relaxed max-w-md"
            >
              kiitos!BASEは、未就学児（2〜6歳）の「できた！」「たのしい！」を
              大切にする児童発達支援の療育教室。
              お子さまの個性に寄り添い、小学校入学への土台をつくります。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <span key={b} className="bg-white border border-yellow-200 text-kb-black text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                  {b}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-kb-yellow text-white font-black text-base rounded-full hover:bg-kb-yellow-hover transition-all shadow-lg shadow-yellow-200 hover:scale-105 hover:shadow-xl duration-200"
              >
                見学・相談を申し込む →
              </Link>
              <a
                href="tel:0474011205"
                className="px-8 py-4 bg-white border-2 border-kb-black text-kb-black font-bold text-base rounded-full hover:bg-kb-black hover:text-white transition-all duration-200"
              >
                📞 電話で相談
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[460px] aspect-square mx-auto">
              {/* Outer spinning ring */}
              <div className="absolute inset-[-18px] rounded-full border-[3px] border-dashed border-kb-yellow/35 animate-spin-slow" />
              {/* Inner glow */}
              <div className="absolute inset-6 bg-kb-yellow/25 rounded-full blur-3xl animate-glow-pulse" />

              {/* Main image blob */}
              <div className="relative z-10 w-full h-full rounded-[45%_55%_60%_40%/50%_40%_60%_50%] overflow-hidden shadow-2xl shadow-yellow-200 border-4 border-white">
                <PhotoPlaceholder
                  description="明るく温かい室内。先生と子どもたちが笑顔で療育に参加している様子。"
                  className="w-full h-full"
                />
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-5 py-4 shadow-xl z-20 border border-yellow-100"
              >
                <p className="text-2xl mb-1">🌱</p>
                <p className="text-xs font-black text-kb-black">2〜6歳対象</p>
                <p className="text-xs text-kb-gray">小学校入学前の未就学児</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -13, 0] }}
                transition={{ duration: 3.8, delay: 0.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-5 bg-kb-yellow rounded-2xl px-5 py-4 shadow-xl z-20"
              >
                <p className="text-2xl mb-1">⭐</p>
                <p className="text-xs font-black text-white">定員10名</p>
                <p className="text-xs text-yellow-100">少人数・丁寧な支援</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.6, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-10 -translate-y-1/2 bg-white rounded-2xl px-4 py-3 shadow-xl z-20 border border-yellow-100"
              >
                <p className="text-xl mb-1">✏️</p>
                <p className="text-xs font-black text-kb-black">公文導入</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="relative z-20 mb-10 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-kb-gray font-medium tracking-[0.35em]">SCROLL</p>
        <span className="text-kb-yellow text-lg animate-scroll-bounce">↓</span>
      </motion.div>
    </section>
  )
}
