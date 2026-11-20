
import { Skeleton } from "@/components/ui/Skeleton";

export function HeroSkeleton() {
  return (
    <section className="relative pt-32 pb-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Skeleton className="h-6 w-64 rounded-full mb-6" />
            <Skeleton className="h-14 w-full mb-3" />
            <Skeleton className="h-14 w-[85%] mb-3" />
            <Skeleton className="h-14 w-[60%] mb-8" />
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-5 w-[80%] mb-8" />
            <div className="flex gap-3 mb-10">
              <Skeleton className="h-12 w-48 rounded-full" />
              <Skeleton className="h-12 w-36 rounded-full" />
            </div>
            <div className="flex items-center gap-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-8">
                  <div>
                    <Skeleton className="h-7 w-20 mb-2" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  {i < 2 && <div className="w-px h-10 bg-slate-200" />}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-2 w-2" circle />
                <Skeleton className="h-3 w-28" />
              </div>
              <Skeleton className="h-3 w-16" />
            </div>
            <Skeleton className="h-40 w-full rounded-xl mb-4" />
            <div className="grid grid-cols-2 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg bg-white border border-slate-200 p-3">
                  <div className="flex justify-between mb-2">
                    <Skeleton className="h-2.5 w-12" />
                    <Skeleton className="h-2.5 w-14" />
                  </div>
                  <Skeleton className="h-1 w-full rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}