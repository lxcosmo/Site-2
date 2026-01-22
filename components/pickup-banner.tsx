import { Button } from "@/components/ui/button"

export default function PickupBanner() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="max-w-5xl mx-auto border-2 border-sky-400 rounded-lg p-6 bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-base md:text-2xl font-bold mb-1">ЗАБЕРЁМ ВАШ ГРУЗ В ДЕНЬ ПОДАЧИ ЗАЯВКИ</h2>
              <p className="text-base md:text-lg mb-1">
                <span className="text-sky-500 font-semibold">В КАЛИНИНГРАДЕ, САНКТ-ПЕТЕРБУРГЕ, МОСКВЕ.</span>
              </p>
              <p className="text-sm md:text-base">
                ПРИ ПОДАЧЕ ЗАЗАВКИ <span className="text-sky-500 font-semibold">ДО 11:00</span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button className="bg-sky-400 hover:bg-sky-500 text-black font-bold text-base px-10 py-5 rounded-lg">
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
