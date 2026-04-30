import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "link";
type Size = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-display font-bold uppercase tracking-wide " +
  "transition-all duration-200 ease-rev-out focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-rev-500 focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-rev-500 text-white hover:bg-rev-600 active:bg-rev-700 shadow-md hover:shadow-lg",
  secondary:
    "bg-true-800 text-white hover:bg-true-900 active:bg-true-950 shadow-md hover:shadow-lg",
  outline:
    "border-2 border-true-800 text-true-800 hover:bg-true-800 hover:text-white",
  ghost:
    "text-true-800 hover:bg-true-100 active:bg-true-200",
  link:
    "text-rev-500 hover:text-rev-600 underline-offset-4 hover:underline px-0",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-md",
  md: "h-11 px-5 text-base rounded-md",
  lg: "h-13 px-7 text-lg rounded-lg",
  xl: "h-16 px-9 text-xl rounded-lg",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        base,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = "Button";
