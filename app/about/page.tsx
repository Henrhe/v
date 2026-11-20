import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const team = [
  { name: "Sarah Chen", role: "Managing Principal" },
  { name: "Marcus Webb", role: "Director of MEP" },
  { name: "Dr. Elena Rossi", role: "Head of Structural" },
  { name: "James Okafor", role: "Lead BIM Manager" },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-mono text-violet-600 mb-3 tracking-widest uppercase">The Firm</p>
          <h1 className="text-5xl font-semibold tracking-tight mb-6 text-slate-900">About Vertex</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            We are a collective of engineers, modelers, and problem solvers dedicated to the built environment.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>Founded in 2008, Vertex was built on the premise that engineering documentation should be construction-ready, not just conceptually accurate. We bridge the gap between design intent and field execution.</p>
              <p>Our team operates at the intersection of traditional structural mechanics and modern computational analysis. Whether simulating airflow through a biopharma cleanroom or calculating seismic drift in a high-rise, we rely on data, not guesswork.</p>
            </div>
            <div className="h-80 w-full rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
              <span className="text-slate-400 font-mono text-sm">[ Office/Team Image ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ n: "18+", l: "Years Experience" }, { n: "1,240+", l: "Projects" }, { n: "240+", l: "Engineers" }, { n: "50", l: "States Licensed" }].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-semibold text-slate-900 mb-1">{s.n}</div>
                <div className="text-xs font-mono text-slate-500 uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold tracking-tight mb-10 text-slate-900">Leadership</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl bg-slate-50 border border-slate-200 p-5 text-center">
                <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-slate-200" />
                <h3 className="font-semibold text-slate-900">{t.name}</h3>
                <p className="text-xs font-mono text-slate-500 mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}