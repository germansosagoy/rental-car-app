"use client";

import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import { useLovedCards } from "@/hooks/use-loved-cars";
import { Car } from "@prisma/client";
import { Bookmark, Fuel, Gauge, Gem, Users, Wrench } from "lucide-react";
import Image from "next/image";

export function ListLovedCars() {
  const { addLoveItem, lovedItems, removeLovedItem } = useLovedCards();

  return (
    <>
      {lovedItems.length === 0 ? (
        <div className="text-center p-8">
          <p className="font-medium">
          No tienes ningún vehículo en tu lista de favoritos aún.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-6">
          {lovedItems.map((car: Car) => {
            const {
              photo,
              priceDay,
              name,
              type,
              transmission,
              engine,
              cv,
              people,
              id,
            } = car;

            const savedCar = lovedItems.some((item) => item.id === car.id);

            return (
              <div key={id} className="p-1 rounded-lg shadow hover:shadow-md">
                <Image
                  src={photo}
                  alt={name}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover mx-auto mt-3"
                />
                <div className="relative p-3">
                  <div className="flex flex-col mb-2 gap-x-4">
                    <p className="text-base font-semibold min-h-8 lg:h-min-fit">
                      {car.name}
                    </p>
                    <p className="text-sm text-green-600 font-medium">
                      ${priceDay}/día
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-4 text-sm">
                    <p className="flex items-center">
                      <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                      {type}
                    </p>

                    <p className="flex items-center">
                      <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                      {transmission}
                    </p>

                    <p className="flex items-center">
                      <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                      {people}
                    </p>

                    <p className="flex items-center">
                      <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                      {engine}
                    </p>

                    <p className="flex items-center">
                      <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                      {cv}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-x-3">
                  <ModalAddReservation car={car} />
                  <Bookmark
                    className={`w-5 h-5 mt-2 cursor-pointer ${
                      savedCar && "fill-black"
                    }`}
                    onClick={
                      savedCar
                        ? () => removeLovedItem(car.id)
                        : () => addLoveItem(car)
                    }
                    strokeWidth={1}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
