import { CSSProperties } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
  circle?: boolean;
};

export function Skeleton({ className = "", style, circle = false }: Props) {
  return (
    <div
      className={`${circle ? "skeleton skeleton-circle" : "skeleton"} ${className}`}
      style={style}
      aria-hidden
    />
  );
}

