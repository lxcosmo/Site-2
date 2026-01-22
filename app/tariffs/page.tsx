import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function TariffsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-4">Тарифы</h1>
          <p className="text-gray-600 text-lg">Актуальные тарифы на авиаперевозки грузов</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Стоимость авиаперевозок зависит от многих факторов: направления, веса, размера груза, его типа и текущей
            конъюнктуры рынка.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Для получения точной стоимости вашей перевозки, пожалуйста, заполните форму расчета стоимости или свяжитесь
            с нашими специалистами.
          </p>
        </div>
      </main>

      <ExtendedFooter />
      <Footer />
    </div>
  )
}
