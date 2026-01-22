"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const processSteps = [
  {
    id: 1,
    image: "/images/1.png",
    alt: "Заявка или звонок",
  },
  {
    id: 2,
    image: "/images/2.png",
    alt: "Обратная связь",
  },
  {
    id: 3,
    image: "/images/3.png",
    alt: "Расчет стоимости",
  },
  {
    id: 4,
    image: "/images/4.png",
    alt: "Согласование договора и условий оплаты",
  },
  {
    id: 5,
    image: "/images/5.png",
    alt: "Оформление заявки и договора на перевозку",
  },
  {
    id: 6,
    image: "/images/6.png",
    alt: "Погрузка",
  },
  {
    id: 7,
    image: "/images/7.png",
    alt: "Взаиморасчеты",
  },
  {
    id: 8,
    image: "/images/8.png",
    alt: "Выгрузка",
  },
  {
    id: 9,
    image: "/images/9.png",
    alt: "Обмен документами",
  },
]

export default function ProcessCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = processSteps.length - itemsPerView

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  useEffect(() => {
    if (touchStart - touchEnd > 50) {
      handleNext()
    } else if (touchEnd - touchStart > 50) {
      handlePrevious()
    }
  }, [touchEnd, touchStart])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="relative">
          <div
            className="overflow-hidden"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
          >
            <div
              className="flex gap-0 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {processSteps.map((step) => (
                <div key={step.id} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                  <div className="relative aspect-[3/4] w-full">
                    <Image src={step.image || "/placeholder.svg"} alt={step.alt} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {currentIndex > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white shadow-lg rounded-full flex"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-[#1E3A8A]" />
            </Button>
          )}

          {currentIndex < maxIndex && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white shadow-lg rounded-full flex"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-[#1E3A8A]" />
            </Button>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-[#22D3EE]" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
