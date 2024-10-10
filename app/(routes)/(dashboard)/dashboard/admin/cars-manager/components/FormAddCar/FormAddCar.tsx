"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


import { Input } from "@/components/ui/input";
import { formSchema } from "./FormSchema";
import { UploadButton } from "@/utils/uploadthing";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { FormAddCarProps } from "./FormAddCar.types";
import { useRouter } from "next/navigation";

export function FormAddCar(props: FormAddCarProps) {
  const {setOpenDialog} = props
  const [photoUpload, setPhotoUpload] = useState(false);
  
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      cv: "",
      transmission: "",
      people: "",
      photo: "",
      priceDay: "",
      engine: "",
      type: "",
      isPublish: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpenDialog(false)
    
    try {
      await axios.post("/api/car", values);
      toast({
        title: "Vehículo creado exitosamente ✔",
        description: "El vehículo se agregó correctamente.",
      })
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: "Algo salió mal ❌. Intenta de nuevo.",
        variant: "destructive",
      })
    }
  };

  // const { isValid } = form.formState;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del Vehículo</FormLabel>
                <FormControl>
                  <Input placeholder="Ford Mustang" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Potencia (CV) */}
          <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Potencia (CV)</FormLabel>
                <FormControl>
                  <Input placeholder="Ej. 300 CV" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Transmisión */}
          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmisión</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de transmisión" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manual">Manual</SelectItem>
                    <SelectItem value="automatic">Automático</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Capacidad de personas */}
          <FormField
            control={form.control}
            name="people"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capacidad de Personas</FormLabel>
                {/* Mueve el Select fuera de FormControl */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Capacidad de Personas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
            control={form.control}
            name="engine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Motor</FormLabel>
                {/* Mueve el Select fuera de FormControl */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de motor" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Gasolina</SelectItem>
                    <SelectItem value="suv">Diesel</SelectItem>
                    <SelectItem value="coupe">Híbrido</SelectItem>
                    <SelectItem value="familiar">Eléctrico</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tipo de auto */}
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Vehículo</FormLabel>
                {/* Mueve el Select fuera de FormControl */}
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de Vehículo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedán</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="coupe">Coupé</SelectItem>
                    <SelectItem value="familiar">Familiar</SelectItem>
                    <SelectItem value="luxe">De Luxe</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Precio por día */}
          <FormField
            control={form.control}
            name="priceDay"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio por Día</FormLabel>
                <FormControl>
                  <Input placeholder="$40" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Imagen (URL) */}
          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagen del Vehículo</FormLabel>
                <FormControl>
                  {photoUpload ? (
                    <p>Imagen cargada!</p>
                     ) : (
                    <UploadButton className="rounded-lg bg-slate-600/20 text-slate-500 outline-dotted outline-3"
                      {...field}
                      endpoint="photo"
                      onClientUploadComplete={(res) => {
                        form.setValue("photo", res?.[0].url);
                        setPhotoUpload(true);
                      }}
                      onUploadError={(error: Error) => {
                        console.log(error);
                      }}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full mt-8">Guardar Vehículo</Button>
      </form>
    </Form>
  );
}
