import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  glow?: boolean;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white hover:opacity-90",
  secondary: "bg-[#1e3a5f] text-white hover:bg-[#2d4a6f]",
  outline:
    "border border-[#00d4ff]/50 text-[#00d4ff] hover:bg-[#00d4ff]/10",
  ghost: "text-[#94a3b8] hover:text-white hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  glow = false,
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-lg transition-all ${variants[variant]} ${sizes[size]} ${glow ? "animate-pulse-glow" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
