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
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-20 text-primary leading-tight">
        Alquile con los siguientes 3 pasos
      </h2>

      {/* Contenedor de las tarjetas */}
      <div className="relative flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 relative z-10">
          {/* Tarjeta 1 (más pequeña) */}
          <Card className="flex flex-col items-center text-center p-8 transform scale-95 border-white">
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
          {/* Card center  */}
          <div className="relative flex flex-col items-center text-center p-2 transform scale-105 border-white">
           {/* <div className="absolute left-0 right-0 top-1/4 transform -translate-y-1/2 z-0">
                <div className="absolute -left-20 w-[calc(40%+1rem)] border-t-2 border-dashed border-gray-300" />
                <div className="absolute -right-24 w-[calc(50%+2rem)] border-t-2 border-dashed border-gray-300" />
            </div>  */}
            <Image
              src="/images/calendar-card.svg"
              alt="calendar-card"
              width={100}
              height={100}
              className="mb-4 relative z-10"
            />
            <CardContent className="relative z-10">
              <h3 className="text-lg font-semibold mb-2">
                Fecha de encuentro
              </h3>
              <p className="text-gray-600 text-sm">
                Seleccione la fecha y hora de encuentro para reservar su vehículo.
              </p>
            </CardContent>
          </div>

          {/* Tarjeta 3 (más pequeña) */}
          <Card className="flex flex-col items-center text-center p-8 transform scale-95 border-white">
            <Image
              src="/images/car-card.svg"
              alt="car-card"
              width={80}
              height={80}
              className="mb-4"
            />
            <CardContent>
              <h3 className="text-lg font-semibold mb-2">
                Reservar su vehículo
              </h3>
              <p className="text-gray-600 text-sm">
                Reserve su vehículo y se lo entregaremos a tiempo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
  );
}
