import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/cn";

type Variant = "default" | "elevated" | "outline" | "filled" | "brand";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
}

const variants: Record<Variant, string> = {
  default: "bg-white border border-true-200",
  elevated: "bg-white shadow-lg",
  outline: "bg-transparent border-2 border-true-800",
  filled: "bg-true-50",
  brand: "bg-rev-true-gradient text-white",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl p-6", variants[variant], className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-1 pb-4", className)} {...props} />
);

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn("font-display text-2xl font-bold text-true-900", className)}
    {...props}
  />
);

export const CardDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("font-sans text-sm text-true-600", className)} {...props} />
);

export const CardContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("font-sans text-base", className)} {...props} />
);

export const CardFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center gap-3 pt-4", className)} {...props} />
);
