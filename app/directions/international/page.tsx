import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"
import InternationalCountriesBlock from "@/components/international-countries-block"

export default function InternationalPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-4">АВИАПЕРЕВОЗКИ МЕЖДУНАРОДНЫЕ</h1>
          <p className="text-gray-600 text-lg">
            Мы предоставляем услуги авиадоставки грузов в страны Европы, Азии и других континентов
          </p>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Мы предоставляем услуги авиадоставки грузов в страны Европы, Азии и других континентов. Имеем опыт работы с
            таможенными процедурами и международными нормативами.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Профессиональный подход к оформлению документации и координация с международными партнерами позволяет нам
            обеспечить безопасную и своевременную доставку.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Основные маршруты: Европейские страны, страны Ближнего Востока, Азиатский регион, и другие направления по
            вашему запросу.
          </p>
        </div>
      </main>
      <InternationalCountriesBlock />
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
