import { ReactNode } from "react";
import { cn } from "../lib/cn";

export interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark" | "brand";
  className?: string;
}

const tones = {
  light: "bg-white text-true-900",
  dark: "bg-true-900 text-white",
  brand: "bg-rev-true-gradient text-white",
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  actions,
  align = "left",
  tone = "light",
  className,
}: HeroProps) {
  return (
    <section className={cn("py-24 md:py-32", tones[tone], className)}>
      <div
        className={cn(
          "mx-auto max-w-7xl px-6 md:px-10 flex flex-col gap-6",
          align === "center" && "items-center text-center",
        )}
      >
        {eyebrow && (
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-rev-500">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display font-black text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-lg md:text-xl max-w-2xl opacity-90">
            {subtitle}
          </p>
        )}
        {actions && <div className="flex flex-wrap gap-3 mt-2">{actions}</div>}
      </div>
    </section>
  );
}
