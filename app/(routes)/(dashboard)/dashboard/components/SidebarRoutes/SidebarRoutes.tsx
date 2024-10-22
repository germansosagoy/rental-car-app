"use client";
import { SidebarItem } from "./SidebarItem";
import { useAuth } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import { dataAdminSidebar, dataSidebar } from "./SidebarRoutes.data";
import { isAdmin } from "@/lib/isAdmin";

export default function SidebarRoutes() {
  const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-700 text-sm">GENERAL</p>
          {dataSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        {isAdmin(userId) && (
          <div className="p-2 md:p-6">
            <p className="mb-2 text-slate-700 text-sm">ADMIN</p>
            {dataAdminSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>

      <div>
        <Separator />

        <footer className="p-3 mt-3 text-center text-xs">
          <p>{new Date().getFullYear()} Todos los derechos reservados</p>
        </footer>
      </div>
    </div>
  );
}
