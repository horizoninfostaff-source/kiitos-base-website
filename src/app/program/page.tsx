import FadeIn from '@/components/ui/FadeIn'
import PhotoPlaceholder from '@/components/ui/PhotoPlaceholder'
import Link from 'next/link'

export const metadata = {
  title: '活動プログラム',
  description:
    '運動・あそび・学びを通じて、お子さまの発達の根っこを育てる kiitos!BASE の活動プログラムをご紹介します。',
}

const programs = [
  {
    icon: '🏃',
    color: 'bg-kb-red-light',
    title: '運動',
    desc: '全身運動を行うことで、自分の体をどのように扱うのかがわかるようになります。ボディーコントロールが養われることで、着座姿勢の維持・体幹の向上・物との距離感が掴めるようになります。',
    image: '子どもたちが元気よく運動している、明るく安全な室内の様子',
  },
  {
    icon: '👥',
    color: 'bg-kb-blue-light',
    title: '集団',
    desc: '集団内で生活することで、お友達との関わりが増え、やり取りの中で学ぶことがたくさん出てきます。おもちゃの貸し借りでは「かして」「どうぞ」など、場面に合った言葉を使う練習をします。',
    image: '子どもたちが楽しそうにグループで活動している様子',
  },
  {
    icon: '✂️',
    color: 'bg-kb-green-light',
    title: '製作',
    desc: '様々な道具を使用することで、就学に必要な道具操作のスキルが身につきます。自分で考えて作ることで想像力を養い、指先スキルの向上や物の名前・色形の認識を深めます。',
    image: 'お子さまが楽しそうに工作・製作をしている温かな場面',
  },
  {
    icon: '🌀',
    color: 'bg-kb-purple-light',
    title: '感覚',
    desc: '自分の身体の位置や動き、力の入れ具合を感じる感覚・傾きやスピードを感じる感覚・皮膚を通して感じる触覚等に刺激を与えて感覚を養います。感覚統合で姿勢保持が向上します。',
    image: 'スタッフと一緒に感覚遊びを楽しんでいる穏やかな様子',
  },
  {
    icon: '🎲',
    color: 'bg-kb-yellow-light',
    title: '自由',
    desc: '自由な発想で「好き」を武器に、強みを強化していくことが自由遊びの魅力です。自分のやりたいことを楽しむ時間と、集団内での自由遊びを通じた人間関係・社会性を学ぶ場にもなります。',
    image: '子どもたちが自分の好きな遊びを生き生きと楽しんでいる様子',
  },
]

export default function ProgramPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-kb-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-kb-yellow tracking-[0.25em] uppercase mb-4">Program</p>
          <h1 className="text-5xl font-black">活動プログラム</h1>
        </div>
      </section>

      {/* リード */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-black text-kb-black mb-6">
              たくさんの<span className="text-kb-yellow">「できた！」</span>や<span className="text-kb-yellow">「たのしい！」</span>を引き出す
            </h2>
            <p className="text-base text-kb-gray leading-relaxed max-w-2xl">
              kiitos!BASEでは、5つの楽しいプログラムを提供しています。
              お子さま一人ひとりの発達段階や特性に合わせた個別支援計画のもと、
              集団の中で集中してプログラムに参加できるよう、視覚提示や楽しい空間作りをしながら療育を実施しています。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* プログラム一覧 */}
      <section className="py-4 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {programs.map((program, i) => (
              <FadeIn key={i}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-5`}>
                      {program.icon}
                    </div>
                    <h2 className="text-2xl font-black text-kb-black mb-4">{program.title}</h2>
                    <p className="text-base text-kb-gray leading-relaxed">{program.desc}</p>
                  </div>
                  <PhotoPlaceholder
                    description={program.image}
                    className="w-full aspect-[4/3]"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 公文セクション */}
      <section className="py-20 bg-kb-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl p-10">
              <div className="w-8 h-1 bg-kb-yellow rounded-full mb-6" />
              <h2 className="text-2xl font-black text-kb-black mb-4">「褒め育」× 公文で自己肯定感を育む</h2>
              <p className="text-base text-kb-gray leading-relaxed mb-4">
                当事業所で特に力を注いでいる部分が「褒め育」です。公文を導入し、公文を通して「自己肯定感」を高めることが一番の目的となっております。
              </p>
              <p className="text-base text-kb-gray leading-relaxed">
                「線ひけたね！」「座っていられたね！」——できたことをたくさん褒めて、自信に繋げていきます。
                小さな一歩一歩の積み重ねが、お子さまの大きな成長になります。
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-black text-kb-black mb-4">まずは見学にいらしてください</h2>
            <p className="text-base text-kb-gray mb-8">実際の療育の様子をご覧いただけます。お気軽にお問い合わせください。</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-kb-yellow text-white font-bold rounded-full hover:bg-kb-yellow-hover transition-colors"
            >
              見学・相談を申し込む →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
