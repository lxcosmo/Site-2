import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function AgentsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-4">Агентам</h1>
          <p className="text-gray-600 text-lg">
            Информация для агентов компании АЭРОСТАР по условиям сотрудничества и партнёрству.
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Выгодные условия партнёрства и сотрудничества для наших агентов.
          </p>
        </div>
      </main>
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
