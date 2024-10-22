import Image from "next/image";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16">
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-x-48">
        <div className="relative w-[700px] h-[700px] flex items-center justify-center">
          <Image
            src="/images/fondo-geometrico.svg"
            alt="geometric-background"
            width={800}
            height={800}
            className="absolute inset-0 z-0 object-cover"
          />
          <Image
            src="/images/audi-1.svg"
            alt="Main Car"
            width={700}
            height={700}
            className="relative z-10"
          />
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <span className="text-gray-700/60 px-1 py-3 rounded-full text-md font-semibold">
              ¿POR QUÉ ELEGIRNOS?
            </span>
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-12 leading-tight">
            Ofrecemos la mejor experiencia con
            <br />
            nuestras ofertas de alquiler
          </h3>
          {/* Lista izquierda */}
          <ul className="space-y-10">
            <li className="flex items-center space-x-6">
              <Image
                src="/icons/price-icon.svg"
                alt="Best Price Icon"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Mejor precio garantizado.
                </h4>
                <p className="text-gray-600">
                  ¿Encuentra un precio más bajo? <br /> Le devolvemos el 100% de
                  la diferencia.
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-6">
              <Image
                src="/icons/driver-icon.svg"
                alt="Experience Driver Icon"
                width={60}
                height={60}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Conductor con experiencia.
                </h4>
                <p className="text-gray-600">
                  ¿No tiene chófer? No se preocupe, tenemos muchos <br />{" "}
                  conductores con experiencia para usted.
                </p>
              </div>
            </li>
            <li className="flex items-center space-x-6">
              <Image
                src="/icons/delivery-icon.svg" // Ícono de entrega
                alt="Car Delivery Icon"
                width={60}
                height={60}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Entrega de vehículos en 24 horas.
                </h4>
                <p className="text-gray-600">
                  Reserve su coche en cualquier momento y se <br /> lo
                  entregaremos directamente.
                </p>
              </div>
            </li>

            {/* Ítem 4 */}
            <li className="flex items-center space-x-6">
              <Image
                src="/icons/support-icon.svg" // Ícono de soporte
                alt="Technical Support Icon"
                width={60}
                height={60}
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Soporte Técnico 24/7.
                </h4>
                <p className="text-gray-600">
                  ¿Tiene alguna duda? Póngase en contacto con el servicio <br />
                  técnico de RentalCar cuando tenga algún problema.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
