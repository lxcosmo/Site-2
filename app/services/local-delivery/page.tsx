import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"
import PricingCalculator from "@/components/pricing-calculator"
import Image from "next/image"

export default function LocalDeliveryPage() {
  const regions = [
    {
      name: "Москве",
      oblast: "Московской области",
      airport: "МАУ",
      coat: "/moscow-coat-of-arms.jpg",
    },
    {
      name: "Калининграде",
      oblast: "Калининградской области",
      airport: "Храброво",
      coat: "/kaliningrad-coat-of-arms.jpg",
    },
    {
      name: "Санкт-Петербурге",
      oblast: "Ленинградской области",
      airport: "Пулково",
      coat: "/saint-petersburg-coat-of-arms.jpg",
    },
    {
      name: "Воронеже",
      oblast: "Воронежской области",
      airport: "Воронеж",
      coat: "/voronezh-coat-of-arms.jpg",
    },
    {
      name: "Нижнем Новгороде",
      oblast: "Новгородской области",
      airport: "Стригино",
      coat: "/nizhny-novgorod-coat-of-arms.jpg",
    },
    {
      name: "Новосибирске",
      oblast: "Новосибирской области",
      airport: "Толмачево",
      coat: "/novosibirsk-coat-of-arms.jpg",
    },
    {
      name: "Казани",
      oblast: "Казанской области",
      airport: "Казань",
      coat: "/kazan-coat-of-arms.jpg",
    },
    {
      name: "Самаре",
      oblast: "Самарской области",
      airport: "Курумоч",
      coat: "/samara-coat-of-arms.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1a2744] mb-4 md:text-3xl text-black">
            Локальные перевозки в регионах
          </h1>
          <p className="text-gray-600 text-lg">Быстрая и надежная доставка внутри регионов</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Мы осуществляем доставку грузов на расстояния от 50 до 500 км до аэропортов вылета, внутри регионов России,
            по городам нашей маршрутной сети.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Осуществляем получение груза в аэропорту назначения и доставку до адреса.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="md:text-[1.62rem] font-bold text-cyan-400 mb-8 text-xs">
            На сегодняшний день мы предлагаем нашим клиентам:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex gap-4 items-center shadow-md">
                <div className="flex-shrink-0 w-20 h-20 bg-white rounded border border-gray-200 flex items-center justify-center">
                  <Image
                    src={region.coat || "/placeholder.svg"}
                    alt={`${region.name} герб`}
                    width={80}
                    height={80}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800">
                    Заберем Ваш груз с адреса в{" "}
                    <span className="text-cyan-400 font-semibold">
                      {region.name}, {region.oblast}
                    </span>{" "}
                    с дальнейшей доставкой до аэропорта{" "}
                    <span className="text-cyan-400 font-semibold">{region.airport}</span> и сдачей на рейс.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <PricingCalculator />

      <ExtendedFooter />
      <Footer />
    </div>
  )
}
