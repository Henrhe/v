import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = [
  {
    id: "884-tower",
    title: "Financial Metropolis Tower",
    tag: "Commercial",
    meta: ["54 Stories", "LEED Platinum", "1.4M sq ft"],
    span: "lg:col-span-2 lg:row-span-2",
    tall: true,
  },
  {
    id: "902-biopharma",
    title: "Nano-Therapeutic Cleanroom",
    tag: "Biopharma",
    meta: ["ISO Class 4"],
    span: "lg:col-span-2",
  },
  {
    id: "614-terminal",
    title: "Airport Concourse Expansion",
    tag: "Aviation",
    meta: ["180m Span", "8,400t Steel"],
    span: "lg:col-span-2",
  },
];

export function FeaturedProjects() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono text-violet-600 mb-3 tracking-widest">SELECTED WORK</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Commissioned portfolio</h2>
          </div>
          <Link href="/projects" className="hidden md:flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Full archive
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          {projects.map((p) => (
            <GlassCard key={p.id} className={`${p.span} overflow-hidden group ${p.tall ? "min-h-[420px]" : "min-h-[200px]"}`}>
              <div className="relative h-full flex flex-col">
                <div className="relative flex-1 min-h-[140px] overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12),transparent_70%)]" />
                  <div className="absolute inset-0 opacity-[0.06]" style={{
                    backgroundImage: "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/80 border border-slate-200 backdrop-blur text-slate-700">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-white border-t border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">{p.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {p.meta.map((m) => (
                      <span key={m} className="text-[10px] font-mono text-slate-600 px-2 py-0.5 rounded bg-slate-50 border border-slate-200">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}