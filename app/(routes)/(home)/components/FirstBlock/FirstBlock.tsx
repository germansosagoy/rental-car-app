import { Reveal } from "@/components/Shared/Reveal/Reveal";
import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-20 items-center bg-white">
    {/* Texto principal */}
    <Reveal className="flex flex-col justify-center p-4 lg:pl-60" position="bottom">
      <h1 className="text-4xl mg:textl-5xl lg:text-6xl font-bold leading-tight">
        Buscar, reservar y{" "}
        <span className="block">
          alquilar un vehículo {" "}
          <span className="relative text-[#1572D3]">fácilmente</span>
          <Image src="/images/underline-decorator.svg" alt="decorator" width={180} height={30} className="ml-2" />
        </span>
      </h1>
      <p className="text-slate-700 mt-4 max-w-xl text-lg">
      Consigue un vehículo donde y cuando lo necesites con tu dispositivo IOS y Android. (pronto)
      </p>
      {/* Botones de descarga */}
      <div className="mt-10 flex space-x-4">
        <a href="#" className="inline-block">
          <Image
            src="/images/google-play.svg"
            alt="Google Play"
            width={140}
            height={140}
          />
        </a>
        <a href="#" className="inline-block">
          <Image
            src="/images/apple.svg"
            alt="App Store"
            width={140}
            height={140}
          />
        </a>
      </div>
    </Reveal>
    
    {/* Imagen del coche */}
    <Reveal className="flex justify-end items-center lg:h-full" position="right">
        <Image
          alt="car-hero"
          src="/images/car-hero.jpg"
          width={700}
          height={600}
          priority
          className="object-contain"
        />
    </Reveal>
  </div>
  )
}
