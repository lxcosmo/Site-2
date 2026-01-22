import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function AboutCompanyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 max-w-[1200px] mx-auto px-4 py-12 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-6">О компании</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>Информация о компании...</p>
        </div>
      </main>
      <ExtendedFooter />
      <Footer />
    </div>
  )
}
