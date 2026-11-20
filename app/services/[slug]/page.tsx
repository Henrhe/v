import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <span>Home</span> <span>/</span> <span>Services</span> <span>/</span> <span className="text-slate-900">{title}</span>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight mb-4 text-slate-900">{title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-8">
            High-tolerance engineering and computational modeling for {title.toLowerCase()} systems in mission-critical facilities.
          </p>
          <Button href="/contact" size="lg">Request a Quote</Button>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Overview</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our approach to {title} combines rigorous computational analysis with practical construction knowledge. We deliver fabrication-ready models (LOD 400) that eliminate field clashes and streamline installation.
                </p>
                <div className="h-72 w-full rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 font-mono text-sm">[ System Diagram Placeholder ]</span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Scope of Work</h2>
                <ul className="space-y-3">
                  {["Feasibility studies and baseline calculations", "BIM modeling and clash detection", "Equipment sizing and specification", "Construction administration and site visits"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <svg className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4">
              <GlassCard className="p-6">
                <h3 className="font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Discipline</span><span className="font-medium text-slate-900">MEP / Structural</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Delivery</span><span className="font-medium text-slate-900">LOD 400 BIM</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Compliance</span><span className="font-medium text-slate-900">ASHRAE / IEEE</span></div>
                </div>
              </GlassCard>

              <GlassCard className="p-6 bg-slate-900 text-white border-slate-800">
                <h3 className="font-semibold mb-2">Start a Project</h3>
                <p className="text-sm text-slate-300 mb-4">Connect with our principal engineers to discuss your constraints.</p>
                <Button href="/contact" variant="primary" className="w-full">Contact Us</Button>
              </GlassCard>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}