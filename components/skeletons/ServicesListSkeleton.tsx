import { Skeleton } from "@/components/ui/Skeleton";

export function ServicesListSkeleton() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-3 w-40 mb-4" />
          <Skeleton className="h-12 w-96 mb-4" />
          <Skeleton className="h-5 w-full max-w-xl mb-2" />
          <Skeleton className="h-5 w-[60%] max-w-md" />
        </div>
      </section>
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
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
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-10 w-72 mb-12" />
          <div className="grid md:grid-cols-4 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <Skeleton className="h-10 w-10 rounded-full mb-4" />
                <Skeleton className="h-5 w-32 mb-3" />
                <Skeleton className="h-3.5 w-full mb-2" />
                <Skeleton className="h-3.5 w-[80%]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Skeleton className="h-12 w-full mb-3" />
          <Skeleton className="h-12 w-[70%] mx-auto mb-6" />
          <Skeleton className="h-5 w-[60%] mx-auto mb-10" />
          <Skeleton className="h-12 w-56 rounded-full mx-auto" />
        </div>
      </section>
    </>
  );
}