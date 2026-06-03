'use client'

import { useState } from 'react'

const INQUIRY_TYPES = ['見学・体験のご相談', 'サービスに関するご質問', '採用エントリー', 'その他']

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    type: '',
    name: '',
    kana: '',
    phone: '',
    email: '',
    city: '',
    childAge: '',
    preferredDate1: '',
    preferredDate2: '',
    message: '',
  })

  const set = (key: string, value: string) => setForm({ ...form, [key]: value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-kb-yellow-light rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-kb-yellow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-kb-black mb-4">送信が完了しました</h2>
        <p className="text-kb-gray leading-relaxed">
          お問い合わせいただきありがとうございます。<br />
          担当者より折り返しご連絡いたします（1〜2営業日以内）。
        </p>
      </div>
    )
  }

  const isVisit = form.type === '見学・体験のご相談'
  const isRecruit = form.type === '採用エントリー'
  const isQuestion = form.type === 'サービスに関するご質問'
  const isOther = form.type === 'その他'
  const selected = isVisit || isRecruit || isQuestion || isOther

  const inputClass = 'w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-kb-black placeholder:text-gray-300 focus:outline-none focus:border-kb-yellow transition-colors'
  const labelClass = 'block text-sm font-semibold text-kb-black mb-2'
  const required = <span className="text-kb-yellow">*</span>

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className={labelClass}>お問い合わせ種別 {required}</label>
        <div className="grid grid-cols-2 gap-2">
          {INQUIRY_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => set('type', t)}
              className={`px-4 py-3 text-sm rounded-xl border-2 text-left transition-all ${
                form.type === t
                  ? 'border-kb-yellow bg-kb-yellow text-white font-semibold'
                  : 'border-gray-200 text-kb-gray hover:border-kb-yellow hover:bg-kb-yellow hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <>
          {(isVisit || isRecruit) && (
            <div>
              <label className={labelClass}>フリガナ {required}</label>
              <input
                type="text"
                required
                value={form.kana}
                onChange={(e) => set('kana', e.target.value)}
                placeholder="ヤマダ タロウ"
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label className={labelClass}>
              {isVisit ? '保護者様のお名前' : 'お名前'} {required}
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="山田 太郎"
              className={inputClass}
            />
          </div>

          {isVisit && (
            <div>
              <label className={labelClass}>お子さまの年齢</label>
              <input
                type="text"
                value={form.childAge}
                onChange={(e) => set('childAge', e.target.value)}
                placeholder="例：3歳（年少）"
                className={inputClass}
              />
            </div>
          )}

          {(isVisit || isRecruit) && (
            <div>
              <label className={labelClass}>電話番号 {required}</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="000-0000-0000"
                className={inputClass}
              />
            </div>
          )}

          <div>
            <label className={labelClass}>メールアドレス {required}</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="example@email.com"
              className={inputClass}
            />
          </div>

          {isVisit && (
            <div>
              <label className={labelClass}>お住まいの市区町村 {required}</label>
              <input
                type="text"
                required
                value={form.city}
                onChange={(e) => set('city', e.target.value)}
                placeholder="例：船橋市"
                className={inputClass}
              />
            </div>
          )}

          {isVisit && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>見学希望日（第一希望）</label>
                <input
                  type="date"
                  value={form.preferredDate1}
                  onChange={(e) => set('preferredDate1', e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>見学希望日（第二希望）</label>
                <input
                  type="date"
                  value={form.preferredDate2}
                  onChange={(e) => set('preferredDate2', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>
          )}

          <div>
            <label className={labelClass}>
              メッセージ
              {isVisit || isRecruit
                ? <span className="text-kb-gray font-normal ml-1">（任意）</span>
                : <> {required}</>
              }
            </label>
            <textarea
              required={!isVisit && !isRecruit}
              rows={5}
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              placeholder={
                isRecruit
                  ? '志望動機や自己PRなどをご記入ください'
                  : isVisit
                  ? 'お子さまの特性やご要望など、事前にお知らせいただけることがあればご記入ください'
                  : 'ご質問・ご相談内容をご記入ください'
              }
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-kb-yellow text-white font-semibold rounded-full hover:bg-kb-yellow-hover transition-colors text-base"
          >
            送信する →
          </button>
          <p className="text-xs text-kb-gray text-center">
            ※ 送信後、1〜2営業日以内にご連絡いたします
          </p>
        </>
      )}
    </form>
  )
}
