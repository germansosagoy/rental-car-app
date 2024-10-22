import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCars() {
  const items = 8;

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-4">
      {[...Array(items)].map((_, index) => (
        <div key={index} className="h-[200px] w-full rounded-xl">
          <Skeleton className="w-4 w-[200px] mt-5" />
          <Skeleton className="w-4 w-[200px] mt-5" />
          <Skeleton className="w-4 w-[200px] mt-5" />
          <Skeleton className="w-4 w-[200px] mt-5" />
        </div>
      ))}
    </div>
  );
}
