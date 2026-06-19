import FadeIn from '@/components/ui/FadeIn'
import Link from 'next/link'

export const metadata = {
  title: '採用情報',
  description:
    '児童発達支援管理責任者（サビ管）ほか、kiitos!BASEで一緒に働く仲間を募集しています。',
}

const positions = [
  {
    title: '児童発達支援管理責任者（サビ管）',
    type: '正社員',
    requirements: ['相談支援専門員・社会福祉士・精神保健福祉士・保育士いずれかの資格', '5年以上の実務経験（資格による）', '普通自動車免許'],
    work: '個別支援計画の作成・管理・保護者対応・スタッフマネジメント・療育プログラムの企画など',
  },
  {
    title: '児童指導員・保育士',
    type: '正社員・パート',
    requirements: ['保育士・社会福祉士・教員免許いずれかの資格（目安）', '資格がなくても経験者歓迎', '普通自動車免許（歓迎）'],
    work: 'お子さまの療育プログラムの実施・個別支援・保護者対応・記録作業など',
  },
  {
    title: '療育スタッフ（支援員）',
    type: 'パート',
    requirements: ['資格不問・経験不問', '子どもに関わる仕事に興味がある方', '普通自動車免許（歓迎）'],
    work: '療育活動の補助・送迎サポート・記録補助など',
  },
]

const benefits = [
  { icon: '📅', title: '週休2日制', desc: '土日・祝日のシフトは相談可' },
  { icon: '🌱', title: '研修制度', desc: '未経験でも安心の教育環境' },
  { icon: '🚗', title: '交通費支給', desc: '規定内で支給' },
  { icon: '💬', title: '相談しやすい職場', desc: '少人数でアットホームな雰囲気' },
]

export default function RecruitPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-kb-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-kb-yellow tracking-[0.25em] uppercase mb-4">Recruit</p>
          <h1 className="text-5xl font-black">採用情報</h1>
          <p className="mt-4 text-gray-400 text-lg max-w-xl">
            子どもの根っこを育てる仕事を、一緒にしませんか？
            経験・資格は問いません。子どもが好きな方、大歓迎です。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-black text-kb-black">募集職種</h2>
          </FadeIn>

          <div className="space-y-6">
            {positions.map((pos, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-kb-bg rounded-2xl p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <h3 className="text-2xl font-black text-kb-black">{pos.title}</h3>
                    <span className="text-sm text-kb-yellow bg-kb-yellow-light px-3 py-1 rounded-full font-semibold">
                      {pos.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-bold text-kb-gray uppercase tracking-wider mb-3">応募要件</p>
                      <ul className="space-y-2">
                        {pos.requirements.map((r, j) => (
                          <li key={j} className="text-base text-kb-gray flex items-start gap-2">
                            <span className="text-kb-yellow mt-0.5 flex-shrink-0">•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-kb-gray uppercase tracking-wider mb-3">業務内容</p>
                      <p className="text-base text-kb-gray">{pos.work}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-6">
            <p className="text-sm text-kb-gray">
              ※ 給与・勤務時間・詳細条件は面談時にご説明します。お気軽にお問い合わせください。
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-kb-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-black text-kb-black">働く環境</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                  <div className="text-4xl mb-3">{b.icon}</div>
                  <p className="font-bold text-kb-black text-sm mb-1">{b.title}</p>
                  <p className="text-sm text-kb-gray">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-black text-kb-black mb-4">まずはお気軽にご連絡を</h2>
            <p className="text-base text-kb-gray mb-8">
              採用に関するご質問・エントリーはお問い合わせフォームからどうぞ。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-kb-yellow text-white font-bold rounded-full hover:bg-kb-yellow-hover transition-colors"
            >
              採用エントリー・お問い合わせ →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
