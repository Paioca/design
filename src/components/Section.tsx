import { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type Tone = "default" | "subtle" | "dark" | "brand";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: Tone;
  container?: boolean;
}

const tones: Record<Tone, string> = {
  default: "bg-white text-true-900",
  subtle: "bg-true-50 text-true-900",
  dark: "bg-true-900 text-white",
  brand: "bg-rev-true-gradient text-white",
};

export function Section({
  tone = "default",
  container = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 md:py-24", tones[tone], className)} {...props}>
      {container ? (
        <div className="mx-auto max-w-7xl px-6 md:px-10">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}
