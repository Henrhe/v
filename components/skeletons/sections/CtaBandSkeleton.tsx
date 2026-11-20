import { Skeleton } from "@/components/ui/Skeleton";

export function CtaBandSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Skeleton className="h-12 w-full mb-3" />
        <Skeleton className="h-12 w-[70%] mx-auto mb-6" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-[60%] mx-auto mb-10" />
        <div className="flex justify-center gap-3">
          <Skeleton className="h-12 w-56 rounded-full" />
          <Skeleton className="h-12 w-44 rounded-full" />
        </div>
      </div>
    </section>
  );
}