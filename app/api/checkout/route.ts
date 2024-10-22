import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    params,
  }: {
    params: {
      carId: string;
      priceDay: string;
      startDate: Date;
      endDate: Date;
      carName: string;
    };
  }
) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // extracción de los datos del body
    const { carId, priceDay, startDate, endDate, carName } = await req.json();

    if (!carId) {
      return new NextResponse("Car ID es requerido.", { status: 400 });
    }

    // conversión de las fechas a objetos Date
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validación de las fechas
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return new NextResponse("Invalid date format", { status: 400 });
    }

    if (start > end) {
      return new NextResponse(
        "La fecha de inicio no puede ser posterior a la fecha de finalización",
        { status: 400 }
      );
    }

    // Cálculo del número de días
    const numberOfDays = Math.ceil(
      (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    const totalAmount = Number(priceDay) * numberOfDays;

    const order = await db.order.create({
      data: {
        carId,
        carName,
        userId,
        status: "confirmado",
        totalAmount: totalAmount.toString(),
        orderDate: start,
        orderEndDate: end,
      },
    });

    // respuesta con la orden creada
    return NextResponse.json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
