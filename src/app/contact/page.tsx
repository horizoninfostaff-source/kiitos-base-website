import FadeIn from '@/components/ui/FadeIn'
import ContactForm from './ContactForm'

export const metadata = {
  title: 'お問い合わせ | kiitos!BASE',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-20 bg-kb-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base font-semibold text-kb-yellow tracking-[0.25em] uppercase mb-4">Contact</p>
          <h1 className="text-5xl font-black">お問い合わせ</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
            <FadeIn direction="right" className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <p className="text-base text-kb-gray leading-relaxed mb-6">
                    見学・ご相談・採用に関するご質問など、どんなことでもお気軽にご連絡ください。
                    担当者より1〜2営業日以内にご連絡いたします。
                  </p>
                </div>

                <div>
                  <h2 className="text-base font-bold text-kb-black mb-3">お電話でのお問い合わせ</h2>
                  <a
                    href="tel:0474011205"
                    className="flex items-center gap-3 text-kb-black hover:text-kb-yellow transition-colors"
                  >
                    <span className="text-2xl">📞</span>
                    <span className="text-xl font-black">047-401-1205</span>
                  </a>
                </div>

                <div>
                  <h2 className="text-base font-bold text-kb-black mb-3">所在地</h2>
                  <address className="not-italic text-base text-kb-gray space-y-1">
                    <p>〒273-0042</p>
                    <p>千葉県船橋市前貝塚町1007-6</p>
                    <p className="mt-2">東武アーバンパークライン</p>
                    <p>塚田駅 徒歩5分</p>
                    <p className="mt-2">月〜金 9:00〜16:00</p>
                  </address>
                </div>

                <div className="bg-kb-yellow-light rounded-2xl p-6">
                  <h3 className="font-bold text-kb-black mb-2 text-base">🏫 見学について</h3>
                  <p className="text-sm text-kb-gray leading-relaxed">
                    実際の療育の様子を見ていただける見学を随時受け付けています。
                    お子さまと一緒にいらしていただいても構いません。
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1} className="lg:col-span-2">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
