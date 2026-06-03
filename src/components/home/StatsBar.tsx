const stats = [
  { value: '2〜6', unit: '歳', label: '対象年齢' },
  { value: '10', unit: '名', label: '少人数定員' },
  { value: '月〜金', unit: '', label: '9:00〜16:00' },
  { value: '2024', unit: '年11月', label: '開設' },
]

export default function StatsBar() {
  return (
    <section className="bg-white py-10 border-y border-yellow-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <p className="text-4xl font-black text-kb-yellow leading-none">
                {s.value}<span className="text-lg">{s.unit}</span>
              </p>
              <p className="text-sm text-kb-gray font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
