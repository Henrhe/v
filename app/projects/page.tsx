import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";

const projects = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  title: ["Financial Tower", "Cleanroom Facility", "Airport Concourse", "Trauma Center", "Data Center", "Manufacturing Plant"][i % 6] + ` ${i + 1}`,
  tag: ["Commercial", "Biopharma", "Aviation", "Healthcare", "Tech", "Industrial"][i % 6],
  meta: "2024 · MEP & Structural",
}));

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-12 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-5xl font-semibold tracking-tight mb-4 text-slate-900">Projects</h1>
          <p className="text-lg text-slate-600 max-w-xl">Commissioned work across healthcare, aviation, and data centers.</p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="pb-8 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap gap-2 items-center">
          {["All", "Commercial", "Aviation", "Biopharma", "Healthcare"].map((filter, i) => (
            <button key={filter} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>
              {filter}
            </button>
          ))}
          <div className="ml-auto">
            <input type="text" placeholder="Search projects..." className="bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:border-violet-400 w-64" />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <GlassCard key={p.id} className="overflow-hidden group cursor-pointer">
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                   <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                   <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-mono px-2 py-1 rounded-full bg-white/80 border border-slate-200 backdrop-blur text-slate-700">{p.tag}</span>
                   </div>
                </div>
                <div className="p-5 bg-white border-t border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-violet-700 transition-colors">{p.title}</h3>
                  <p className="text-xs font-mono text-slate-500">{p.meta}</p>
                </div>
              </GlassCard>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            {[1, 2, 3].map(page => (
              <button key={page} className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${page === 1 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{page}</button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}