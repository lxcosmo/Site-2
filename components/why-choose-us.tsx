import Image from "next/image"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-center mb-12">
          <h2 className="text-[1.35rem] md:text-[1.62rem] font-bold text-center border-b-[1.5px] border-cyan-400 inline-block pb-2">
            ПРЕИМУЩЕСТВА СОТРУДНИЧЕСТВА
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            {/* 25 years */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/25.jpg" alt="25 лет" width={64} height={64} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">На рынке с 2001 года</h3>
                <p className="text-sm text-gray-600">25 успешных лет работаем на транспортно-логистическом рынке</p>
              </div>
            </div>

            {/* Cargo Agent */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/gruz_agent.jpg"
                  alt="Грузовой агент"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Грузовой агент</h3>
                <p className="text-sm text-gray-600">
                  Прямые агентские соглашения с ПАО «Аэрофлот», S7 АК «Сибирь», Ural Airlines, обеспечивают оптимальные
                  ставки
                </p>
              </div>
            </div>

            {/* Contract with Khrabrovo */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/hrabrovo.jpg" alt="Храброво" width={48} height={48} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Договор с а/п Храброво</h3>
                <p className="text-sm text-gray-600">
                  Договор по терминальному обслуживанию с «Грузовой комплекс АО «Аэропорт «Храброво» — оперативная
                  обработка генеральных грузов к перевозке за минимально возможное время.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/iata.png" alt="IATA" width={48} height={48} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Работаем с опасными грузами</h3>
                <p className="text-sm text-gray-600">
                  Прошли обучение и сертификацию IATA по оформлению опасных грузов
                </p>
              </div>
            </div>

            {/* Own Transport */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/local.jpg"
                  alt="Собственный транспорт"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Собственный локальный малокубатурный транспорт</h3>
                <p className="text-sm text-gray-600">
                  Все отправляемые и получаемые грузы обрабатываются ежедневно, в день прилёта. Минимум 3 раза в день
                  транспорт приезжает в грузовой терминал аэропортов
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Cargo Identification */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/ident.jpg"
                  alt="Идентификация груза"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Идентификация груза</h3>
                <p className="text-sm text-gray-600">
                  Идентификация грузов в Калининградской области в аэропорту Храброво
                </p>
              </div>
            </div>

            {/* Dangerous Goods Delivery */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/gosoboron.jpg"
                  alt="Доставка воинских грузов"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">ГОСОБОРОНЗАКАЗ</h3>
                <p className="text-sm text-gray-600">
                  Доставка воинских и специальных грузов по ГОЗ и ВТС по РФ и ОДКБ
                </p>
              </div>
            </div>

            {/* Specialists */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/special.jpg" alt="Спецсчета" width={64} height={64} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Спецсчета</h3>
                <p className="text-sm text-gray-600">Открыты спецсчета в 5ти основных банках РФ</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/gost.png" alt="ГОСТ" width={64} height={64} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Работаем по ГОСТ(у)</h3>
                <p className="text-sm text-gray-600">
                  ГОСТ Р 52298-2004; ГОСТ Р 12.3.009-76; ГОСТ 26653-90; ГОСТ 15846-2002; ГОСТ 26319-84; ГОСТ 14192-96
                </p>
              </div>
            </div>

            {/* Electronic Document Flow */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/edo.jpg" alt="ЭДО" width={64} height={64} className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Электронный документооборот</h3>
                <p className="text-sm text-gray-600">
                  Электронный документооборот. Полный пакет отчётных документов в соответствии с законами РФ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
