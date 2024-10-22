import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Car } from "@prisma/client";
import { toast } from "./use-toast";

interface useLovedCarsType {
  lovedItems: Car[];
  addLoveItem: (data: Car) => void;
  removeLovedItem: (id: string) => void;
}

export const useLovedCards = create(
  persist<useLovedCarsType>(
    (set, get) => ({
      lovedItems: [],
      addLoveItem: (data: Car) => {
        const currentLovedItems = get().lovedItems;
        const existItem = currentLovedItems.find((item) => item.id === data.id);

        if (existItem) {
          return toast({
            title: "El vehículo ya existe en la lista favoritos.",
          });
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        toast({
          title: "Vehículo agregado a lista de favoritos ✅",
        });
      },

      removeLovedItem: (id: string) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id !== id)],
        });
        toast({
          title: "Vehículo eliminado de la lista de favoritos ❌",
        });
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
