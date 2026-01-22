"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && agreed) {
      console.log("Newsletter subscription:", email)
      // Handle newsletter subscription
    }
  }

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-4xl mx-auto border-2 border-cyan-400 rounded-lg p-4 md:p-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1 w-full">
              <h2 className="text-sm md:text-base font-bold mb-1 text-black leading-tight md:whitespace-nowrap">
                РАССЫЛКА С ТАРИФАМИ НА АВИАПЕРЕВОЗКИ
              </h2>
              <p className="text-sm mb-3 text-gray-700">Получайте письма с лучшими предложениями первыми!</p>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-9 text-sm border-2 border-cyan-400 focus:border-cyan-500"
              />
            </div>
            <div className="flex-1 w-full flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <Checkbox
                  id="privacy"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  className="mt-0.5 border-cyan-400 data-[state=checked]:bg-cyan-400"
                />
                <label htmlFor="privacy" className="text-xs text-gray-700 leading-tight">
                  Я согласен на обработку персональных данных в соответствии с{" "}
                  <a href="/privacy" className="text-cyan-500 hover:underline">
                    политикой конфиденциальности
                  </a>
                  .
                </label>
              </div>
              <Button
                onClick={handleSubmit}
                disabled={!email || !agreed}
                className="w-full h-9 bg-cyan-400 hover:bg-cyan-500 text-white text-sm font-semibold uppercase"
              >
                ПОДПИСАТЬСЯ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
