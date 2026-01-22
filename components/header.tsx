"use client"

import { Phone, Mail, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDirectionsOpen, setIsDirectionsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isCargoTypesOpen, setIsCargoTypesOpen] = useState(false)
  const [isInformationOpen, setIsInformationOpen] = useState(false)

  return (
    <header className="bg-white text-[#1a2744]">
      {/* Top Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between text-sm gap-4">
          {/* Mobile: Phone and Email on the left */}
          <div className="flex md:hidden flex-col gap-0.5">
            <a
              href="tel:+74012507272"
              className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs">+7 (4012) 507272</span>
            </a>
            <a
              href="mailto:mail@aerostar.ooo"
              className="flex items-center gap-1.5 hover:text-cyan-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="text-xs">mail@aerostar.ooo</span>
            </a>
          </div>

          {/* Desktop: Right aligned content */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            {/* Email and phone */}
            <a
              href="mailto:mail@aerostar.ooo"
              className="flex items-center gap-2 hover:text-cyan-500 transition-colors whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs">mail@aerostar.ooo</span>
            </a>
            <span className="text-gray-300">|</span>
            <a
              href="tel:+74012507272"
              className="flex items-center gap-2 hover:text-cyan-500 transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="text-xs">+7 (4012) 507272</span>
            </a>

            {/* IATA and working hours */}
            <div className="flex items-center gap-4">
              <Image src="/images/iata.png" alt="IATA Logo" width={50} height={30} className="object-contain" />
              <div className="text-xs leading-tight">
                <div className="font-semibold whitespace-nowrap">ежедневно, круглосуточно</div>
                <div className="text-gray-600 whitespace-nowrap text-xs">РФ, Калининград, а/п Храброво</div>
              </div>
            </div>
          </div>

          {/* Button and search */}
          <Link href="/quote">
            <Button className="bg-cyan-500 text-white hover:bg-cyan-600" size="sm">
              Онлайн заявка
            </Button>
          </Link>
          <button className="hover:opacity-70 transition-opacity hidden md:block">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-[1200px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.svg" alt="AeroStar Logo" width={48} height={48} className="object-contain" />
            </Link>
            <Link href="/">
              <Image
                src="/images/logo2.jpg"
                alt="AeroStar 25 years"
                width={340}
                height={68}
                className="object-contain hidden sm:block cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/logo2.jpg"
                alt="AeroStar 25 years mobile"
                width={200}
                height={40}
                className="object-contain sm:hidden cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            {/* Removed IATA icon from here */}
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
            <div className="relative group">
              <button className="hover:text-cyan-500 transition-colors whitespace-nowrap flex items-center gap-1">
                НАПРАВЛЕНИЯ
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg z-10 min-w-max">
                <Link href="/directions/russia" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  По России
                </Link>
                <Link href="/directions/international" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Международные
                </Link>
                <Link href="/directions/odkb" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Страны ОДКБ
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-cyan-500 transition-colors whitespace-nowrap flex items-center gap-1">
                УСЛУГИ
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg z-10 min-w-max">
                <Link href="/services/customs" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Таможенное оформление
                </Link>
                <Link href="/services/storage" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Складское хранение
                </Link>
                <Link href="/services/insurance" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Страхование грузов
                </Link>
                <Link href="/services/loading" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Погрузо-Разгрузочные Работы
                </Link>
                <Link href="/services/local-delivery" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Локальные перевозки в регионах
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-cyan-500 transition-colors whitespace-nowrap flex items-center gap-1">
                ВИДЫ ГРУЗОВ
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg z-10 min-w-max">
                <Link href="/cargo-types/general" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки генеральных грузов
                </Link>
                <Link href="/cargo-types/dangerous" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки опасных грузов
                </Link>
                <Link href="/cargo-types/ati" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки Авиационно-Техническое Имущество (АТИ)
                </Link>
                <Link href="/cargo-types/animals" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки животных
                </Link>
                <Link href="/cargo-types/art" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки предметов искусств
                </Link>
                <Link href="/cargo-types/oversized" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки Крупногабаритных и/или Тяжеловесных грузов
                </Link>
                <Link href="/cargo-types/dual-use" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки грузов двойного назначения
                </Link>
                <Link href="/cargo-types/valuable" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки дорогостоящих грузов
                </Link>
                <Link href="/cargo-types/pharmaceutical" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки фармацевтической продукции
                </Link>
                <Link href="/cargo-types/jewelry" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки ювелирных изделий драгоценностей и драг металлов
                </Link>
                <Link href="/cargo-types/remote" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиадоставка в труднодоступные районы
                </Link>
                <Link href="/cargo-types/pmc" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  ЧВК. Снабжение и обмундирование
                </Link>
                <Link href="/cargo-types/vehicles" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Авиаперевозки транспортных средств
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="hover:text-cyan-500 transition-colors whitespace-nowrap flex items-center gap-1">
                ИНФОРМАЦИЯ
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block bg-white border border-gray-200 rounded shadow-lg z-10 min-w-max">
                <Link href="/information/documents" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Документы
                </Link>
                <Link href="/information/scheme" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Схема работы
                </Link>
                <Link href="/information/agents" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                  Агентам
                </Link>
              </div>
            </div>
            <Link href="/tariffs" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              ТАРИФЫ
            </Link>
            <Link href="/contacts" className="hover:text-cyan-500 transition-colors whitespace-nowrap">
              КОНТАКТЫ
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col gap-1.5"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-1 bg-cyan-500"></div>
              <div className="w-6 h-1 bg-cyan-500"></div>
              <div className="w-6 h-1 bg-cyan-500"></div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 mt-4 pt-4 flex flex-col gap-3 text-sm font-medium">
            <div>
              <button
                onClick={() => setIsDirectionsOpen(!isDirectionsOpen)}
                className="hover:text-cyan-500 transition-colors py-2 w-full text-left flex items-center justify-between"
              >
                НАПРАВЛЕНИЯ
                <ChevronDown className={`w-4 h-4 transition-transform ${isDirectionsOpen ? "rotate-180" : ""}`} />
              </button>
              {isDirectionsOpen && (
                <div className="ml-4 flex flex-col gap-2 mt-2 border-l-2 border-cyan-500 pl-3">
                  <Link href="/directions/russia" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    По России
                  </Link>
                  <Link href="/directions/international" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Международные
                  </Link>
                  <Link href="/directions/odkb" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Страны ОДКБ
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="hover:text-cyan-500 transition-colors py-2 w-full text-left flex items-center justify-between"
              >
                УСЛУГИ
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="ml-4 flex flex-col gap-2 mt-2 border-l-2 border-cyan-500 pl-3">
                  <Link href="/services/customs" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Таможенное оформление
                  </Link>
                  <Link href="/services/storage" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Складское хранение
                  </Link>
                  <Link href="/services/insurance" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Страхование грузов
                  </Link>
                  <Link href="/services/loading" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Погрузо-Разгрузочные Работы
                  </Link>
                  <Link href="/services/local-delivery" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Локальные перевозки в регионах
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsCargoTypesOpen(!isCargoTypesOpen)}
                className="hover:text-cyan-500 transition-colors py-2 w-full text-left flex items-center justify-between"
              >
                ВИДЫ ГРУЗОВ
                <ChevronDown className={`w-4 h-4 transition-transform ${isCargoTypesOpen ? "rotate-180" : ""}`} />
              </button>
              {isCargoTypesOpen && (
                <div className="ml-4 flex flex-col gap-2 mt-2 border-l-2 border-cyan-500 pl-3">
                  <Link href="/cargo-types/general" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Авиаперевозки генеральных грузов
                  </Link>
                  <Link href="/cargo-types/dangerous" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки опасных грузов
                  </Link>
                  <Link href="/cargo-types/ati" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки Авиационно-Техническое Имущество (АТИ)
                  </Link>
                  <Link href="/cargo-types/animals" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки животных
                  </Link>
                  <Link href="/cargo-types/art" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки предметов искусств
                  </Link>
                  <Link href="/cargo-types/oversized" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки Крупногабаритных и/или Тяжеловесных грузов
                  </Link>
                  <Link href="/cargo-types/dual-use" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки грузов двойного назначения
                  </Link>
                  <Link href="/cargo-types/valuable" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки дорогостоящих грузов
                  </Link>
                  <Link
                    href="/cargo-types/pharmaceutical"
                    className="block px-4 py-2 hover:bg-cyan-50 transition-colors"
                  >
                    Авиаперевозки фармацевтической продукции
                  </Link>
                  <Link href="/cargo-types/jewelry" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки ювелирных изделий драгоценностей и драг металлов
                  </Link>
                  <Link href="/cargo-types/remote" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиадоставка в труднодоступные районы
                  </Link>
                  <Link href="/cargo-types/pmc" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    ЧВК. Снабжение и обмундирование
                  </Link>
                  <Link href="/cargo-types/vehicles" className="block px-4 py-2 hover:bg-cyan-50 transition-colors">
                    Авиаперевозки транспортных средств
                  </Link>
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsInformationOpen(!isInformationOpen)}
                className="hover:text-cyan-500 transition-colors py-2 w-full text-left flex items-center justify-between"
              >
                ИНФОРМАЦИЯ
                <ChevronDown className={`w-4 h-4 transition-transform ${isInformationOpen ? "rotate-180" : ""}`} />
              </button>
              {isInformationOpen && (
                <div className="ml-4 flex flex-col gap-2 mt-2 border-l-2 border-cyan-500 pl-3">
                  <Link href="/information/documents" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Документы
                  </Link>
                  <Link href="/information/scheme" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Схема работы
                  </Link>
                  <Link href="/information/agents" className="hover:text-cyan-500 transition-colors py-1 text-xs">
                    Агентам
                  </Link>
                </div>
              )}
            </div>
            <Link href="/tariffs" className="hover:text-cyan-500 transition-colors py-2">
              ТАРИФЫ
            </Link>
            <Link href="/contacts" className="hover:text-cyan-500 transition-colors py-2">
              КОНТАКТЫ
            </Link>
            <Link href="/cargo-tracking" className="hover:text-cyan-500 transition-colors py-2">
              ПРОВЕРКА СТАТУСА ГРУЗА
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
