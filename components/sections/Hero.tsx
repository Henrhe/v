import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Glow } from "@/components/ui/Glow";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <Glow className="top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]" color="violet" />
      <Glow className="top-40 right-0 w-[400px] h-[400px]" color="indigo" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow" />
              <span className="text-xs font-mono text-slate-600">
                ISO 9001:2015 · Licensed in 50 states
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-6 text-slate-900">
              Engineering systems for{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                mission-critical
              </span>{" "}
              infrastructure
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              High-tolerance MEP integration, computational fluid dynamics, and seismic structural
              engineering for healthcare, aviation, and data-center facilities.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Button href="/contact" size="lg">
                Initiate Project Brief
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Button>
              <Button href="/projects" variant="ghost" size="lg">View Projects</Button>
            </div>

            <div className="flex items-center gap-8 text-sm">
              <div>
                <div className="text-2xl font-semibold tracking-tight text-slate-900">1,240+</div>
                <div className="text-xs font-mono text-slate-500 mt-0.5">PROJECTS</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl font-semibold tracking-tight text-slate-900">99.98%</div>
                <div className="text-xs font-mono text-slate-500 mt-0.5">UPTIME</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl font-semibold tracking-tight text-slate-900">3.4M</div>
                <div className="text-xs font-mono text-slate-500 mt-0.5">SQ FT</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <GlassCard glow className="p-5 animate-fade-up">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-slow" />
                  <span className="text-xs font-mono text-slate-600">SYSTEM ONLINE</span>
                </div>
                <span className="text-xs font-mono text-slate-400">v4.18.0</span>
              </div>

              <div className="relative h-40 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden mb-4">
                <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="chartLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                  <path d="M0 120 Q 60 80 120 100 T 240 60 T 400 30 L 400 160 L 0 160 Z" fill="url(#chartFill)" />
                  <path d="M0 120 Q 60 80 120 100 T 240 60 T 400 30" fill="none" stroke="url(#chartLine)" strokeWidth="2.5" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "AIRFLOW", value: "680 FPM", pct: 72 },
                  { label: "LOAD", value: "14.2 MVA", pct: 84 },
                  { label: "DRIFT", value: "0.004h", pct: 35 },
                  { label: "TEMP", value: "44.0°F", pct: 60 },
                ].map((m) => (
                  <div key={m.label} className="rounded-lg bg-white border border-slate-200 p-3">
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1.5">
                      <span>{m.label}</span>
                      <span className="text-slate-900">{m.value}</span>
                    </div>
                    <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{ width: `${m.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}