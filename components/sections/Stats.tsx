const stats = [
  { value: "1,240+", label: "PROJECTS", sub: "Registered specifications" },
  { value: "99.98%", label: "RELIABILITY", sub: "Redundancy spec" },
  { value: "3.4M", label: "SQ FT", sub: "Conditioned space" },
  { value: "0.00″", label: "DEFLECTION", sub: "Unplanned yield" },
];

export function Stats() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-slate-50 border border-slate-200 p-6 hover:bg-white hover:shadow-md transition-all">
              <div className="text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent mb-2">
                {s.value}
              </div>
              <div className="text-xs font-mono text-violet-600 mb-2">{s.label}</div>
              <div className="text-xs text-slate-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}