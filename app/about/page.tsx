import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"
import { Award, Building2, FileCheck, Warehouse, Shield } from "lucide-react"

export default function AboutPage() {
  const advantages = [
    {
      icon: Award,
      title: "Грузовой агент",
      description: "Прямое агентское соглашение с ПАО «Аэрофлот», Emirates и Lufthansa",
    },
    {
      icon: Building2,
      title: "Работаем с 1991 года",
      description: "28 успешных лет работаем на транспортно-логистическом рынке",
    },
    {
      icon: FileCheck,
      title: "Договор с ГТП Пулково",
      description:
        "Договор по терминальному обслуживанию с ГТП Пулково — сдаем генеральные грузы к перевозке за минимально возможное время",
    },
    {
      icon: Warehouse,
      title: "Свой склад",
      description: "Собственный склад в пяти километрах от Грузового терминала «Пулково»",
    },
    {
      icon: Shield,
      title: "Работаем с опасными грузами",
      description: "Прошли обучение и сертификацию IATA по оформлению опасных грузов",
    },
  ]

  const partners = [
    "Аэрофлот",
    "Россия",
    "S7 (АК Сибирь)",
    "Ural Airlines",
    "Pegas Fly",
    "AirFrance",
    "Turkish Airlines",
    "Lufthansa",
    "Emirates Air",
    "DHL",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-slate-900">О компании АэроБалтСервис</h1>
          <p className="text-center text-xl text-slate-600 max-w-3xl mx-auto">
            С 1991 года отправляем грузы по всему миру
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Высокая скорость. Оптимальная стоимость. Любая специфика.
            </h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p>
                «АэроБалтСервис» организует авиаперевозки грузов по всей территории РФ, стран Таможенного Союза и СНГ,
                США и Китая. ABS сотрудничает с крупными авиакомпаниями российского и международного уровня.
              </p>
              <p>
                Наши партнеры отличаются надежностью, ответственностью и пунктуальностью. Благодаря большому опыту
                работы с самыми разнообразными грузами мы знаем все об авиадоставке грузов и о требованиях клиентов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Почему выбирают нас?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Наши партнеры</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-slate-200 rounded-lg p-4 text-center hover:border-blue-400 transition-colors"
                >
                  <p className="font-semibold text-slate-700">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ExtendedFooter />
    </main>
  )
}
