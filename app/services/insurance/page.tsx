import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function InsurancePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a2744] mb-4 md:text-3xl">Страхование грузов</h1>
          <p className="text-gray-600 text-lg">Полное страховое покрытие для ваших грузов при доставке</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            {"АЭРОСТАР оформляет страхование грузовых перевозок в различных Российских и зарубежных страховых компаниях, надежность которых подтверждена многими годами работы в этой сфере бизнеса. Страхование груза особенно важно, так как ответственность перевозчика за груз лимитирована, и не вся стоимость груза компенсируется при его повреждении или утере. Наши специалисты помогут застраховать ваш груз по наиболее выгодным ставкам."}
          </p>
          
        </div>
      </main>

      <ExtendedFooter />
      <Footer />
    </div>
  )
}
