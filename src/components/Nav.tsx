import { ReactNode } from "react";
import { Logo } from "./Logo";
import { cn } from "../lib/cn";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavProps {
  links?: NavLink[];
  cta?: ReactNode;
  tone?: "light" | "dark";
  sticky?: boolean;
  className?: string;
}

export function Nav({ links = [], cta, tone = "light", sticky, className }: NavProps) {
  const isDark = tone === "dark";
  return (
    <header
      className={cn(
        "w-full border-b",
        isDark
          ? "bg-true-900 border-true-800 text-white"
          : "bg-white border-true-100 text-true-900",
        sticky && "sticky top-0 z-50 backdrop-blur-md bg-opacity-90",
        className,
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Logo variant={isDark ? "orange" : "primary"} className="h-8 w-auto" />
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "font-sans text-sm font-medium transition-colors",
                  isDark
                    ? "text-true-100 hover:text-rev-400"
                    : "text-true-700 hover:text-rev-500",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div>{cta}</div>
      </nav>
    </header>
  );
}
