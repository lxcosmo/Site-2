"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Plane } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Form */}
          <div className="flex flex-col">
            <h1 className="text-sm md:text-base font-bold mb-1 text-balance leading-tight">АВИАПЕРЕВОЗКИ ГРУЗОВ</h1>
            <h2 className="text-sm md:text-base font-bold text-cyan-400 mb-4 text-balance leading-tight">
              ИЗ КАЛИНИНГРАДА
            </h2>

            <form className="space-y-3 bg-white p-5 rounded-lg shadow-md flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Откуда
                    </label>
                    <Input placeholder="" className="border-gray-300 h-9" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Куда
                    </label>
                    <Input placeholder="" className="border-gray-300 h-9" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Количество" className="border-gray-300 h-9 text-sm" />
                  <Input placeholder="Объем" className="border-gray-300 h-9 text-sm" />
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Характер груза" className="border-gray-300 h-9 text-sm" />
                  <Input placeholder="Габариты" className="border-gray-300 h-9 text-sm" />
                </div>

                <Input placeholder="Масса" className="border-gray-300 h-9 text-sm" />

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="door" className="w-4 h-4" />
                  <label htmlFor="door" className="text-xs">
                    От двери до двери
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-medium">Рассчитаем за 20 минут!</span>
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 h-9 text-sm">Отправить</Button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
            {/* Блок 1: Внутренние перевозки */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-base font-bold mb-3 text-[#1a2744]">
                АВИАПЕРЕВОЗКИ ГРУЗОВ
                <br />
                <span className="text-cyan-400">ПО РОССИИ</span>
              </h3>
              <div className="space-y-1.5 text-sm">
                <Link
                  href="/routes/moscow"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ МОСКВЫ</span>
                </Link>
                <Link
                  href="/routes/spb"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ САНКТ-ПЕТЕРБУРГА</span>
                </Link>
                <Link
                  href="/routes/kaliningrad"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ КАЛИНИНГРАДА</span>
                </Link>
                <Link
                  href="/routes/vladivostok"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ ВЛАДИВОСТОКА</span>
                </Link>
                <Link
                  href="/routes/ekaterinburg"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ ЕКАТЕРИНБУРГА</span>
                </Link>
                <Link
                  href="/routes/barnaul"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ БАРНАУЛА</span>
                </Link>
                <Link
                  href="/routes/novosibirsk"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ НОВОСИБИРСКА</span>
                </Link>
                <Link
                  href="/routes/khabarovsk"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5"
                >
                  <Plane className="w-3 h-3" />
                  <span>ИЗ ХАБАРОВСКА</span>
                </Link>
              </div>
            </div>

            {/* Блок 2: Международные перевозки */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-base font-bold mb-3 text-[#1a2744]">
                АВИАПЕРЕВОЗКИ ГРУЗОВ
                <br />
                <span className="text-cyan-400">МЕЖДУНАРОДНЫЕ</span>
              </h3>
              <div className="space-y-1.5 text-sm">
                <Link
                  href="/international/china"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>КИТАЙ</span>
                </Link>
                <Link
                  href="/international/south-korea"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ЮЖНАЯ КОРЕЯ</span>
                </Link>
                <Link
                  href="/international/venezuela"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ВЕНЕСУЭЛА</span>
                </Link>
                <Link
                  href="/international/cuba"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>КУБА</span>
                </Link>
                <Link
                  href="/international/kazakhstan"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>КАЗАХСТАН</span>
                </Link>
                <Link
                  href="/international/turkey"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5 border-b border-gray-100"
                >
                  <Plane className="w-3 h-3" />
                  <span>ТУРЦИЯ</span>
                </Link>
                <Link
                  href="/international/uae"
                  className="flex items-center gap-1.5 text-cyan-600 hover:text-cyan-700 transition-colors py-1.5"
                >
                  <Plane className="w-3 h-3" />
                  <span>ОАЭ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
