import React from "react";
import { FiltersCarsProps } from "./FiltersCars.types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FiltersCars(props: FiltersCarsProps) {
  const { setFilters, clearFilters, filters } = props;

  const handleFilter = (filter: string, value: string) => {
    setFilters(filter, value);
  };

  return (
    <div className="flex flex-col mt-5 mb-8 space-y-2 md:flex-row md:space-y-0 md:gap-5">
      <Select onValueChange={(value) => handleFilter("type", value)} value={filters.type}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de vehículo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="sedan">Sedán</SelectItem>
            <SelectItem value="suv">Suv</SelectItem>
            <SelectItem value="coupe">Coupé</SelectItem>
            <SelectItem value="familiar">Familiar</SelectItem>
            <SelectItem value="luxe">Luxury</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("transmission", value)} value={filters.transmission}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Transimisión" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipo de marchas</SelectLabel>
            <SelectItem value="manual">Manual</SelectItem>
            <SelectItem value="automatico">Automático</SelectItem>
            <SelectItem value="hibrido">Híbrido</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("engine", value)} value={filters.engine}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="gasoil">Gasoil</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="electrico">Eléctrico</SelectItem>
            <SelectItem value="hibrido">Híbrido</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => handleFilter("people", value)} value={filters.people}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Capacidad" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Capacidad de Personas</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="7">7</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button className="" onClick={clearFilters}>
        Limpiar filtros
        <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
