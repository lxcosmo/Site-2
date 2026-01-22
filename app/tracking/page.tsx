import Header from "@/components/header"
import Footer from "@/components/footer"
import ExtendedFooter from "@/components/extended-footer"
import { Search, Package } from "lucide-react"

export default function TrackingPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-3xl font-bold text-center mb-4 text-slate-900">Отследить груз</h1>
          <p className="text-center text-lg text-slate-600">Проверьте статус доставки по номеру накладной</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Package className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Быстрая проверка по номеру накладной</h2>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Номер накладной *</label>
                <input
                  type="text"
                  placeholder="Введите номер накладной"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Проверить статус
              </button>
            </form>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-slate-600">
                <strong>Обратите внимание:</strong> Номер накладной можно найти в документах, которые вы получили при
                отправке груза. Обычно он состоит из цифр и букв.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExtendedFooter />
      <Footer />
    </main>
  )
}
