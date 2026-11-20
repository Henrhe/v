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
  href, children, variant = "primary", size = "md",
  className = "", onClick, type = "button",
}: Props) {
  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 ${sizes[size]}`;

  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] hover:brightness-110",
    ghost:
      "text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200",
    outline:
      "border border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button type={type} onClick={onClick} className={cls}>{children}</button>;
}