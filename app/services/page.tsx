import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

const services = [
  { title: "Mechanical & HVAC", desc: "Chiller arrays, VRF systems, CFD airflow modeling, and demand-controlled ventilation.", icon: <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />, accent: "from-cyan-500 to-blue-600" },
  { title: "Electrical & MEP", desc: "Dual-redundant substations, synchronized paralleling switchgear, and clean-agent suppression.", icon: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />, accent: "from-amber-500 to-orange-600" },
  { title: "Structural & Seismic", desc: "Buckling-restrained brace frames, post-tensioned slabs, and deep shaft foundations.", icon: <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />, accent: "from-violet-500 to-fuchsia-600" },
  { title: "Plumbing & Fire", desc: "Hydronic piping, medical gas manifolds, and high-pressure dry pipe suppression systems.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, accent: "from-rose-500 to-red-600" },
  { title: "Commissioning", desc: "Level 4 & 5 commissioning, retro-commissioning, and continuous building analytics.", icon: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />, accent: "from-emerald-500 to-teal-600" },
  { title: "Energy Modeling", desc: "Whole-building energy simulation, daylight modeling, and LEED v4.1 baseline analysis.", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />, accent: "from-blue-500 to-indigo-600" },
];

const steps = [
  { title: "Consult", desc: "Feasibility study and baseline constraints definition." },
  { title: "Design", desc: "Computational modeling, BIM drafting, and system engineering." },
  { title: "Build", desc: "Fabrication-ready documentation and site QA oversight." },
  { title: "Support", desc: "Commissioning, handover, and ongoing performance audits." },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-mono text-violet-600 mb-3 tracking-widest uppercase">Capabilities</p>
          <h1 className="text-5xl font-semibold tracking-tight mb-4 text-slate-900">Our Services</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive engineering disciplines for mission-critical infrastructure, delivered with fabrication-ready precision.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((s) => (
              <GlassCard key={s.title} className="p-6 group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.accent} flex items-center justify-center mb-5 shadow-md`}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">{s.icon}</svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{s.desc}</p>
                <div className="flex items-center gap-1.5 text-sm text-violet-600 group-hover:gap-2.5 transition-all font-medium">
                  View details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-12 text-slate-900">How we deliver</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-semibold tracking-tight mb-6 text-slate-900">Ready to scope your project?</h2>
          <p className="text-lg text-slate-600 mb-8">Transmit your CAD specifications to our principal engineers.</p>
          <Button href="/contact" size="lg">Initiate Project Brief</Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}