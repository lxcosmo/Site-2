import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function SchemePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-12 w-full">
        <div className="mb-8">
          <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-4">Схема работы</h1>
          <p className="text-gray-600 text-lg">
            Ознакомьтесь со схемой работы компании АЭРОСТАР и процессом обработки ваших грузов.
          </p>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Прозрачный и понятный процесс взаимодействия с нашей компанией.
          </p>
        </div>
      </main>
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
