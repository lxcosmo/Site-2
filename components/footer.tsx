import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/images/footer-logo.png"
                alt="АЭРОСТАР"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">АЭРОСТАР</span>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900 text-base">Контакты</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+74012507272"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-gray-700"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (4012) 507272</span>
              </a>
              <a
                href="mailto:mail@aerostar.ooo"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors text-gray-700"
              >
                <Mail className="w-4 h-4" />
                <span>mail@aerostar.ooo</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900 text-base">Адрес</h4>
            <p className="text-sm text-gray-700 flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>г.Калининград</span>
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900 text-base">Режим работы</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Пн-Пт: 9:00 - 18:00
              <br />
              Сб-Вс: выходной
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>© 2025 АЭРОСТАР. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
