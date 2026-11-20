import { Skeleton } from "@/components/ui/Skeleton";

export function ServicesSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Skeleton className="h-3 w-32 mb-3" />
            <Skeleton className="h-10 w-72" />
          </div>
          <Skeleton className="hidden md:block h-4 w-24" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <Skeleton className="h-12 w-12 rounded-xl mb-5" />
              <Skeleton className="h-5 w-40 mb-3" />
              <Skeleton className="h-3.5 w-full mb-2" />
              <Skeleton className="h-3.5 w-[85%] mb-6" />
              <Skeleton className="h-3.5 w-24" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}