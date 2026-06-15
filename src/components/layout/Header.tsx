'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navItems = [
  { label: '事業所について', href: '/about' },
  { label: '活動プログラム', href: '/program' },
  { label: '一日の流れ', href: '/daily' },
  { label: '採用情報', href: '/recruit' },
  { label: 'アクセス', href: '/access' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-yellow-100/60 border-b border-yellow-100'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="font-black text-kb-yellow text-2xl tracking-tight">kiitos!</span>
            <span className={`font-bold text-lg transition-colors duration-300 ${scrolled ? 'text-kb-black' : 'text-white'}`}>
              BASE
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-300 ${
                  scrolled ? 'text-kb-gray hover:text-kb-black' : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-2 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-kb-yellow text-white hover:bg-kb-yellow-hover'
                  : 'bg-white/15 backdrop-blur-sm border border-white/40 text-white hover:bg-white/25'
              }`}
            >
              お問い合わせ
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニュー"
          >
            <div className="w-5 space-y-1.5">
              <span
                className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-kb-black' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-kb-black' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${scrolled ? 'bg-kb-black' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-yellow-100 px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-kb-gray hover:text-kb-black transition-colors py-3 border-b border-yellow-50"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 px-5 py-3 bg-kb-yellow text-white text-sm font-semibold rounded-full text-center hover:bg-kb-yellow-hover transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  )
}
