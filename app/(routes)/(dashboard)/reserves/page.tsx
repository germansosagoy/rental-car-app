import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";


export default async function page() {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });


  return (
    <div>
        <h1 className="mb-4 font-semibold text-2xl">Página de reservas</h1>
        {orders.length === 0 ? (
          <div className="flex flex-col jfustify-center items-center gap-4 p-8">
            <h2>Aún no tienes ninguna reserva activa.</h2>
            <p>Haz una reserva a través de la página web de vehículos.</p>
            <Link href="/dashboard">
              <Button>Ver lista de vehículos</Button>
            </Link>
          </div>
        ): (
          <div>
            <TableReserves orders={orders} />
          </div>
        )}
    </div>
  );
}
