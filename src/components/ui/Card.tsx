import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <div
      className={`
        relative p-6 rounded-2xl
        bg-gradient-to-b from-white/5 to-transparent
        border border-white/10
        ${hover ? "hover:border-[#00d4ff]/50 transition-all duration-300" : ""}
        ${glow ? "hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]" : ""}
        ${className}
      `}
    >
      {/* Glow effect on hover */}
      {hover && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00d4ff]/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
