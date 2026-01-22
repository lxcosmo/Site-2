import Header from "@/components/header"
import Footer from "@/components/footer"
import { Plane, AlertTriangle, Flower2, Snowflake, Shield, Package } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Авиаперевозка животных",
      price: "от 46 руб/кг",
      description:
        "Бережная перевозка животных с заботой и в комфортных контейнерах размером от 50х33х32. Можем отправить вашу собаку, кошку или даже тигра! Осуществим перевозку без стресса для вашего питомца.",
      icon: Plane,
      slug: "animals",
    },
    {
      title: "Опасные грузы",
      price: "от 25 руб/кг",
      description:
        "Работа по правилам: маркируем опасные грузы, комплект грузов сертифицируем, готовим паспорт безопасности. Используем только прямые рейсы. Доставим и емкость с топливом и радиоактивный материал!",
      icon: AlertTriangle,
      slug: "dangerous",
    },
    {
      title: "Цветы и растения",
      price: "от 25 руб/кг",
      description:
        "Перевозим свежесрезанные цветы в специальных контейнерах с температурным режимом от +1° до +8° со специальными крепежными пломбами. Прямые рейсы сокращают время доставки. Зимой груз утепляем.",
      icon: Flower2,
      slug: "flowers",
    },
    {
      title: "Скоропортящиеся грузы",
      price: "от 25 руб/кг",
      description:
        "Подбираем под конкретный груз контейнер с нужным уровнем температуры, влажности, давления и режимом вентиляции. Мы выполняем все условия транспортировки, чтобы ваш груз сохранял свой первозданный вид.",
      icon: Snowflake,
      slug: "perishable",
    },
    {
      title: "Ценные грузы",
      price: "от 25 руб/кг",
      description:
        "Перевозка драгметаллов, ценных бумаг, ювелирных украшений или других грузов с объявленной стоимостью больше 1000$. Ценные грузы упаковываем в контейнеры с защитой от агрессивного воздействия или проникновения.",
      icon: Shield,
      slug: "valuable",
    },
    {
      title: "Генеральные грузы",
      price: "от 23 руб/кг",
      description:
        "С особым вниманием относимся к транспортировке генеральных грузов. Используем необходимую упаковку и крепления. Выполняем все условия для осуществления качественной доставке данной категории грузов.",
      icon: Package,
      slug: "general",
    },
  ]

  const additionalServices = [
    {
      title: "Таможенные услуги",
      description: "Оказание услуг по таможенному оформлению грузов",
    },
    {
      title: "Складские услуги",
      description: "Услуги складского хранения в Санкт-Петербурге",
    },
    {
      title: "Страхование грузов",
      description: "Услуги страхования грузов в Санкт-Петербурге",
    },
    {
      title: "Транспортно-экспедиционные услуги",
      description: "Перевозка и экспедирование грузов из Санкт-Петербурга и обратно",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
            Услуги авиаперевозки грузов
          </h1>
          <p className="text-center text-lg text-slate-600 max-w-3xl mx-auto">
            Индивидуальный подход к каждому Клиенту, подбор оптимального вида транспорта для обеспечения экономии и
            скорости авиаперевозки Ваших грузов
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{service.title}</h3>
                      <p className="text-sky-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                  <button className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors">
                    Получить консультацию
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Дополнительные услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
