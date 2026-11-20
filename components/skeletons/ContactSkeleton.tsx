import { Skeleton } from "@/components/ui/Skeleton";

export function ContactSkeleton() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-14 w-72 mb-4" />
          <Skeleton className="h-5 w-full max-w-xl" />
        </div>
      </section>
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-2xl bg-slate-50 border border-slate-200 p-8">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[0, 1].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-3 w-20 mb-2" />
                    <Skeleton className="h-11 w-full rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[0, 1].map((i) => (
                  <div key={i}>
                    <Skeleton className="h-3 w-20 mb-2" />
                    <Skeleton className="h-11 w-full rounded-lg" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-3 w-20 mb-2" />
              <Skeleton className="h-11 w-full rounded-lg mb-4" />
              <Skeleton className="h-3 w-24 mb-2" />
              <Skeleton className="h-32 w-full rounded-lg mb-6" />
              <Skeleton className="h-12 w-48 rounded-full" />
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <Skeleton className="h-4 w-24 mb-4" />
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="mb-4">
                    <Skeleton className="h-3 w-16 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
              <Skeleton className="h-48 w-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}