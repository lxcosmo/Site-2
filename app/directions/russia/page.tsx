import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"
import RussiaCitiesBlock from "@/components/russia-cities-block"

export default function RussiaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-8">
        <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-6">АВИАПЕРЕВОЗКИ ПО РОССИИ</h1>
        <div className="space-y-6 text-gray-600">
          <p>
            Мы осуществляем авиаперевозки грузов по всей территории Российской Федерации. Наша сеть включает основные
            города и регионы страны.
          </p>
          <p>
            Благодаря развитой логистической инфраструктуре и сотрудничеству с авиакомпаниями, мы гарантируем надежную
            доставку груза в сроки.
          </p>
          <p>
            Основные направления: Москва, Санкт-Петербург, Екатеринбург, Новосибирск, Красноярск, Владивосток и другие
            крупные города России.
          </p>
        </div>
      </main>
      <RussiaCitiesBlock />
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
