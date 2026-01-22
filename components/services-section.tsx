import Link from "next/link"
import { Package, Shield, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Авиаперевозки",
      subtitle: "Генеральных грузов",
      link: "/cargo-types/general",
    },
    {
      icon: null,
      image: "/images/cargo-danger.jpg",
      title: "Авиаперевозки",
      subtitle: "опасных грузов",
      link: "/cargo-types/dangerous",
    },
    {
      icon: null,
      image: "/images/cargo-ati.jpg",
      title: "Авиаперевозки",
      subtitle: "Авиационно-Технического Имущества",
      link: "/cargo-types/ati",
    },
    {
      icon: Package,
      title: "Авиаперевозки",
      subtitle: "продукции двойного назначения",
      link: "/cargo-types/dual-use",
    },
    {
      icon: null,
      image: "/images/cargo-big.jpg",
      title: "Авиаперевозки",
      subtitle: "крупногабаритных грузов",
      link: "/cargo-types/oversized",
    },
    {
      icon: Shield,
      title: "Авиаперевозки",
      subtitle: "дорогостоящих грузов",
      link: "/cargo-types/valuable",
    },
    {
      icon: Package,
      title: "Авиаперевозки",
      subtitle: "фармацевтическая продукция",
      link: "/cargo-types/pharmaceutical",
    },
    {
      icon: null,
      image: "/images/cargo-animal.jpg",
      title: "Авиаперевозки",
      subtitle: "животных",
      link: "/cargo-types/animals",
    },
    {
      icon: null,
      image: "/images/cargo-art.jpg",
      title: "Авиаперевозки",
      subtitle: "предметов искусства",
      link: "/cargo-types/art",
    },
    {
      icon: Shield,
      title: "Авиаперевозки",
      subtitle: "ювелирных изделий и драгоценностей",
      link: "/cargo-types/jewelry",
    },
  ]

  const additionalServices = [
    {
      title: "Таможенные услуги",
      description: "Оказание услуг по таможенному оформлению грузов",
      image: "/images/custom.jpg",
      link: "/services/customs",
    },
    {
      title: "Складские услуги",
      description: "Услуги складского хранения",
      image: "/images/warehouse.jpg",
      link: "/services/storage",
    },
    {
      title: "Страхование грузов",
      description: "Услуги страхования грузов",
      image: "/images/insurance.jpg",
      link: "/services/insurance",
    },
    {
      title: "Грузовые работы",
      description: "Погрузо-разгрузочные работы в аэропортах и при заборе грузов у отправителей и получателей",
      image: "/images/cargo_.jpg",
      link: "/services/loading",
    },
  ]

  const directions = [
    {
      title: "Россия",
      image: "/images/russia.png",
      routes: ["Калининград – Москва", "Екатеринбург – Москва", "Владивосток – Москва"],
      link: "/directions/russia",
    },
    {
      title: "Международные направления",
      image: "/images/world.png",
      routes: ["Китай - Россия", "Южная Корея - Россия", "Турция - Россия"],
      link: "/directions/international",
    },
    {
      title: "Страны ОДКБ",
      image: "/images/odkb.png",
      routes: ["Казахстан - Россия", "Узбекистан - Россия", "Армения - Россия"],
      link: "/directions/odkb",
    },
  ]

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="flex flex-col items-center text-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center overflow-hidden">
                    {service.image ? (
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.subtitle}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                      />
                    ) : Icon ? (
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />
                    ) : null}
                  </div>
                  <div className="text-xs md:text-sm text-black">
                    <div className="font-medium">{service.title}</div>
                    <div>{service.subtitle}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center mb-10">
            <h2 className="text-[1.35rem] md:text-[1.62rem] font-bold text-center text-black border-b-[1.5px] border-cyan-400 inline-block pb-2">
              СОПУТСТВУЮЩИЕ УСЛУГИ
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="flex flex-col items-center text-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-24 h-24 rounded-full border-3 border-cyan-400 flex items-center justify-center overflow-hidden bg-white">
                    {service.image ? (
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-20 h-20 object-contain"
                      />
                    ) : Icon ? (
                      <Icon className="w-12 h-12 text-cyan-400" />
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-2 text-black">{service.title}</h3>
                    <p className="text-xs text-gray-600">{service.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex justify-center mb-3">
            <h2 className="text-[1.35rem] md:text-[1.62rem] font-bold text-center text-black border-b-[1.5px] border-cyan-400 inline-block pb-2">
              ОСНОВНЫЕ НАПРАВЛЕНИЯ ГРУЗОВЫХ АВИАПЕРЕВОЗОК
            </h2>
          </div>
          <p className="text-center text-gray-600 mb-10 max-w-4xl mx-auto text-sm">
            Обширная сеть партнёров и агентские отношения с авиакомпаниями позволяют нам оперативно и безопасно
            перевозить грузы как по территории Российской Федерации так и в международном сообщении.
          </p>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {directions.map((direction, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-5">
                    <img
                      src={direction.image || "/placeholder.svg"}
                      alt={direction.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-5 text-black text-center">{direction.title}</h3>
                  <ul className="space-y-2.5 mb-6 w-full">
                    {direction.routes.map((route, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2 text-gray-700 text-sm">
                        <span className="w-3 h-0.5 bg-cyan-400"></span>
                        {route}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-1.5 text-sm rounded-full" asChild>
                    <Link href={direction.link}>
                      ВСЕ НАПРАВЛЕНИЯ
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
