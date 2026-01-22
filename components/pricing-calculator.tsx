"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Info } from "lucide-react"
import Link from "next/link"

export default function PricingCalculator() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[1.35rem] md:text-[1.62rem] font-bold mb-6 border-b-[1.5px] border-cyan-400 inline-block pb-2">
            Получить расчет стоимости
          </h2>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-4">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left Column - Shipping Details */}
            <div className="space-y-3">
              {/* Откуда */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Откуда?<span className="text-red-500">*</span>
                </label>
                <Input type="text" placeholder="Санкт-Петербург" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Куда */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Куда?<span className="text-red-500">*</span>
                </label>
                <Input type="text" placeholder="Европа" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Количество грузовых мест */}
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center gap-1">
                  Количество <Info className="w-3.5 h-3.5 text-cyan-400" /> грузовых мест
                </label>
                <Input type="text" placeholder="Количество" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Объем груза */}
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center gap-1">
                  Объем груза <Info className="w-3.5 h-3.5 text-cyan-400" /> грузовых мест
                </label>
                <Input type="text" placeholder="Объем" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Масса груза */}
              <div>
                <label className="block text-sm font-medium mb-1 flex items-center gap-1">
                  Масса груза <Info className="w-3.5 h-3.5 text-cyan-400" /> грузовых мест
                </label>
                <Input type="text" placeholder="Масса" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Checkboxes */}
              <div className="flex gap-6 pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="door-to-door" className="h-4 w-4" />
                  <Label htmlFor="door-to-door" className="text-sm cursor-pointer">
                    "От двери до двери"
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="packaging" className="h-4 w-4" />
                  <Label htmlFor="packaging" className="text-sm cursor-pointer">
                    "Упаковка"
                  </Label>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-3">
              {/* Контактное лицо отправитель */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Контактное лицо/отправитель
                </label>
                <Input type="text" placeholder="ФИО" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Контактное лицо получатель */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Контактное лицо/получатель
                </label>
                <Input type="text" placeholder="ФИО" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Телефон */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Телефон<span className="text-red-500">*</span>
                </label>
                <Input type="tel" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Ваш email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ваш email<span className="text-red-500">*</span>
                </label>
                <Input type="email" className="w-full h-9 bg-gray-50" />
              </div>

              {/* Privacy Notice */}
              <div className="text-xs text-gray-600 pt-1">
                Нажимая на кнопку, Вы даете согласие на обработку своих персональных данных и соглашаетесь с{" "}
                <Link href="/privacy" className="text-cyan-500 hover:underline">
                  политикой конфиденциальности
                </Link>
                .
              </div>

              {/* Submit Button */}
              <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-4 rounded-full text-base">
                Отправить заявку
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
