import { Skeleton } from "@/components/ui/Skeleton";

export function ProjectDetailSkeleton() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-2" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-2" />
            <Skeleton className="h-3 w-32" />
          </div>
          <Skeleton className="h-14 w-[70%] mb-6" />
          <div className="flex gap-6 mb-8">
            {[0, 1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-4 w-28" />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-96 w-full rounded-2xl" />
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {[0, 1, 2].map((section) => (
                <div key={section}>
                  <Skeleton className="h-7 w-40 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-[85%]" />
                </div>
              ))}
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <Skeleton key={i} className="h-32 rounded-xl" />
                ))}
              </div>
            </div>
            <aside className="space-y-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <Skeleton className="h-4 w-28 mb-4" />
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex justify-between mb-3">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <Skeleton className="h-5 w-40 mb-3" />
                <Skeleton className="h-3.5 w-full mb-4" />
                <Skeleton className="h-10 w-full rounded-full" />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
                <Skeleton className="h-3 w-20 mb-3" />
                <Skeleton className="h-5 w-64" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}