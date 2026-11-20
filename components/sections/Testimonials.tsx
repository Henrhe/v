import { GlassCard } from "@/components/ui/GlassCard";

const testimonials = [
  { quote: "Vertex delivered a fabrication-ready model that went straight to the steel fabricator with zero clashes. Unheard of.", name: "Sarah Chen", role: "VP Engineering, Meridian Development" },
  { quote: "The CFD analysis identified a critical pressure imbalance three months before it would have failed commissioning. Saved us $2.1M.", name: "Marcus Webb", role: "Director of Facilities, BioNova Pharma" },
  { quote: "Their seismic retrofit kept our trauma center fully operational through the entire build. Not one hour of downtime.", name: "Dr. Elena Rossi", role: "Chief Medical Officer, St. Brigid's Hospital" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-violet-600 mb-3 tracking-widest">CLIENT OUTCOMES</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900">Trusted by engineers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="p-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-violet-500/60 mb-4">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xs font-bold text-white">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}