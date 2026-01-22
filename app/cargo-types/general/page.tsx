import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function GeneralCargoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">Авиаперевозки генеральных грузов</h1>
          <p className="text-gray-600 text-lg">
            Специализированные услуги по авиаперевозкам генеральных грузов по всему миру
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Полный спектр услуг для авиаперевозки генеральных грузов любого объёма и назначения.
          </p>
        </div>
      </main>
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
