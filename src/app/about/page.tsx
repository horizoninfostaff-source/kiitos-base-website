import FadeIn from '@/components/ui/FadeIn'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder'
import Link from 'next/link'

export const metadata = {
  title: '事業所について | kiitos!BASE',
}

const values = [
  { title: '「ありがとう」を想像できる支援', desc: '「ありがとう」と言える場面を作り出せるよう、コミュニケーション力・社会性を丁寧に育てます。' },
  { title: '第二の家庭を目指す', desc: '「ありがとう」を通じて幸せになれる、安心できる第二の家庭のような場所を目指します。' },
  { title: '「褒め育」で自己肯定感を', desc: '公文を導入し、小さなできたをたくさん褒めることで自信と自己肯定感を育みます。' },
  { title: '個別支援 × 集団の中で', desc: 'お子さまの発達段階・特性に合わせた計画のもと、集団の中でのびのびと成長できる環境を作ります。' },
]

const info = [
  ['事業所名', 'kiitos!BASE'],
  ['サービス種別', '児童発達支援'],
  ['対象年齢', '2〜6歳（小学校入学前の未就学児）'],
  ['定員', '10名'],
  ['運営法人', '株式会社水平線'],
  ['住所', '〒273-0042 千葉県船橋市前貝塚町1007-6'],
  ['電話番号', '047-401-1205'],
  ['メール', 'kiitos.nakaniwa@gmail.com'],
  ['最寄り駅', '東武アーバンパークライン 塚田駅 徒歩5分'],
  ['営業時間', '月〜金 9:00〜16:00'],
  ['開設', '2024年11月'],
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-kb-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-kb-yellow tracking-[0.25em] uppercase mb-4">About</p>
          <h1 className="text-5xl font-black">事業所について</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right">
              <h2 className="text-3xl font-black text-kb-black mb-6">
                「kiitos」は<br /><span className="text-kb-yellow">フィンランド語で「ありがとう」</span>
              </h2>
              <div className="space-y-4 text-kb-gray leading-relaxed text-base">
                <p>
                  心身の根っこをすくすくのばしていく土台作りをお手伝いします。
                  「ありがとう」を想像できる支援を通じて、幸せになれる第二の家庭を目指します。
                </p>
                <p>
                  2〜6歳の未就学児のかけがえない時期を、安心と楽しさと成長で満たす。
                  それがkiitos!BASEの使命です。
                </p>
                <p>
                  一人ひとりの「できた！」を一緒に喜び、小学校入学への土台をつくります。
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <PhotoPlaceholder
                description="事業所の外観または内観。明るく温かみのある療育の空間。"
                className="w-full aspect-[4/3]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 bg-kb-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-black text-kb-black">私たちが大切にしていること</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-8 h-1 bg-kb-yellow rounded-full mb-4" />
                  <h3 className="text-lg font-bold text-kb-black mb-3">{v.title}</h3>
                  <p className="text-kb-gray text-base leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-black text-kb-black">発達支援の5領域</h2>
            <p className="mt-4 text-kb-gray leading-relaxed max-w-2xl">
              厚生労働省が2024年3月に提示した「児童発達支援ガイドライン」の5領域に沿って、
              バランスよく課題にアプローチします。
            </p>
          </FadeIn>
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: '🏃', label: '運動・感覚', desc: '筋力・着座姿勢・指先運動・全身運動' },
                { icon: '❤️', label: '健康・生活', desc: '体力作り・生活リズム・身辺自立' },
                { icon: '🧠', label: '認知・行動', desc: '物の名前・色形・数字・概念形成' },
                { icon: '🗣️', label: '言語・コミュニケーション', desc: '単語理解・指示・要求・言語獲得' },
                { icon: '🤝', label: '人間関係・社会性', desc: '順番・ルール・友達との交流・集団参加' },
              ].map((item, i) => (
                <div key={i} className="bg-kb-bg rounded-2xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="font-black text-kb-black text-base mb-2">{item.label}</p>
                  <p className="text-sm text-kb-gray leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-kb-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-10">
            <h2 className="text-3xl font-black text-kb-black">施設概要</h2>
          </FadeIn>
          <FadeIn>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {info.map(([label, value], i) => (
                <div key={i} className={`flex gap-4 px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-kb-bg'}`}>
                  <p className="text-sm font-semibold text-kb-black w-32 shrink-0">{label}</p>
                  <p className="text-base text-kb-gray">{value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn className="mt-10">
            <Link
              href="/access"
              className="inline-block px-7 py-3.5 bg-kb-yellow text-white font-semibold rounded-full hover:bg-kb-yellow-hover transition-colors"
            >
              アクセスを見る →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
