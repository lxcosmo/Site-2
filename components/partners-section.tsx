"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(5)
  const containerRef = useRef(null)

  const partners = [
    { name: "Nordwind Airlines", logo: "/images/nordwind_logo.png" },
    { name: "Азимут", logo: "/images/asimut.png" },
    { name: "NordStar", logo: "/images/nordstar_logo.png" },
    { name: "Pegas Fly", logo: "/images/pegas_logo.png" },
    { name: "Azur Air", logo: "/images/azur_logo.png" },
    { name: "Azerbaijan Airlines", logo: "/images/azal.png" },
    { name: "Ижавиа", logo: "/images/igavia.png" },
    { name: "Conviasa", logo: "/images/Conviasa.png" },
    { name: "Аэрофлот", logo: "/images/aeroflot_logo.png" },
    { name: "Belavia", logo: "/images/belavia_logo.png" },
    { name: "Rusline", logo: "/images/rusline_logo.png" },
    { name: "Uzbekistan Airways", logo: "/images/uzbekistan_logo.png" },
    { name: "Sri Lankan Airlines", logo: "/images/srilankian_logo.png" },
    { name: "SCAT Airlines", logo: "/images/scat_logo.png" },
    { name: "S7 Airlines", logo: "/images/s7_logo.png" },
    { name: "UTair", logo: "/images/utair_logo.png" },
    { name: "Red Wings", logo: "/images/redwings_logo.png" },
    { name: "Smartavia", logo: "/images/smartavia_logo.png" },
    { name: "Rossiya", logo: "/images/rossiya_logo.png" },
  ]

  useEffect(() => {
    setItemsPerSlide(typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 5)
  }, [])

  const maxSlides = Math.ceil(partners.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides)
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleSwipe()
  }

  const handleSwipe = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide()
    } else if (touchEnd - touchStart > 50) {
      prevSlide()
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[1.35rem] md:text-[1.62rem] font-bold text-black border-b-[1.5px] border-cyan-400 inline-block pb-2">
            Мы являемся агентами авиакомпаний
          </h2>
          <div className="flex gap-2 hidden md:flex">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border-2 border-gray-300 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
              aria-label="Previous partners"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border-2 border-gray-300 hover:border-cyan-500 hover:text-cyan-500 transition-colors"
              aria-label="Next partners"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={containerRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: maxSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full flex gap-4 justify-center">
                {partners.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    style={{ minWidth: itemsPerSlide === 1 ? "100%" : "160px", height: "100px" }}
                  >
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-cyan-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
