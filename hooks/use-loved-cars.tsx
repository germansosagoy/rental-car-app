import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Car } from "@prisma/client";
import { toast } from "./use-toast";

interface useLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCards = create(
  persist<useLovedCarsType>((set, get) => ({
    lovedItems: [],
    addLoveItem: (data: Car) => {
      const currentLovedItems = get().lovedItems;
      const existItem = currentLovedItems.find((item) => item.id === data.id);


      if (existItem) {
        return toast({
          title: "El Vehículo ya existe en favoritos",
        });
      }
    },
  }))
);
