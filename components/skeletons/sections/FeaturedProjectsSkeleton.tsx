import { Skeleton } from "@/components/ui/Skeleton";

export function FeaturedProjectsSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <Skeleton className="h-3 w-32 mb-3" />
            <Skeleton className="h-10 w-80" />
          </div>
          <Skeleton className="hidden md:block h-4 w-24" />
        </div>
        <div className="grid lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 lg:row-span-2 min-h-[420px] rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col">
            <Skeleton className="flex-1 min-h-[240px] rounded-none" />
            <div className="p-5 bg-white border-t border-slate-200">
              <Skeleton className="h-5 w-56 mb-3" />
              <div className="flex gap-1.5">
                <Skeleton className="h-5 w-20 rounded" />
                <Skeleton className="h-5 w-24 rounded" />
                <Skeleton className="h-5 w-16 rounded" />
              </div>
            </div>
          </div>
          {[0, 1].map((i) => (
            <div key={i} className="lg:col-span-2 min-h-[200px] rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden flex flex-col">
              <Skeleton className="flex-1 min-h-[100px] rounded-none" />
              <div className="p-5 bg-white border-t border-slate-200">
                <Skeleton className="h-5 w-48 mb-3" />
                <div className="flex gap-1.5">
                  <Skeleton className="h-5 w-20 rounded" />
                  <Skeleton className="h-5 w-16 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
