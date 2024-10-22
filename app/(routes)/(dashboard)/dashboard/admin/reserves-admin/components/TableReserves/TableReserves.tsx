import { formatPrice } from "@/lib/formatPrice";
import { TableReservesProps } from "./TableReserves.types";
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

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);

  return (
    <Table>
      <TableCaption>
        Estás viendo una lista de tus últimas reservas.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fecha del pedido</TableHead>
          <TableHead>ID Cliente</TableHead>
          <TableHead>Vehículo</TableHead>
          <TableHead>Fecha de Inicio</TableHead>
          <TableHead>Fecha de Entrega</TableHead>
          <TableHead></TableHead>
          <TableHead className="text-right">Monto Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((o) => (
          <TableRow key={o.id}>
            <TableCell className="font-medium">
              {new Date(o.createdAt).toLocaleDateString()}
            </TableCell>
            <TableCell className="font-medium max-w-[100px] truncate">
              {o.userId}
            </TableCell>
            <TableCell className="font-medium truncate">{o.carName}</TableCell>
            <TableCell>{new Date(o.orderDate).toLocaleDateString()}</TableCell>
            <TableCell className="w-fit">
              {new Date(o.orderEndDate).toLocaleDateString()}
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
