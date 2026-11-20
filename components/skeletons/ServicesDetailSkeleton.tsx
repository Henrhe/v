import { Skeleton } from "@/components/ui/Skeleton";

export function ServicesDetailSkeleton() {
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
          <Skeleton className="h-14 w-[70%] mb-4" />
          <Skeleton className="h-5 w-full max-w-2xl mb-2" />
          <Skeleton className="h-5 w-[60%] max-w-xl mb-6" />
          <Skeleton className="h-12 w-48 rounded-full" />
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-7 w-40 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[88%] mb-6" />
              <Skeleton className="h-72 w-full rounded-2xl mb-6" />
              <Skeleton className="h-7 w-48 mb-3" />
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-4 w-4 rounded shrink-0" />
                  <Skeleton className="h-4 w-[80%]" />
                </div>
              ))}
            </div>
            <aside className="space-y-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <Skeleton className="h-4 w-24 mb-4" />
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between mb-3">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <Skeleton className="h-4 w-32 mb-4" />
                {[0, 1, 2].map((i) => (
                  <Skeleton key={i} className="h-3.5 w-full mb-3" />
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
          <Skeleton className="h-8 w-56 mb-8" />
          <div className="grid md:grid-cols-3 gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden">
                <Skeleton className="h-40 w-full rounded-none" />
                <div className="p-5 bg-white border-t border-slate-200">
                  <Skeleton className="h-5 w-48 mb-2" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Skeleton className="h-12 w-full mb-3" />
          <Skeleton className="h-12 w-[70%] mx-auto mb-6" />
          <Skeleton className="h-12 w-56 rounded-full mx-auto mt-10" />
        </div>
      </section>
    </>
  );
}