"use client";
import { Reveal } from "@/components/Shared/Reveal/Reveal";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { dataBrands } from "./SliderBrands.data";
import Image from "next/image";

export function SliderBrands() {
  return (
    <Reveal position="bottom" className="flex gap-x-10 justify-center lg:pb-20 mt-20 mb-16">
      <Carousel className="w-full max-w-7xl mx-auto" opts={{ loop: true, align: "center" }} plugins={[
        Autoplay({
          delay: 2000,
        })
      ]}>
        <CarouselContent className="flex items-center"> {/* Reduce el gap-x */}
          {dataBrands.map((brand) => (
            <CarouselItem key={brand.id} className="basis-4/4 md:basis-2/4 lg:basis-1/6"> {/* Ajusta los basis */}
              <Image 
                src={`/images/${brand.image}`} 
                alt={brand.image} 
                width={90} 
                height={90} 
                className="object-contain aspect-[3/2]" 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}
