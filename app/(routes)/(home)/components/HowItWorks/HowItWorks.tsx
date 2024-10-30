"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="py-10 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block mb-2 px-4 py-3 text-gray-700/60 font-semibold rounded-lg text-md">
          ¿CÓMO FUNCIONA?
        </span>
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-12 md:mb-20 text-primary leading-tight">
          Alquile con los siguientes 3 pasos
        </h2>

        {/* contenedor de las tarjetas */}
        <div className="relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6">
          {/* Card 1 */}
          <Card className="flex flex-col items-center text-center p-6 transform scale-95 md:scale-100 border border-transparent transition">
            <Image
              src="/images/location-card.svg"
              alt="location-card"
              width={80}
              height={80}
              className="mb-4"
            />
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Elegir ubicación</h3>
              <p className="text-gray-600 text-sm">
                Elige tu ubicación y encuentra tu mejor vehículo.
              </p>
            </CardContent>
          </Card>

          {/* Card central (más grande) */}
          <Card className="flex flex-col items-center text-center p-8 transform md:scale-105 border border-transparent transition">
            <Image
              src="/images/calendar-card.svg"
              alt="calendar-card"
              width={100}
              height={100}
              className="mb-4"
            />
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Fecha de encuentro</h3>
              <p className="text-gray-600 text-sm">
                Seleccione la fecha y hora de encuentro para reservar su vehículo.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col items-center text-center p-6 transform scale-95 md:scale-100 border border-transparent transition">
            <Image
              src="/images/car-card.svg"
              alt="car-card"
              width={80}
              height={80}
              className="mb-4"
            />
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">Reservar su vehículo</h3>
              <p className="text-gray-600 text-sm">
                Reserve su vehículo y se lo entregaremos a tiempo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
