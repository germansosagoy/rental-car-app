import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ListCars } from "./components/ListCars";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const listCars = await db.car.findMany({
    where: {
      isPublish: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Listado de Vehículos</h2>
      </div>
      <ListCars cars={listCars} />
    </div>
  );
}
