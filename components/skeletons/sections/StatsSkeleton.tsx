import { Skeleton } from "@/components/ui/Skeleton";

export function StatsSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <Skeleton className="h-9 w-28 mb-3" />
              <Skeleton className="h-3 w-20 mb-2" />
              <Skeleton className="h-3 w-32" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}