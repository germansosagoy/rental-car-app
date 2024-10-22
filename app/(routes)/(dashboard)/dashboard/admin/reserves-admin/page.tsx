import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { TableReserves } from "./components/TableReserves";
import { isAdmin } from "@/lib/isAdmin";

export default async function pageReservesAdmin() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user || !isAdmin(userId)) {
    return redirect("/");
  }

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(orders);
  console.log(user);

  return (
    <div>
    <h1 className="mb-4 font-semibold text-2xl">Página de reservas</h1>
    {orders.length === 0 ? (
      <div className="flex flex-col jfustify-center items-center gap-4 p-8">
        <h2>Aún no hay ninguna reserva activa en la web.</h2>
      </div>
    ): (
      <div>
        <TableReserves orders={orders} />
      </div>
    )}
</div>
  );
}
