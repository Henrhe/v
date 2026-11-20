import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

const services = [
  {
    title: "Mechanical & HVAC",
    desc: "Chiller arrays, VRF systems, CFD airflow modeling, and demand-controlled ventilation.",
    icon: <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />,
    accent: "from-cyan-500 to-blue-600",
  },
  {
    title: "Electrical & MEP",
    desc: "Dual-redundant substations, synchronized paralleling switchgear, and clean-agent suppression.",
    icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "Structural & Seismic",
    desc: "Buckling-restrained brace frames, post-tensioned slabs, and deep shaft foundations.",
    icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />,
    accent: "from-violet-500 to-fuchsia-600",
  },
];

export function Services() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono text-violet-600 mb-3 tracking-widest">CORE DISCIPLINES</p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Engineering, engineered</h2>
          </div>
          <Link href="/services" className="hidden md:flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            All services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s) => (
            <GlassCard key={s.title} className="p-6 group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-5 shadow-md`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  {s.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">{s.desc}</p>
              <div className="flex items-center gap-1.5 text-sm text-violet-600 group-hover:gap-2.5 transition-all font-medium">
                Learn more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}