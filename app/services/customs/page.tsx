import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CustomsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-4">Таможенное оформление</h1>
          <p className="text-gray-600 text-lg">
            {""}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Наша компания предоставляет профессиональные услуги таможенного оформления для всех видов грузов. Мы
            работаем с международными стандартами и обеспечиваем полное соответствие таможенным требованиям Российской
            Федерации и международных партнеров.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Наша команда опытных таможенных брокеров поможет вам быстро и эффективно оформить документацию, минимизируя
            затраты времени и средств на прохождение таможенных процедур.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
