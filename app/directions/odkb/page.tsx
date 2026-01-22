import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"
import OdkbCountriesBlock from "@/components/odkb-countries-block"

export default function OdkbPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-4">АВИАПЕРЕВОЗКИ В СТРАНЫ ОДКБ</h1>
          <p className="text-gray-600 text-lg">
            Организация авиадоставки грузов в государства - члены Организации договора о коллективной безопасности
          </p>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Организация авиадоставки грузов в государства - члены Организации договора о коллективной безопасности
            (ОДКБ). Беларусь, Казахстан, Киргизия, Армения, Таджикистан.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Мы имеем установленные маршруты и согласованные процедуры для быстрого и эффективного перевоза грузов в эти
            страны.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Благодаря упрощенным таможенным процедурам и наличию надежных партнеров, мы обеспечиваем конкурентные цены и
            высокую надежность доставки.
          </p>
        </div>
      </main>
      <OdkbCountriesBlock />
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
