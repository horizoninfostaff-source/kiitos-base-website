'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const features = [
  {
    no: '01',
    icon: '🌟',
    photo: 'https://images.pexels.com/photos/8535585/pexels-photo-8535585.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1',
    photoAlt: '先生が子どもと一緒に丁寧に取り組む療育の様子',
    bgColor: 'bg-kb-yellow-light',
    accentColor: 'text-kb-yellow',
    pointColor: 'bg-kb-yellow',
    title: '「褒め育」で自己肯定感を育む',
    subtitle: 'できたことを、たくさん褒める',
    desc: '公文を導入し、「線ひけたね！」「座っていられたね！」と小さなできたを丁寧に認めることで、お子さまの自信と自己肯定感を育てます。',
    points: ['公文導入で学習の土台を形成', 'できたことを必ず言葉で承認', '自己肯定感の向上を目指す'],
  },
  {
    no: '02',
    icon: '📋',
    photo: 'https://images.pexels.com/photos/8422148/pexels-photo-8422148.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1',
    photoAlt: '子どもたちが集団で製作活動に取り組む様子',
    bgColor: 'bg-kb-blue-light',
    accentColor: 'text-kb-blue',
    pointColor: 'bg-kb-blue',
    title: '個別支援計画 × 集団療育',
    subtitle: '一人ひとりに合わせ、集団の中で育てる',
    desc: 'お子さまの発達段階に合わせた個別支援計画をもとに、集団の中でプログラムに参加。視覚提示で安心して集中できる環境を整えます。',
    points: ['入所時アセスメントを丁寧に実施', '定期的な支援計画の見直し', '視覚提示で分かりやすい療育'],
  },
  {
    no: '03',
    icon: '🎯',
    photo: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1',
    photoAlt: '子どもたちが多彩な活動を楽しむ様子',
    bgColor: 'bg-kb-green-light',
    accentColor: 'text-kb-green',
    pointColor: 'bg-kb-green',
    title: '発達支援の5領域をバランスよく',
    subtitle: '厚労省ガイドラインに基づく全人的支援',
    desc: '健康・生活 / 運動・感覚 / 認知・行動 / 言語・コミュニケーション / 人間関係・社会性の5領域を網羅。就学への土台を丁寧に作ります。',
    points: ['厚労省2024年ガイドライン準拠', '5つのプログラムで全領域カバー', '就学に向けた準備を丁寧に'],
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="overflow-hidden">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-kb-yellow font-bold tracking-widest text-sm mb-3">OUR FEATURES</p>
          <h2 className="text-4xl font-black text-kb-black">
            kiitos!BASEが選ばれる<br className="sm:hidden" />３つの理由
          </h2>
        </motion.div>
      </div>

      {/* Alternating photo + text rows */}
      {features.map((f, i) => {
        const isOdd = i % 2 === 1
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]"
          >
            {/* Photo side */}
            <div className={`relative h-72 lg:h-full overflow-hidden ${isOdd ? 'lg:order-last' : ''}`}>
              <Image
                src={f.photo}
                alt={f.photoAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Feature number badge */}
              <div className="absolute top-5 left-5 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
                <span className="text-sm font-black text-kb-yellow">{f.no}</span>
              </div>
            </div>

            {/* Text side */}
            <div className={`${f.bgColor} flex flex-col justify-center p-10 lg:p-16 ${isOdd ? 'lg:order-first' : ''}`}>
              <span className="text-4xl mb-4">{f.icon}</span>
              <p className={`text-xs font-bold tracking-wider mb-3 ${f.accentColor}`}>{f.subtitle}</p>
              <h3 className="text-3xl font-black text-kb-black mb-4 leading-snug">{f.title}</h3>
              <p className="text-kb-gray leading-relaxed mb-7 text-base max-w-md">{f.desc}</p>
              <ul className="space-y-3">
                {f.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-3 text-base text-kb-gray">
                    <span className={`w-6 h-6 rounded-full ${f.pointColor} text-white flex items-center justify-center flex-shrink-0 text-xs font-black`}>
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )
      })}
    </section>
  )
}
