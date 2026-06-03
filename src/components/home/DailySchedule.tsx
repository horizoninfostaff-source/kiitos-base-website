'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const scheduleItems = [
  { time: '9:00', label: '開所・到着', desc: '送迎または保護者様の送り。朝の準備スタート。' },
  { time: '9:30', label: '朝の会', desc: '今日のスケジュールを確認。見通しを持って安心して過ごせるよう視覚支援を活用。' },
  { time: '10:00', label: '午前プログラム', desc: '運動・感覚・製作など。集中力のある午前中にしっかり取り組みます。' },
  { time: '11:30', label: '昼食・排泄', desc: 'みんなで楽しく昼食タイム。身辺自立のトレーニングも兼ねています。' },
  { time: '12:30', label: '午後プログラム', desc: '集団・自由遊びなど。友達との関わりを大切にした活動を行います。' },
  { time: '15:00', label: '帰りの会・降所', desc: '今日のできたことを振り返り、たくさん褒めてお見送りします。' },
]

export default function DailySchedule() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-kb-yellow font-semibold tracking-widest text-sm mb-3">DAILY SCHEDULE</p>
          <h2 className="text-4xl font-black text-kb-black">一日の流れ</h2>
          <p className="mt-4 text-kb-gray text-sm">月〜金曜日 9:00〜16:00（閉所）</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {scheduleItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay: i * 0.08 }}
              className="flex gap-6 mb-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-kb-yellow text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {i + 1}
                </div>
                {i < scheduleItems.length - 1 && (
                  <div className="w-0.5 h-full bg-kb-yellow/20 mt-2" />
                )}
              </div>
              <div className="pb-6 flex-1">
                <p className="text-sm font-bold text-kb-yellow mb-1">{item.time}</p>
                <p className="font-black text-kb-black text-base mb-1">{item.label}</p>
                <p className="text-base text-kb-gray">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/daily"
            className="inline-block px-7 py-3.5 border-2 border-kb-yellow text-kb-yellow font-semibold rounded-full hover:bg-kb-yellow hover:text-white transition-all duration-200"
          >
            詳しい一日の流れを見る →
          </Link>
        </div>
      </div>
    </section>
  )
}
