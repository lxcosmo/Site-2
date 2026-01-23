import Header from "@/components/header"
import ExtendedFooter from "@/components/extended-footer"
import Footer from "@/components/footer"

export default function DangerousCargoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Авиаперевозки опасных грузов
          </h1>
          <p className="text-gray-600 text-lg">
            Профессиональное и безопасное транспортирование опасных грузов
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Мы обладаем всеми необходимыми лицензиями и сертификатами для перевозки опасных грузов
            согласно международным стандартам IATA. <br /><br />
            Наши специалисты более 10 лет занимаются оформлением и перевозкой всевозможных видов
            опасных грузов. Это огромный опыт! Мы оформляли и перевозили такие виды опасного груза,
            как ядерное топливо, вирусы для лабораторий для изучения, инфекционные вещества,
            биологические образцы для клинических исследований, взрывчатые вещества всех типов и
            многое другое.
          </p>
        </div>
      </main>
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
