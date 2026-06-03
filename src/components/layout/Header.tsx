'use client'

import { useState } from 'react'
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-yellow-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="font-black text-kb-yellow text-2xl tracking-tight">kiitos!</span>
            <span className="font-bold text-kb-black text-lg">BASE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-kb-gray hover:text-kb-black transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 bg-kb-yellow text-white text-sm font-semibold rounded-full hover:bg-kb-yellow-hover transition-colors duration-200"
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
                className={`block h-0.5 bg-kb-black transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 bg-kb-black transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 bg-kb-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
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
