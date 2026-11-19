import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
};

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: Props) {
  return (
    <div
      className={`
        relative rounded-2xl
        bg-white/[0.03] border border-white/[0.08]
        backdrop-blur-xl
        ${hover ? "transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.14]" : ""}
        ${glow ? "shadow-[0_0_40px_-15px_rgba(139,92,246,0.4)]" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}