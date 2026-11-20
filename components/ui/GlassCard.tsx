import { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; hover?: boolean; glow?: boolean };

export function GlassCard({ children, className = "", hover = true, glow = false }: Props) {
  return (
    <div
      className={`
        relative rounded-2xl bg-white/70 border border-slate-200 backdrop-blur-xl shadow-sm
        ${hover ? "transition-all duration-300 hover:shadow-md hover:border-slate-300" : ""}
        ${glow ? "shadow-[0_0_40px_-15px_rgba(139,92,246,0.3)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}