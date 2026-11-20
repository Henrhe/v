import { Skeleton } from "@/components/ui/Skeleton";

export function WhyChooseUsSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Skeleton className="h-3 w-28 mb-3" />
            <Skeleton className="h-10 w-full mb-3" />
            <Skeleton className="h-10 w-[70%] mb-10" />
            <div className="space-y-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-9 w-9 rounded-lg shrink-0" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-52 mb-2" />
                    <Skeleton className="h-3.5 w-full mb-1.5" />
                    <Skeleton className="h-3.5 w-[80%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
            <div className="flex justify-center mb-6">
              <Skeleton className="h-48 w-48" circle />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[0, 1].map((i) => (
                <div key={i} className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                  <Skeleton className="h-6 w-16 mx-auto mb-2" />
                  <Skeleton className="h-2.5 w-20 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}