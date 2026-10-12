"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

const mainPages: NavItem[] = [
  { label: "Creare Site Web", href: "/creare-site-web" },
  { label: "Creare Magazin Online", href: "/creare-magazin-online", badge: "Nou" },
  { label: "Ghid Prețuri Website 2026", href: "/pret-creare-site-web" },
];

const agencySections: NavItem[] = [
  { label: "Servicii Digitale Agenție", href: "/#servicii-digitale" },
  { label: "Portofoliu & Lucrări", href: "/#portofoliu" },
  { label: "Cum Lucrăm (Proces)", href: "/#proces-lucru" },
  { label: "De Ce RoGrowth", href: "/#de-ce-rogrowth" },
  { label: "Întrebări Frecvente (FAQ)", href: "/#faq" },
];

interface MobileNavProps {
  isScrolled?: boolean;
}

export function MobileNav({ isScrolled = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Prevent background scroll when mobile navigation is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Închide meniul de navigare" : "Deschide meniul de navigare"}
        className={`p-2 rounded-xl transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#34d399] ${
          isScrolled
            ? "text-slate-800 hover:text-black hover:bg-slate-100"
            : "text-slate-200 hover:text-white hover:bg-white/10"
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className={`fixed inset-x-0 top-16 sm:top-20 max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto backdrop-blur-xl border-b shadow-2xl p-5 sm:p-6 transition-all duration-200 z-50 ${
            isScrolled
              ? "bg-white/98 border-slate-200 text-slate-900"
              : "bg-[#060a22]/98 border-white/10 text-white"
          }`}
        >
          <nav className="flex flex-col gap-6">
            {/* Primary Money Pages */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-poppins">
                Pagini &amp; Soluții Principale
              </span>
              {mainPages.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`flex items-center justify-between text-base font-semibold py-2.5 px-3 rounded-xl transition-all min-h-[44px] ${
                      isActive
                        ? isScrolled
                          ? "bg-emerald-50 text-[#2bb673] font-bold"
                          : "bg-white/10 text-[#34d399] font-bold"
                        : isScrolled
                        ? "text-slate-800 hover:bg-slate-50 hover:text-[#2bb673]"
                        : "text-slate-200 hover:bg-white/5 hover:text-[#34d399]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Agency Info & Sections */}
            <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-200/50 dark:border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-poppins">
                Despre Agenție &amp; Lucrări
              </span>
              {agencySections.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center text-sm font-medium py-2 px-3 rounded-lg transition-colors min-h-[44px] ${
                    isScrolled
                      ? "text-slate-600 hover:bg-slate-50 hover:text-[#2bb673]"
                      : "text-slate-300 hover:bg-white/5 hover:text-[#34d399]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <div className="pt-2">
              <Link
                href="#contact-rapid"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#060a22] font-bold text-sm transition-all shadow-md active:scale-95 min-h-[48px]"
              >
                <span>Cere Ofertă Rapidă</span>
                <span className="font-bold text-xs">↗</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
