import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { carId: string } }
) {
  try {
    const { userId } = auth();
    const { carId } = params;

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const deleteCar = await db.car.delete({
      where: {
        id: carId,
        // userId,
      },
    });

    return NextResponse.json(deleteCar);
  } catch (error) {
    console.log("[CAR DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { carId: string } }
) {
  try {
    const { userId } = auth();
    const { carId } = params;
    const { isPublish } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const publishCar = await db.car.update({
      where: {
        id: carId,
        userId
      },
      data: {
        isPublish: isPublish,
      },
    });

    return NextResponse.json(publishCar);
  } catch (error) {
    console.log("[CAR PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
