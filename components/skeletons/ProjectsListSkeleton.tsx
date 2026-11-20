import { Skeleton } from "@/components/ui/Skeleton";

export function ProjectsListSkeleton() {
  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <Skeleton className="h-12 w-80 mb-4" />
          <Skeleton className="h-5 w-full max-w-xl" />
        </div>
      </section>
      <section className="pb-8 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-9 w-24 rounded-full" />
          ))}
          <Skeleton className="h-9 w-48 rounded-full ml-auto" />
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden">
                <Skeleton className="h-48 w-full rounded-none" />
                <div className="p-5 bg-white border-t border-slate-200">
                  <Skeleton className="h-3 w-16 mb-3 rounded-full" />
                  <Skeleton className="h-5 w-48 mb-3" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 flex justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-10 w-10 rounded-full" />
          ))}
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