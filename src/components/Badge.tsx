import { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type Variant = "rev" | "true" | "subtle" | "outline" | "success" | "warning" | "danger";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  rev: "bg-rev-500 text-white",
  true: "bg-true-800 text-white",
  subtle: "bg-rev-50 text-rev-700",
  outline: "border border-true-300 text-true-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  danger: "bg-red-100 text-red-700",
};

export function Badge({ variant = "subtle", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full",
        "font-sans text-xs font-medium uppercase tracking-wider",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
