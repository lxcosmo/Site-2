import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import ServicesSection from "@/components/services-section"
import Image from "next/image"
import ProcessCarousel from "@/components/process-carousel"
import PricingCalculator from "@/components/pricing-calculator"
import WhyChooseUs from "@/components/why-choose-us"
import PickupBanner from "@/components/pickup-banner"
import CompletedShipments from "@/components/completed-shipments"
import FaqSection from "@/components/faq-section"
import PartnersSection from "@/components/partners-section"
import NewsletterSection from "@/components/newsletter-section"
import ExtendedFooter from "@/components/extended-footer"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <div className="w-full flex justify-center py-8 bg-white">
        <div className="relative w-full max-w-7xl h-[60px]">
          <Image src="/images/plane-line.png" alt="Plane divider" fill className="object-contain" />
        </div>
      </div>
      <ProcessCarousel />
      <PricingCalculator />
      <div className="w-full flex justify-center py-8 bg-white">
        <div className="relative w-full max-w-7xl h-[60px]">
          <Image src="/images/plane-line.png" alt="Plane divider" fill className="object-contain" />
        </div>
      </div>
      <WhyChooseUs />
      <PickupBanner />
      <CompletedShipments />
      <FaqSection />
      <PartnersSection />
      <NewsletterSection />
      <ExtendedFooter />
      <Footer />
    </main>
  )
}
