const clients = ["AECOM", "JACOBS", "ARUP", "WSP", "STANTEC", "HOK"];

export function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] py-8">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-mono text-zinc-500 mb-6 tracking-widest">
          TRUSTED BY INDUSTRY LEADERS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40">
          {clients.map((c) => (
            <span key={c} className="text-lg font-semibold tracking-tight">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}