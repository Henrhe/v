import { Skeleton } from "@/components/ui/Skeleton";

export function TestimonialsSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <Skeleton className="h-3 w-32 mx-auto mb-3" />
          <Skeleton className="h-10 w-80 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <Skeleton className="h-6 w-6 mb-4" />
              <Skeleton className="h-3.5 w-full mb-2" />
              <Skeleton className="h-3.5 w-full mb-2" />
              <Skeleton className="h-3.5 w-[80%] mb-6" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9" circle />
                <div className="flex-1">
                  <Skeleton className="h-3.5 w-32 mb-2" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}