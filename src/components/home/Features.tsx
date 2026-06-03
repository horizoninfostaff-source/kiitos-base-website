'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    no: '01',
    icon: '🌟',
    gradFrom: '#FFB300',
    gradTo: '#F59E0B',
    title: '「褒め育」で自己肯定感を育む',
    subtitle: 'できたことを、たくさん褒める',
    desc: '公文を導入し、「線ひけたね！」「座っていられたね！」と小さなできたを丁寧に認めることで、お子さまの自信と自己肯定感を育てます。',
    points: ['公文導入で学習の土台を形成', 'できたことを必ず言葉で承認', '自己肯定感の向上を目指す'],
    checkBg: 'bg-kb-yellow',
    border: 'border-yellow-100',
  },
  {
    no: '02',
    icon: '📋',
    gradFrom: '#64B5F6',
    gradTo: '#38BDF8',
    title: '個別支援計画 × 集団療育',
    subtitle: '一人ひとりに合わせ、集団の中で育てる',
    desc: 'お子さまの発達段階に合わせた個別支援計画をもとに、集団の中でプログラムに参加。視覚提示で安心して集中できる環境を整えます。',
    points: ['入所時アセスメントを丁寧に実施', '定期的な支援計画の見直し', '視覚提示で分かりやすい療育'],
    checkBg: 'bg-kb-blue',
    border: 'border-blue-100',
  },
  {
    no: '03',
    icon: '🎯',
    gradFrom: '#81C784',
    gradTo: '#34D399',
    title: '発達支援の5領域をバランスよく',
    subtitle: '厚労省ガイドラインに基づく全人的支援',
    desc: '健康・生活 / 運動・感覚 / 認知・行動 / 言語・コミュニケーション / 人間関係・社会性の5領域を網羅。就学への土台を丁寧に作ります。',
    points: ['厚労省2024年ガイドライン準拠', '5つのプログラムで全領域カバー', '就学に向けた準備を丁寧に'],
    checkBg: 'bg-kb-green',
    border: 'border-green-100',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-kb-yellow font-bold tracking-widest text-sm mb-3">OUR FEATURES</p>
          <h2 className="text-4xl font-black text-kb-black">
            kiitos!BASEが<br className="sm:hidden" />選ばれる３つの理由
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-4 transition-all duration-300 border ${f.border} group cursor-default`}
            >
              {/* Gradient top */}
              <div
                className="relative flex flex-col items-center justify-center py-12 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${f.gradFrom}, ${f.gradTo})` }}
              >
                <span className="absolute top-2 right-4 text-8xl font-black text-white/12 leading-none select-none">
                  {f.no}
                </span>
                <div className="text-7xl group-hover:scale-115 transition-transform duration-400 relative z-10 drop-shadow-md">
                  {f.icon}
                </div>
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/8 transition-colors duration-300" />
              </div>

              {/* White bottom */}
              <div className="bg-white p-7">
                <p className="text-xs font-bold text-kb-gray-light tracking-wider mb-2">{f.subtitle}</p>
                <h3 className="text-xl font-black text-kb-black mb-4 leading-snug">{f.title}</h3>
                <p className="text-sm text-kb-gray leading-relaxed mb-5">{f.desc}</p>
                <ul className="space-y-2.5">
                  {f.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-kb-gray">
                      <span className={`w-5 h-5 rounded-full ${f.checkBg} text-white flex items-center justify-center flex-shrink-0 text-xs font-black`}>
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
