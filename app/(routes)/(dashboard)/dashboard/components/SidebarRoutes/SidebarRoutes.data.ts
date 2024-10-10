import { Bookmark, Calendar, CalendarRange, Car } from "lucide-react";

export const dataSidebar = [
  {
    icon: Car,
    label: "Vehículos",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Reservas Vehículos",
    href: "/reserves",
  },

  {
    icon: Bookmark,
    label: "Vehículos favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: Car,
    label: "Gestione sus vehículos",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: CalendarRange,
    label: "Todas las Reservas",
    href: "/dashboard/admin/reserves-manager",
  },
];
