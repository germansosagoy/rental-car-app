"use client";
import { CardCarProps } from "./CardCar.types";
// import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Gauge, Trash, Upload, Users, Wrench, Fuel, Gem } from "lucide-react";
import Image from "next/image";
import { ButtonEditCar } from "./ButtonEditCar";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import axios from "axios";

export function CardCar(props: CardCarProps) {
  const { car } = props;
  const router = useRouter();

  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({
        title: "Vehículo eliminado ❌",
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: "Algo salió mal. Inténtelo de nuevo.",
        variant: "destructive",
      });
    }
  };

  const handlePublish = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });
      if(publish) {
        toast({
          title: "Vehículo publicado ✌",
        })
      }else{
       toast({
          title: "Vehículo no publicado ⚠",
       })
      }
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: "Algo salió mal. Inténtelo de nuevo.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative p-1 bg-white rounded-md lg:w-72 shadow-md">
      {car.name}
      <Image
        src={car.photo}
        alt={car.name}
        width={200}
        height={200}
        className="rounded-lg object-cover mx-auto mt-3"
      />
      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700 rounded-t-lg">
          Publicado
        </p>
      ) : (
        <p className="absolute top-0 left-0 right-0 w-full p-1 text-center text-white bg-red-300 rounded-t-lg">
          Sin publicar
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mb-2 gap-x-4">
          <p className="text-base font-semibold min-h-8 lg:h-min-fit">
            {car.name}
          </p>
          <p className="text-sm text-green-600 font-medium">${car.priceDay}/día</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-4 text-sm">
          <p className="flex items-center">
            <Gem className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.type}
          </p>

          <p className="flex items-center">
            <Wrench className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center">
            <Users className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center">
            <Fuel className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center">
            <Gauge className="w-4 h-4 mr-2" strokeWidth={1} />
            {car.cv}
          </p>
        </div>

        <div className="grid grid-cols-2 mt-3 gap-x-4">
          <Button
            className="w-full"
            variant="outline"
            onClick={() => deleteCar()}
          >
            Eliminar
            <Trash className="w-4 h-4 ml-2" />
          </Button>

          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlePublish(false)}
          >
            No publicar
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => handlePublish(true)}
          >
            Publicar
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
