import Header from "@/components/header"
import ExtendedFooter from "@/components/extended-footer"
import Footer from "@/components/footer"

export default function ArtCargoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">Авиаперевозки предметов искусств</h1>
          <p className="text-gray-600 text-lg">
            Специальные условия для перевозки произведений искусства и культурных ценностей
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Бережная доставка предметов искусства с полной страховкой и специальной упаковкой.
          </p>
        </div>
      </main>
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
