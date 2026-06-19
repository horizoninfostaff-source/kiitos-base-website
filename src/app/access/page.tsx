import FadeIn from '@/components/ui/FadeIn'
import Link from 'next/link'

export const metadata = {
  title: 'アクセス',
  description:
    '千葉県船橋市前貝塚町1007-6。東武アーバンパークライン塚田駅から徒歩5分。kiitos!BASEへのアクセス・地図のご案内。',
}

export default function AccessPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-kb-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-kb-yellow tracking-[0.25em] uppercase mb-4">Access</p>
          <h1 className="text-5xl font-black">アクセス</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeIn direction="right">
              <div className="w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1619.85!2d139.968!3d35.729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z44CSMjczLTAwNDIg5Y2X6JGJ55yM5boF5qmL5biC5YmN6LGh5aGU55S677yR77yQ77yQ77yX4oiS77yY!5e0!3m2!1sja!2sjp!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="kiitos!BASE アクセスマップ"
                />
              </div>
              <p className="text-sm text-kb-gray mt-3 text-center">
                ※ 住所「船橋市前貝塚町1007-6」で検索してください
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <h2 className="text-2xl font-black text-kb-black mb-8">所在地・連絡先</h2>
              <address className="not-italic space-y-5 text-kb-gray">
                <div className="flex gap-4">
                  <span className="text-kb-yellow font-bold w-20 flex-shrink-0 text-base">住所</span>
                  <span className="text-base">〒273-0042<br />千葉県船橋市前貝塚町1007-6</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-kb-yellow font-bold w-20 flex-shrink-0 text-base">電話</span>
                  <a href="tel:0474011205" className="text-base hover:text-kb-yellow transition-colors">
                    047-401-1205
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="text-kb-yellow font-bold w-20 flex-shrink-0 text-base">メール</span>
                  <a href="mailto:kiitos.nakaniwa@gmail.com" className="text-base hover:text-kb-yellow transition-colors break-all">
                    kiitos.nakaniwa@gmail.com
                  </a>
                </div>
                <div className="flex gap-4">
                  <span className="text-kb-yellow font-bold w-20 flex-shrink-0 text-base">営業時間</span>
                  <span className="text-base">月〜金 9:00〜16:00</span>
                </div>
              </address>

              <div className="mt-10 space-y-4">
                <div className="flex gap-4 p-5 bg-kb-bg rounded-xl">
                  <span className="text-2xl">🚃</span>
                  <div>
                    <p className="font-bold text-kb-black text-base">電車でお越しの場合</p>
                    <p className="text-base text-kb-gray mt-1">
                      東武アーバンパークライン（野田線）<br />
                      <span className="font-bold">塚田駅</span> 徒歩約5分
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 bg-kb-bg rounded-xl">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-bold text-kb-black text-base">お車でお越しの場合</p>
                    <p className="text-base text-kb-gray mt-1">駐車場についてはお問い合わせください。</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3.5 bg-kb-yellow text-white font-semibold rounded-full hover:bg-kb-yellow-hover transition-colors"
                >
                  見学・お問い合わせ →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
