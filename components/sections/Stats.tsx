
const stats = [
  { value: "1,240+", label: "PROJECTS", sub: "Registered specifications" },
  { value: "99.98%", label: "RELIABILITY", sub: "Redundancy spec" },
  { value: "3.4M", label: "SQ FT", sub: "Conditioned space" },
  { value: "0.00″", label: "DEFLECTION", sub: "Unplanned yield" },
];

export function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white/[0.03] border border-white/[0.08] p-6 hover:bg-white/[0.05] transition-colors"
            >
              <div className="text-3xl lg:text-4xl font-semibold tracking-tight bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-2">
                {s.value}
              </div>
              <div className="text-xs font-mono text-violet-400 mb-2">{s.label}</div>
              <div className="text-xs text-zinc-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}