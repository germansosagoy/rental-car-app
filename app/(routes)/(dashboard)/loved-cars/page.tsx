import React from "react";
import { ListLovedCars } from "./components/ListLovedCars/ListLovedCars";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function pageLovedCars() {
  const {userId} = auth();

  if(!userId) {
    return redirect('/')
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold">Tus Vehículos Favoritos</h1>
      <ListLovedCars />
    </div>
  );
}
