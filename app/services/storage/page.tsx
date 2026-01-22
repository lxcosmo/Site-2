import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"

export default function StoragePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">Складское хранение</h1>
          <p className="text-gray-600 text-lg">Надежное хранение грузов на современных складских объектах</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Мы предоставляем услуги складского хранения в специально оборудованных помещениях с контролем температуры и
            влажности. Наши склады соответствуют международным стандартам безопасности и хранения грузов.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Полный спектр услуг: учет, инвентаризация, комплектация заказов и отправка грузов по всей России и за
            границу. Гибкие тарифы в зависимости от объема и типа груза.
          </p>
        </div>
      </main>

      <ExtendedFooter />
      <Footer />
    </div>
  )
}
