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
    href: "/saved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: Car,
    label: "Gestione sus vehículos",
    href: "/dashboard",
  },
  {
    icon: CalendarRange,
    label: "Todas las Reservas",
    href: "/reserves",
  },
];
