import { ReactNode } from "react";
import { Logo } from "./Logo";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  tagline?: ReactNode;
  columns?: FooterColumn[];
  copyright?: string;
}

export function Footer({
  tagline = "Para resultados reais é preciso analisar o panorama, identificar o ponto de melhoria e agir.",
  columns = [],
  copyright = `© ${new Date().getFullYear()} RevTrue. Todos os direitos reservados.`,
}: FooterProps) {
  return (
    <footer className="bg-true-900 text-true-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2 flex flex-col gap-4">
            <Logo variant="orange" className="h-9 w-auto" />
            <p className="font-sans text-sm text-true-300 max-w-md">{tagline}</p>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-true-300 hover:text-rev-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-true-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-true-400">{copyright}</span>
        </div>
      </div>
    </footer>
  );
}
