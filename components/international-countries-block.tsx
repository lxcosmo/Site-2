import { Plane } from "lucide-react"

export default function InternationalCountriesBlock() {
  const countries = [
    { name: "Франция", icon: "✈" },
    { name: "Германия", icon: "✈" },
    { name: "Испания", icon: "✈" },
    { name: "Великобритания", icon: "✈" },
    { name: "Китай", icon: "✈" },
    { name: "Япония", icon: "✈" },
    { name: "США", icon: "✈" },
    { name: "ОАЭ", icon: "✈" },
  ]

  return (
    <section className="bg-white py-0">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-center mb-12">
          
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors border border-gray-200"
            >
              <Plane className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <span className="text-lg font-semibold text-gray-800">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
