import Link from "next/link";

const columns = [
  { title: "Services", links: ["Hydronic Piping", "Electrical Substations", "Sanitary Drainage", "Fire Suppression"], base: "/services" },
  { title: "Structural", links: ["Seismic Analysis", "Post-Tensioned Concrete", "Composite Steel", "Foundation Geotech"], base: "/services" },
  { title: "HVAC", links: ["CFD Modeling", "VAV Distribution", "Chiller Optimization", "Energy Recovery"], base: "/services" },
  { title: "Firm", links: ["About", "Projects", "Careers", "Contact"], base: "" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-12 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-12 mb-12 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xs font-bold text-white">
                ΔE
              </div>
              <span className="font-semibold text-slate-900">Vertex</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              High-tolerance drafting standards, MEP baseline models, and structural computations.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <p className="text-xs font-mono text-slate-500 mb-2 tracking-widest">NEWSLETTER</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="engineer@domain.com"
                className="bg-white border border-slate-200 rounded-full px-4 py-2.5 text-sm w-full md:w-56 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 placeholder:text-slate-400 text-slate-900"
              />
              <button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold mb-4 text-slate-900">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href={col.base || "/"} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500">© 2026 Vertex MEP & Structural Engineering Corp.</p>
          <div className="flex gap-5 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-700">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-700">Terms</Link>
            <span>ISO 9001:2015</span>
          </div>
        </div>
      </div>
    </footer>
  );
}