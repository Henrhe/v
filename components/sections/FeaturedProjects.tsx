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
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono text-violet-400 mb-3 tracking-widest">
              SELECTED WORK
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Commissioned portfolio
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            Full archive
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-4">
          {projects.map((p) => (
            <GlassCard
              key={p.id}
              className={`${p.span} overflow-hidden group ${p.tall ? "min-h-[420px]" : "min-h-[200px]"}`}
            >
              <div className="relative h-full flex flex-col">
                {/* Image area */}
                <div className="relative flex-1 min-h-[140px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }} />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/[0.08] border border-white/[0.1] backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {p.meta.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]"
                      >
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