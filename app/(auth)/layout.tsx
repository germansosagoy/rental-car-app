import Image from "next/image";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 h-full items-center justify-center">
      <div className="hidden lg:flex lg:bg-slate-800 h-full justify-center items-center lg:flex-col">
        <Image src="/logo.svg" alt="logo rental car" width={80} height={80} />
        <h1 className="mt-2 md:text-3xl text-white font-semibold">Rental Car</h1>
        <h4 className="mt-5 md:text-lg text-gray-300 font-normal">
          Buscar, reservar y alquilar un vehículo fácilmente.
          {/* <span className="animate-blink">|</span> */}
        </h4>
      </div>
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}
