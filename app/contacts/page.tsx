import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-[1200px] w-full mx-auto px-8 py-12">
        <h1 className="text-3xl md:text-3xl font-bold text-[#1a2744] mb-8 border-b-[1.5px] border-cyan-400 inline-block pb-2">
          Контакты
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mt-12 px-4">
          <div>
            <h2 className="text-lg font-bold text-[#1a2744] mb-6">Наши контакты</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-[#1a2744]">Телефон</h3>
                  <a href="tel:+74012507272" className="block text-sky-600 hover:text-sky-700 text-sm">
                    +7 (4012) 507-27-2
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-[#1a2744]">Email</h3>
                  <a href="mailto:avia@abs-logistic.ru" className="text-sky-600 hover:text-sky-700 text-sm">
                    avia@abs-logistic.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-[#1a2744]">Адрес</h3>
                  <p className="text-gray-600 text-sm">
                    Калининград
                    <br />
                    а/п Храброво
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1 text-[#1a2744]">Режим работы</h3>
                  <p className="text-gray-600 text-sm">Ежедневно, круглосуточно</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#1a2744] mb-6">Написать нам</h2>

            <form className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Имя *</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Телефон *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Сообщение</label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              <div className="flex items-start gap-2">
                <input type="checkbox" id="consent" required className="mt-1" />
                <label htmlFor="consent" className="text-xs text-gray-600">
                  Нажимая на кнопку, Вы даете согласие на обработку своих персональных данных
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </main>

      <ExtendedFooter />
      <Footer />
    </div>
  )
}
