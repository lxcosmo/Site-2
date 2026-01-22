"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function CompletedShipments() {
  const shipments = [
    {
      date: "11",
      month: "НОЯ",
      image: "/cargo-aircraft-il-76.jpg",
      title: "Первый грузовой рейс авиаперевозчика «Волга-Днепр» в Азию",
      link: "/news/volga-dnepr-asia",
    },
    {
      date: "27",
      month: "МАЙ",
      image: "/airbaltic-cargo-plane.jpg",
      title: "Латвийские власти решили возобновить авиасообщение с РФ",
      link: "/news/airbaltic-russia",
    },
    {
      date: "20",
      month: "МАЙ",
      image: "/aeroflot-cargo-plane.jpg",
      title: "Аэрофлот возобновляет авиарейсы из Тюмени",
      link: "/news/aeroflot-tyumen",
    },
    {
      date: "15",
      month: "АПР",
      image: "/cargo-transportation.jpg",
      title: "Доставка крупногабаритного оборудования из Китая",
      link: "/news/equipment-china",
    },
    {
      date: "03",
      month: "МАР",
      image: "/pharmaceutical-cargo.jpg",
      title: "Перевозка медицинского оборудования в регионы РФ",
      link: "/news/pharmaceutical-russia",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const containerRef = useRef(null)
  const maxSlides = Math.ceil((shipments.length - itemsPerView) / itemsPerView) + 1

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 3)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = shipments.length - itemsPerView

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
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
      nextSlide()
    } else if (touchEnd - touchStart > 50) {
      prevSlide()
    }
  }, [touchEnd, touchStart])

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-[1.35rem] md:text-[1.62rem] font-bold mb-8 text-black border-b-[1.5px] border-cyan-400 inline-block pb-2">
          ВЫПОЛНЕННЫЕ ПЕРЕВОЗКИ
        </h2>

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
                transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`,
              }}
            >
              {shipments.map((shipment, index) => (
                <div key={index} className="flex-shrink-0 px-4" style={{ width: `${100 / itemsPerView}%` }}>
                  <Link href={shipment.link} className="relative group cursor-pointer block">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={shipment.image || "/placeholder.svg"}
                        alt={shipment.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3 bg-cyan-400 text-white px-3 py-2 text-center">
                        <div className="text-xl font-bold">{shipment.date}</div>
                        <div className="text-xs">{shipment.month}</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-base font-semibold text-black mb-2">{shipment.title}</h3>
                      <span className="text-cyan-500 hover:text-cyan-600 text-sm">
                        Подробнее
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-[#22D3EE]" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 flex md:hidden disabled:opacity-50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 flex md:hidden disabled:opacity-50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        </div>
      </div>
    </section>
  )
}
