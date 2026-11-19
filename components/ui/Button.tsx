import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}: Props) {
  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 ${sizes[size]}`;

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] hover:brightness-110",
    ghost:
      "text-zinc-300 hover:text-white hover:bg-white/[0.05] border border-white/[0.08]",
    outline:
      "border border-white/[0.15] text-white hover:bg-white/[0.05] hover:border-white/[0.25]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}