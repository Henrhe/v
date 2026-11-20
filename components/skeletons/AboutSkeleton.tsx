import { Skeleton } from "@/components/ui/Skeleton";

export function AboutSkeleton() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-3 w-32 mb-4" />
          <Skeleton className="h-14 w-72 mb-4" />
          <Skeleton className="h-5 w-full max-w-2xl" />
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-full mb-3" />
              <Skeleton className="h-4 w-[85%]" />
            </div>
            <Skeleton className="h-80 w-full rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-center">
                <Skeleton className="h-9 w-24 mx-auto mb-3" />
                <Skeleton className="h-3 w-20 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-10 w-56 mb-10" />
          <div className="grid md:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center">
                <Skeleton className="h-24 w-24 mx-auto mb-4" circle />
                <Skeleton className="h-4 w-32 mx-auto mb-2" />
                <Skeleton className="h-3 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}