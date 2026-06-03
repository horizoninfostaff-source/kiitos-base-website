import Link from 'next/link'

const footerLinks = [
  { label: '事業所について', href: '/about' },
  { label: '活動プログラム', href: '/program' },
  { label: '一日の流れ', href: '/daily' },
  { label: '採用情報', href: '/recruit' },
  { label: 'アクセス', href: '/access' },
  { label: 'お問い合わせ', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-kb-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-black text-kb-yellow text-2xl tracking-tight">kiitos!</span>
              <span className="font-bold text-white text-lg">BASE</span>
            </div>
            <div className="w-8 h-0.5 bg-kb-yellow mt-3 mb-5" />
            <p className="text-sm text-gray-400 leading-relaxed">
              株式会社水平線<br />
              児童発達支援
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">Menu</p>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">Contact</p>
            <address className="not-italic text-sm text-gray-400 space-y-1.5">
              <p>〒273-0042</p>
              <p>千葉県船橋市前貝塚町1007-6</p>
              <p className="mt-3">
                <a href="tel:0474011205" className="hover:text-white transition-colors">
                  TEL: 047-401-1205
                </a>
              </p>
              <p>
                <a href="mailto:kiitos.nakaniwa@gmail.com" className="hover:text-white transition-colors">
                  kiitos.nakaniwa@gmail.com
                </a>
              </p>
              <p className="mt-1">最寄り：東武アーバンパークライン 塚田駅 徒歩5分</p>
            </address>
            <Link
              href="/contact"
              className="inline-block mt-5 px-5 py-2 border border-kb-yellow text-kb-yellow text-sm rounded-full hover:bg-kb-yellow hover:text-white transition-all"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-gray-600">
            © 2025 株式会社水平線. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
