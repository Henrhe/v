import { GlassCard } from "@/components/ui/GlassCard";

const points = [
  { title: "Zero-failure continuity", desc: "2N redundancy on every critical subsystem, validated to NFPA and IEEE standards." },
  { title: "Computational precision", desc: "CFD and FEA simulation on every project, down to ±0.005 inch tolerance." },
  { title: "Fabrication-ready delivery", desc: "LOD 400 BIM models delivered commission-ready, not concept-ready." },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-mono text-violet-600 mb-3 tracking-widest">WHY VERTEX</p>
            <h2 className="text-4xl font-semibold tracking-tight mb-10 leading-tight text-slate-900">
              Precision at every phase, from concept to commission
            </h2>
            <div className="space-y-6">
              {points.map((p, i) => (
                <div key={p.title} className="flex gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 text-slate-900">{p.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <GlassCard glow className="p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(15,23,42,0.06)" strokeWidth="12" />
                  <circle cx="100" cy="100" r="88" fill="none" stroke="url(#grad)" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 88 * 0.9998} ${2 * Math.PI * 88}`} />
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-semibold tracking-tight text-slate-900">99.98%</span>
                  <span className="text-xs font-mono text-slate-500 mt-1">UPTIME</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                <div className="text-xl font-semibold text-slate-900">240+</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">ENGINEERS</div>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-3 text-center">
                <div className="text-xl font-semibold text-slate-900">18yrs</div>
                <div className="text-[10px] font-mono text-slate-500 mt-0.5">EXPERIENCE</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}