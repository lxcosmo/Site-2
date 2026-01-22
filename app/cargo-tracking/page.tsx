"use client"

import Header from "@/components/header"
import ExtendedFooter from "@/components/extended-footer"
import Footer from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CargoTrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      console.log("Tracking:", trackingNumber)
    }
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold mb-8 text-center border-b-[1.5px] border-cyan-400 inline-block pb-2">
              ПРОВЕРКА СТАТУСА ГРУЗА
            </h1>

            <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
              <p className="text-center text-gray-700 mb-6">
                Введите номер накладной для проверки статуса вашего груза
              </p>
              <p className="text-center text-sm text-gray-600 mb-6">Формат номера: 123-12345678</p>

              <div className="space-y-4 max-w-md mx-auto">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Номер накладной<span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="123-12345678"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full bg-gray-50 border-gray-300"
                  />
                </div>

                <Button
                  onClick={handleTrack}
                  className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg text-base"
                >
                  Проверить статус
                </Button>
              </div>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Справка:</span> Номер накладной вы получите в подтверждении при
                  оформлении заявки на перевозку груза.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExtendedFooter />
      <Footer />
    </main>
  )
}
