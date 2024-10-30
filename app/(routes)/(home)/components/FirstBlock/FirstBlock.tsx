import { Reveal } from "@/components/Shared/Reveal/Reveal";
import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-4 py-10 lg:px-0 lg:py-20 items-center bg-white">
    {/* Texto principal */}
    <Reveal className="flex flex-col justify-center p-4 lg:pl-60" position="bottom">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:text-left">
        Buscar, reservar y{" "}
        <span className="block">
          alquilar un vehículo {" "}
          <span className="relative text-[#1572D3]">fácilmente</span>
          <Image src="/images/underline-decorator.svg" alt="decorator" width={180} height={30} className="ml-2 inline-block lg:block" />
        </span>
      </h1>
      <p className="text-slate-700 mt-4 md:max-w-xl lg:text-lg">
      Consigue un vehículo donde y cuando lo necesites con tu dispositivo IOS y Android. (pronto)
      </p>
      {/* botones de descarga */}
      <div className="mt-8 md:mt-10 flex space-x-4">
          <a href="#" className="inline-block">
            <Image
              src="/images/google-play.svg"
              alt="Google Play"
              width={120}
              height={120}
              className="w-32 md:w-36"
            />
          </a>
          <a href="#" className="inline-block">
            <Image
              src="/images/apple.svg"
              alt="App Store"
              width={120}
              height={120}
              className="w-32 md:w-36"
            />
          </a>
        </div>
    </Reveal>
    
    {/* Imagen del coche */}
    <Reveal className="hidden lg:flex justify-end items-center lg:h-full" position="right">
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
