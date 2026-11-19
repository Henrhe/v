type Props = {
  className?: string;
  color?: "indigo" | "violet" | "cyan";
};

const colors = {
  indigo: "rgba(99,102,241,0.15)",
  violet: "rgba(139,92,246,0.15)",
  cyan: "rgba(34,211,238,0.12)",
};

export function Glow({ className = "", color = "violet" }: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: colors[color] }}
    />
  );
}