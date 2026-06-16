'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const HERO_PHOTO = 'https://images.pexels.com/photos/8613057/pexels-photo-8613057.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1'
const MAIN_PHOTO = 'https://images.pexels.com/photos/8441831/pexels-photo-8441831.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1'

const surroundPhotos = [
  {
    url: 'https://images.pexels.com/photos/7869800/pexels-photo-7869800.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1',
    initX: -200, initY: 120, initRotate: -8,
    finalX: 10, finalY: 15, finalRotate: 8, z: 2,
  },
  {
    url: 'https://images.pexels.com/photos/8430351/pexels-photo-8430351.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1',
    initX: 180, initY: 110, initRotate: 8,
    finalX: 15, finalY: 0, finalRotate: -5, z: 3,
  },
  {
    url: 'https://images.pexels.com/photos/8363052/pexels-photo-8363052.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1',
    initX: -160, initY: 100, initRotate: -8,
    finalX: -20, finalY: -5, finalRotate: 6.5, z: 4,
  },
  {
    url: 'https://images.pexels.com/photos/13418660/pexels-photo-13418660.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&dpr=1',
    initX: 140, initY: 90, initRotate: 8,
    finalX: -5, finalY: 0, finalRotate: -9, z: 5,
  },
]

const CARD_W = 320
const CARD_H = 400
const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98]

export default function LoadingAnimation() {
  const [phase, setPhase] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    // Self-review / screenshot escape hatch: ?nointro skips the intro entirely.
    if (typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('nointro')) {
      const t = setTimeout(() => setShow(false), 0)
      return () => clearTimeout(t)
    }

    document.body.style.overflow = 'hidden'

    const timers = [
      setTimeout(() => setPhase(1), 350),   // spinner → main photo
      setTimeout(() => setPhase(2), 1600),  // surround photos fan out
      setTimeout(() => setPhase(3), 4000),  // last photo rises
      setTimeout(() => setPhase(4), 5000),  // expansion to fullscreen
      setTimeout(() => {
        setShow(false)
        setTimeout(() => { document.body.style.overflow = '' }, 500)
      }, 6000),
    ]

    return () => {
      timers.forEach(clearTimeout)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[9999] overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: '#FFFDF0' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* ① スピナー */}
          <AnimatePresence>
            {phase === 0 && (
              <motion.div
                key="spinner"
                className="absolute w-20 h-20 rounded-full border-2"
                style={{ borderColor: '#FFB300', borderTopColor: 'transparent' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              />
            )}
          </AnimatePresence>

          {/* ②③ 写真スタック */}
          <AnimatePresence>
            {phase >= 1 && phase < 4 && (
              <motion.div
                key="photo-stack"
                className="relative"
                style={{ width: CARD_W, height: CARD_H }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
              >
                {/* 周囲の写真（img2〜5） */}
                {surroundPhotos.map((p, i) => (
                  <motion.div
                    key={`s${i}`}
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border-[3px] border-white"
                    style={{ zIndex: p.z }}
                    initial={{ opacity: 0, x: p.initX, y: p.initY, rotate: p.initRotate }}
                    animate={
                      phase >= 2
                        ? { opacity: 1, x: p.finalX, y: p.finalY, rotate: p.finalRotate }
                        : { opacity: 0, x: p.initX, y: p.initY, rotate: p.initRotate }
                    }
                    transition={{ duration: 0.5, delay: i * 0.6, ease: EASE }}
                  >
                    <Image
                      src={p.url}
                      alt=""
                      fill
                      className="object-cover"
                      loading="eager"
                      sizes="320px"
                    />
                  </motion.div>
                ))}

                {/* メイン写真（img1）：下からスライドイン＋回転修正 */}
                <motion.div
                  key="main-photo"
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-[3px] border-white"
                  style={{ zIndex: 1 }}
                  initial={{ opacity: 0, y: 80, rotate: -8 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  <Image
                    src={MAIN_PHOTO}
                    alt=""
                    fill
                    className="object-cover"
                    priority
                    sizes="320px"
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ④⑤ 全画面展開写真（img-last → active） */}
          {phase >= 3 && (
            <motion.div
              className="absolute overflow-hidden"
              style={{ top: '50%', left: '50%', zIndex: 50 }}
              initial={{
                width: CARD_W,
                height: CARD_H,
                x: '-50%',
                y: '-50%',
                borderRadius: 16,
                opacity: 0,
                marginTop: 60,
              }}
              animate={
                phase >= 4
                  ? {
                      width: '110vw',
                      height: '110vh',
                      x: '-50%',
                      y: '-50%',
                      borderRadius: 0,
                      opacity: 1,
                      marginTop: 0,
                    }
                  : {
                      width: CARD_W,
                      height: CARD_H,
                      x: '-50%',
                      y: '-50%',
                      borderRadius: 16,
                      opacity: 1,
                      marginTop: 0,
                    }
              }
              transition={
                phase >= 4
                  ? { duration: 0.85, ease: EASE }
                  : { duration: 0.8, ease: EASE }
              }
            >
              <Image
                src={HERO_PHOTO}
                alt=""
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {phase >= 4 && (
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
