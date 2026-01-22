import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function PharmaceuticalRussiaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Перевозка медицинского оборудования в регионы РФ
          </h1>
          <div className="w-full rounded-lg overflow-hidden mb-8">
            <img
              src="/pharmaceutical-cargo.jpg"
              alt="Медицинское оборудование"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-sm text-slate-500 mb-4">03 марта</p>
            <p>Содержание новости...</p>
          </div>
        </div>
      </main>
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
