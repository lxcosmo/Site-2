import Header from "@/components/header"
import PricingCalculator from "@/components/pricing-calculator"
import ExtendedFooter from "@/components/extended-footer"
import Footer from "@/components/footer"

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PricingCalculator />
      <ExtendedFooter />
      <Footer />
    </main>
  )
}
