import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-8 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <span>Home</span> <span>/</span> <span>Projects</span> <span>/</span> <span className="text-slate-900">{title}</span>
          </div>
          <h1 className="text-5xl font-semibold tracking-tight mb-6 text-slate-900">{title}</h1>
          
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-mono text-slate-600 mb-8 border-y border-slate-200 py-4">
            <div><span className="text-slate-400">Client:</span> Meridian Group</div>
            <div><span className="text-slate-400">Sector:</span> Commercial</div>
            <div><span className="text-slate-400">Year:</span> 2024</div>
            <div><span className="text-slate-400">Services:</span> MEP & Structural</div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-96 w-full rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 border border-slate-200 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
             <span className="text-slate-400 font-mono text-sm z-10">[ Hero Image Placeholder ]</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">The Challenge</h2>
                <p className="text-slate-600 leading-relaxed">The facility required a zero-downtime transition while upgrading aging infrastructure. Strict acoustic limits and limited ceiling plenums presented significant coordination challenges.</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Solution</h2>
                <p className="text-slate-600 leading-relaxed">We utilized computational fluid dynamics to optimize duct routing and implemented a prefabricated modular piping system. BIM coordination allowed us to resolve all clashes before site mobilization.</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[{ n: "1.4M", l: "Sq Ft" }, { n: "0", l: "Clashes" }, { n: "99.9%", l: "Uptime" }].map((stat, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                    <div className="text-2xl font-semibold text-slate-900">{stat.n}</div>
                    <div className="text-xs font-mono text-slate-500 mt-1 uppercase">{stat.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside>
              <GlassCard className="p-6 sticky top-24">
                <h3 className="font-semibold text-slate-900 mb-4 border-b border-slate-200 pb-2">Project Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Location</span><span className="font-medium text-slate-900 text-right">Boston, MA</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Duration</span><span className="font-medium text-slate-900 text-right">18 Months</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Certification</span><span className="font-medium text-slate-900 text-right">LEED Platinum</span></div>
                </div>
              </GlassCard>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
