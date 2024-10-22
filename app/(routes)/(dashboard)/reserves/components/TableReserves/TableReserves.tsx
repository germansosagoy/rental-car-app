"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableReservesProps } from "./TableReserves.types";
import { formatPrice } from "@/lib/formatPrice";

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>Estás viendo una lista de tus últimas reservas.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Vehículo</TableHead>
          <TableHead>Fecha de Inicio</TableHead>
          <TableHead>Fecha de Entrega</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Monto Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((o) => (
          <TableRow key={o.id}>
            <TableCell className="font-medium">{o.carName}</TableCell>
            <TableCell>
               <div className="ml-2">{new Date(o.orderDate).toLocaleDateString()}</div> 
            </TableCell>
            <TableCell>
               <div className="ml-2">{new Date(o.orderEndDate).toLocaleDateString()}</div> 
            </TableCell>
            <TableCell>
                <div className="p-2 text-white bg-green-600 rounded-lg w-fit">{o.status}</div>
            </TableCell>
            <TableCell>
                <div className="text-right">{formatPrice(Number(o.totalAmount))}</div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell className="text-right">{formatPrice(totalAmount)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
