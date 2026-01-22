"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function ExtendedFooter() {
  const [trackingNumber, setTrackingNumber] = useState("")

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      console.log("Tracking:", trackingNumber)
    }
  }

  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div id="cargo-status">
            <h3 className="text-lg font-bold mb-6 text-gray-900">ПРОВЕРКА СТАТУСА ГРУЗА</h3>
            <p className="text-sm text-gray-700 mb-4">Введите номер накладной в формате: 123-12345678</p>
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Номер накладной"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="bg-white border-gray-300"
              />
              <Button
                onClick={handleTrack}
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold"
              >
                Проверить
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">УСЛУГИ</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/directions/international">› Международные направления</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/cargo-types/ati">› Авиаперевозки Авиационно-Техническое Имущество (АТИ)</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/cargo-types/valuable">› Перевозка ценных грузов</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/cargo-types/general">› Доставка генеральных грузов</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/cargo-types/animals">› Доставка животных</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/cargo-types/pmc">› ЧВК. Снабжение и обмундирование</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/services/local-delivery">› Локальные перевозки в регионах</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/about-company">› О нас</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/news-list">› Новости</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/blog">› Статьи</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/tracking">› Узнать статус груза</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/tariffs">› Тарифы</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/information/documents">› Документы</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/gallery">› Отзывы</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/directions/russia">› Направления</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/quote">› Контроль качества</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">ДОПОЛНИТЕЛЬНО</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/information/documents">› Сертификаты</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/services/insurance">› Страхование грузов</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/services/customs">› Упаковка и таможня</Link>
              </li>
              <li className="hover:text-cyan-400 transition-colors">
                <Link href="/contacts">› Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
