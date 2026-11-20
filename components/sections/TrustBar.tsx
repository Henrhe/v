const clients = ["AECOM", "JACOBS", "ARUP", "WSP", "STANTEC", "HOK"];

export function TrustBar() {
  return (
    <section className="border-y border-slate-200 py-8 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-mono text-slate-500 mb-6 tracking-widest">
          TRUSTED BY INDUSTRY LEADERS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
          {clients.map((c) => (
            <span key={c} className="text-lg font-semibold tracking-tight text-slate-700">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}