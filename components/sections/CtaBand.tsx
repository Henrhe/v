import { Button } from "@/components/ui/Button";
import { Glow } from "@/components/ui/Glow";

export function CtaBand() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <Glow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]" color="violet" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight text-slate-900">
          Ready to build something{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">precise</span>?
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
          Transmit your CAD specifications to our principal engineers. Response within 24 hours.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" size="lg">
            Initiate Project Brief
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Button>
          <Button href="/services" variant="ghost" size="lg">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}