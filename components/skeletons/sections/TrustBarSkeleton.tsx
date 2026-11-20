import { Skeleton } from "@/components/ui/Skeleton";

export function TrustBarSkeleton() {
  return (
    <section className="border-y border-slate-200 py-8 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <Skeleton className="h-3 w-56 mx-auto mb-6" />
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="h-5 w-20" />
          ))}
        </div>
      </div>
    </section>
  );
}