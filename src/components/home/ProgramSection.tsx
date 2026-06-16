'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const programs = [
  {
    icon: '🏃',
    title: '運動',
    gradFrom: '#FF6B6B',
    gradTo: '#FB7185',
    light: 'bg-kb-red-light',
    desc: '全身運動でボディーコントロールを養います。着座姿勢・体幹・物との距離感など、学校生活に必要な基礎を育てます。',
  },
  {
    icon: '👥',
    title: '集団',
    gradFrom: '#64B5F6',
    gradTo: '#38BDF8',
    light: 'bg-kb-blue-light',
    desc: '集団の中でお友達との関わりを増やします。場面に合った言葉を使い、円滑な人間関係を育みます。',
  },
  {
    icon: '✂️',
    title: '製作',
    gradFrom: '#81C784',
    gradTo: '#34D399',
    light: 'bg-kb-green-light',
    desc: '様々な道具を使い、就学に必要な指先スキルを身につけます。自分で考えて作ることで想像力と身辺自立につなげます。',
  },
  {
    icon: '🌀',
    title: '感覚',
    gradFrom: '#CE93D8',
    gradTo: '#A78BFA',
    light: 'bg-kb-purple-light',
    desc: '身体の位置・動き・触覚などに刺激を与え、感覚統合を促します。姿勢保持やバランス感覚の向上につながります。',
  },
  {
    icon: '🎲',
    title: '自由',
    gradFrom: '#FFB300',
    gradTo: '#F59E0B',
    light: 'bg-kb-yellow-light',
    desc: '自由な発想で「好き」を武器に強みを強化。自分のやりたいことを楽しむ時間と、集団での自由遊びを大切にします。',
  },
]

export default function ProgramSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="program" className="py-24 bg-transparent overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-kb-yellow font-bold tracking-widest text-sm mb-3">PROGRAM</p>
          <h2 className="text-4xl font-black text-kb-black mb-4">
            5つの楽しい<br className="sm:hidden" />プログラム
          </h2>
          <p className="text-kb-gray leading-relaxed max-w-lg mx-auto">
            「やってみたい！」「たのしい！」を引き出す5つのプログラムで、
            お子さまの発達を多面的にサポートします。
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -64 : 64, y: 44, rotate: i % 2 === 0 ? -3.5 : 3.5 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.08 + i * 0.09 }}
              className="h-full cursor-default"
            >
              {/* hover lives on this inner element so it never fights framer's entrance transform */}
              <div className="group relative flex h-full flex-col rounded-3xl overflow-hidden shadow-[0_22px_48px_-26px_rgba(96,72,20,0.5)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-6 hover:scale-[1.06] hover:z-10 hover:shadow-[0_48px_84px_-26px_rgba(96,72,20,0.62)]">
                {/* Gradient top with big icon */}
                <div
                  className="relative flex items-center justify-center aspect-square overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${p.gradFrom}, ${p.gradTo})` }}
                >
                  <span className="block text-6xl drop-shadow-md transition-transform duration-300 group-hover:scale-[1.35]">
                    <span className="block will-change-transform group-hover:[animation:kb-wiggle_0.6s_ease-in-out]">
                      {p.icon}
                    </span>
                  </span>
                  {/* shine sweep across the gradient on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-[130%] group-hover:translate-x-[130%] transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                </div>

                {/* Light colored bottom */}
                <div className={`${p.light} px-4 py-5 flex-1`}>
                  <p className="font-black text-kb-black text-lg mb-2 text-center">{p.title}</p>
                  <p className="text-xs text-kb-gray leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/program"
            className="inline-block px-8 py-3.5 border-2 border-kb-yellow text-kb-yellow font-bold rounded-full hover:bg-kb-yellow hover:text-white transition-all duration-200 hover:scale-105"
          >
            プログラム詳細を見る →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
