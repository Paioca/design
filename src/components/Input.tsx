import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, className, id, ...props }, ref) => {
    const inputId = id ?? `input-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="font-sans text-sm font-medium text-true-800"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-11 px-4 rounded-md border bg-white text-true-900 font-sans text-base",
            "placeholder:text-true-400",
            "focus:outline-none focus:ring-2 focus:ring-rev-500 focus:border-rev-500",
            "disabled:bg-true-50 disabled:cursor-not-allowed",
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-true-200",
            className,
          )}
          {...props}
        />
        {(hint || error) && (
          <span
            className={cn(
              "font-sans text-xs",
              error ? "text-red-600" : "text-true-500",
            )}
          >
            {error ?? hint}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
