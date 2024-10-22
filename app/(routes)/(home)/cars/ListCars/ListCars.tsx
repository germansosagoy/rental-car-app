"use client";

import { useAuth } from "@clerk/nextjs";
import { ListCarsProps } from "./ListCars.types";
import Image from "next/image";
import { Fuel, Gauge, Gem, Users, Wrench } from "lucide-react";
import { ModalAddReservation } from "@/components/Shared/ModalAddReservation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car } from "@prisma/client";
import { SkeletonCars } from "@/components/Shared/SkeletonCars";


export function ListCars(props: ListCarsProps) {
  const { cars } = props;
  const { userId } = useAuth();

  if (!cars) {
    return <SkeletonCars />
  };

  return (
    <>
      {cars.length === 0 && (
        <div className="text-center p-8">
          <p className="font-medium">
            No se encontraron vehículos con los filtros seleccionados.
          </p>
        </div>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        {cars.map((car: Car) => {
          const {
            priceDay,
            photo,
            cv,
            transmission,
            id,
            people,
            engine,
            type,
            name,
          } = car;

          // const savedCar = lovedItems.some((item) => item.id === car.id);

          return (
            <div
              key={id}
              className="shadow hover:shadow-md rounded-lg p-1 w-64"
            >
              <Image
                src={photo}
                alt={name}
                width={200}
                height={200}
                className="rounded-lg object-cover mx-auto mt-3"
              />
              <div className="relative p-3 text-sm">
                <div className="flex flex-col mb-3 gap-x-4">
                  <p className="text-base min-h-12 lg:min-h-fit font-semibold">
                    {name}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    ${priceDay}/día
                  </p>
                </div>
                <p className="flex items-center">
                  <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
                  {type}
                </p>
                <p className="flex items-center">
                  <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
                  {transmission}
                </p>

                <p className="flex items-center">
                  <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
                  {cv}
                </p>

                <p className="flex items-center">
                  <Users className="w-4 h-4 mr-2" strokeWidth={1} />
                  {people}
                </p>
                <p className="flex items-center">
                  <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
                  {engine}
                </p>

                {userId ? (
                  <div className="flex items-center justify-center gap-x-3">
                    <ModalAddReservation car={car} />
                  </div>
                ) : (
                  <div className="w-full mt-4 text-center">
                    <Link href="/sign-in">
                      <Button variant="outline" className="w-full">
                        Iniciar sesión para reservar
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
