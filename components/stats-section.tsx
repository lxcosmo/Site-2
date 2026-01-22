export default function StatsSection() {
  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-10">
          <h2 className="text-[1.35rem] md:text-[1.62rem] font-bold text-center text-balance text-[#1a2744] border-b-[1.5px] border-cyan-400 inline-block pb-2">
            МЕЖДУНАРОДНАЯ ТРАНСПОРТНАЯ КОМПАНИЯ <span className="text-cyan-400">"АЭРОСТАР"</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">25</div>
            <div className="bg-cyan-400 text-white px-3 py-1.5 inline-block text-xs">ЛЕТ ОПЫТА В ЛОГИСТИКЕ</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">1000</div>
            <div className="bg-cyan-400 text-white px-3 py-1.5 inline-block text-xs">ГОРОДОВ РОССИИ И СНГ</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">120</div>
            <div className="bg-cyan-400 text-white px-3 py-1.5 inline-block text-xs">СТРАН МИРА</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2">250</div>
            <div className="bg-cyan-400 text-white px-3 py-1.5 inline-block text-xs">ТОНН ГРУЗОВ КАЖДЫЙ МЕСЯЦ</div>
          </div>
        </div>
      </div>
    </section>
  )
}
