'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const photos = [
  {
    url: 'https://images.pexels.com/photos/8363102/pexels-photo-8363102.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&dpr=1',
    alt: '先生と子どもたちが楽しく活動する様子',
  },
  {
    url: 'https://images.pexels.com/photos/8087853/pexels-photo-8087853.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
    alt: '先生が子どもに丁寧に教えている様子',
  },
  {
    url: 'https://images.pexels.com/photos/8466775/pexels-photo-8466775.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
    alt: '子どもたちが楽しく過ごす教室の様子',
  },
  {
    url: 'https://images.pexels.com/photos/8422142/pexels-photo-8422142.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
    alt: '幼児が集中して学習に取り組む様子',
  },
  {
    url: 'https://images.pexels.com/photos/8535585/pexels-photo-8535585.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1',
    alt: '先生と幼児が一緒に遊ぶ温かな様子',
  },
]

export default function PhotoGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} className="py-24 bg-kb-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-kb-yellow font-bold tracking-widest text-sm mb-3">DAILY LIFE</p>
          <h2 className="text-4xl font-black text-kb-black">毎日の療育</h2>
          <p className="mt-4 text-kb-gray text-sm">子どもたちのいきいきとした姿をご覧ください</p>
        </motion.div>

        {/* Desktop: asymmetric grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden md:grid grid-cols-3 gap-3"
          style={{ gridTemplateRows: 'repeat(2, 280px)' }}
        >
          {/* Large photo: spans 2 rows */}
          <div className="row-span-2 relative overflow-hidden rounded-2xl">
            <Image
              src={photos[0].url}
              alt={photos[0].alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="33vw"
              loading="lazy"
            />
          </div>
          {/* 4 smaller photos */}
          {photos.slice(1).map((p, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl">
              <Image
                src={p.url}
                alt={p.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="33vw"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Mobile: 2-col grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:hidden grid grid-cols-2 gap-3"
        >
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative aspect-square overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 aspect-[2/1]' : ''}`}
            >
              <Image
                src={p.url}
                alt={p.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
