import FadeIn from '@/components/ui/FadeIn'
import Link from 'next/link'

export const metadata = {
  title: '一日の流れ | kiitos!BASE',
}

const schedule = [
  { time: '9:00', icon: '🌞', label: '開所・送迎・到着', desc: '送迎または保護者様にお連れいただきます。持ち物の確認・着替えをします。' },
  { time: '9:30', icon: '📅', label: '朝の準備・朝の会', desc: '今日のスケジュールを確認します。視覚支援を使って一日の見通しをもち、安心してスタート。' },
  { time: '10:00', icon: '🏃', label: '午前プログラム', desc: '運動・製作・感覚など。集中力のある午前中に、個別支援計画に沿ったプログラムに取り組みます。' },
  { time: '11:30', icon: '🍱', label: '昼食・排泄', desc: 'みんなで楽しく昼食タイム。食事・排泄の身辺自立のトレーニングも兼ねています。' },
  { time: '12:30', icon: '🌿', label: '休憩・自由遊び', desc: '午後の活動に向けてゆっくり休憩。好きな遊びで過ごす自由時間です。' },
  { time: '13:30', icon: '👥', label: '午後プログラム', desc: '集団活動・コミュニケーション・自由遊びなど。友達との関わりを大切にした活動を行います。' },
  { time: '15:00', icon: '🌟', label: '帰りの会・振り返り', desc: '今日のできたことをたくさん褒めて振り返ります。達成感をもって一日を終えましょう。' },
  { time: '15:30〜16:00', icon: '🏠', label: 'お迎え・送迎・降所', desc: '保護者様のお迎え、または送迎を行います。16:00に閉所となります。' },
]

export default function DailyPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-kb-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-kb-yellow tracking-[0.25em] uppercase mb-4">Daily Schedule</p>
          <h1 className="text-5xl font-black">一日の流れ</h1>
          <p className="mt-4 text-gray-400 text-lg">月〜金曜日 9:00〜16:00</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-10">
            <p className="text-base text-kb-gray leading-relaxed max-w-2xl">
              安心して楽しく過ごせるよう、毎日のルーティンを大切にしています。
              見通しをもって過ごせることが、お子さまの安心につながります。
            </p>
          </FadeIn>

          <div className="space-y-3 max-w-2xl">
            {schedule.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex gap-4 bg-kb-bg rounded-xl p-5">
                  <div className="w-12 h-12 bg-kb-yellow-light rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="text-xs font-bold text-kb-yellow bg-kb-yellow-light px-2 py-0.5 rounded-full">{item.time}</span>
                      <span className="font-black text-kb-black text-base">{item.label}</span>
                    </div>
                    <p className="text-base text-kb-gray">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12">
            <div className="bg-kb-yellow-light rounded-2xl p-8">
              <h3 className="font-bold text-kb-black mb-3 text-base">📌 ご利用にあたって</h3>
              <ul className="text-base text-kb-gray space-y-2">
                <li>・昼食はお弁当持参をお願いしています</li>
                <li>・送迎については、お申し込み時にご相談ください</li>
                <li>・活動内容は発達段階や季節によって変わります</li>
                <li>・詳しい内容については担当者にお問い合わせください</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-kb-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-black text-kb-black mb-4">ご不明な点はお気軽に</h2>
            <p className="text-base text-kb-gray mb-8">見学・体験利用も受け付けています。</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-kb-yellow text-white font-bold rounded-full hover:bg-kb-yellow-hover transition-colors"
            >
              お問い合わせ・見学申し込み →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
