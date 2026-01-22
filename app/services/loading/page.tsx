import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function LoadingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">Погрузо-Разгрузочные Работы</h1>
          <p className="text-gray-600 text-lg">Профессиональные услуги погрузки и разгрузки грузов</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Наша компания предоставляет полный спектр погрузо-разгрузочных работ с использованием современного
            оборудования и специалистов высокой квалификации. Мы обеспечиваем безопасность и целостность вашего груза.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            От компактных посылок до крупногабаритных грузов - мы справимся с грузом любого размера и веса.
            Профессиональный подход гарантирует сохранность товара и соблюдение всех сроков доставки.
          </p>
        </div>
      </main>

      <ExtendedFooter />
      <Footer />
    </div>
  )
}
