"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // 80px matches the header height (h-20)
        setIsScrolled(rect.bottom <= 80);
      } else {
        setIsScrolled(window.scrollY > 480);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group" aria-label="RoGrowth.ro - Acasă">
          <Image
            src={isScrolled ? "/rogrowth-logo.png" : "/rogrowth-logo-light.png"}
            alt="RoGrowth.ro"
            width={180}
            height={50}
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-6 xl:gap-7 font-medium text-sm lg:text-[15px] transition-colors duration-300 ${
            isScrolled ? "text-slate-700" : "text-slate-200"
          }`}
        >
          <Link
            href="/creare-site-web"
            className={`transition-all py-1 ${
              pathname === "/creare-site-web"
                ? isScrolled
                  ? "text-[#2bb673] font-bold border-b-2 border-[#2bb673]"
                  : "text-[#34d399] font-bold border-b-2 border-[#34d399]"
                : isScrolled
                ? "hover:text-[#2bb673]"
                : "hover:text-[#34d399]"
            }`}
          >
            Creare Site Web
          </Link>
          <Link
            href="/creare-magazin-online"
            className={`transition-all py-1 ${
              pathname === "/creare-magazin-online"
                ? isScrolled
                  ? "text-[#2bb673] font-bold border-b-2 border-[#2bb673]"
                  : "text-[#34d399] font-bold border-b-2 border-[#34d399]"
                : isScrolled
                ? "hover:text-[#2bb673]"
                : "hover:text-[#34d399]"
            }`}
          >
            Magazin Online
          </Link>
          <Link
            href="/pret-creare-site-web"
            className={`transition-all py-1 ${
              pathname === "/pret-creare-site-web"
                ? isScrolled
                  ? "text-[#2bb673] font-bold border-b-2 border-[#2bb673]"
                  : "text-[#34d399] font-bold border-b-2 border-[#34d399]"
                : isScrolled
                ? "hover:text-[#2bb673]"
                : "hover:text-[#34d399]"
            }`}
          >
            Ghid Prețuri
          </Link>
          <Link
            href="/#portofoliu"
            className={`transition-all py-1 ${
              isScrolled ? "hover:text-[#2bb673]" : "hover:text-[#34d399]"
            }`}
          >
            Portofoliu
          </Link>
          <Link
            href="/#proces-lucru"
            className={`transition-all py-1 ${
              isScrolled ? "hover:text-[#2bb673]" : "hover:text-[#34d399]"
            }`}
          >
            Cum Lucrăm
          </Link>
          <Link
            href="/#faq"
            className={`transition-all py-1 ${
              isScrolled ? "hover:text-[#2bb673]" : "hover:text-[#34d399]"
            }`}
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop Action & Language Indicator */}
        <div className="hidden sm:flex items-center gap-4">
          <div
            className={`inline-flex items-center p-0.5 rounded-full text-xs transition-colors duration-300 ${
              isScrolled
                ? "bg-slate-100 border border-slate-200"
                : "bg-white/10 border border-white/10"
            }`}
          >
            <span
              className={`px-2.5 py-0.5 rounded-full font-bold transition-colors duration-300 ${
                isScrolled
                  ? "bg-white text-[#060a22] shadow-xs"
                  : "bg-white/20 text-white shadow-xs"
              }`}
            >
              RO
            </span>
            <span
              className="px-2.5 py-0.5 rounded-full text-slate-400 font-medium cursor-not-allowed"
              title="În curând"
            >
              EN
            </span>
          </div>
          <Link
            href="#contact-rapid"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#060a22] font-bold text-sm transition-all shadow-sm active:scale-95"
          >
            <span>Cere Ofertă</span>
            <span className="font-bold text-xs">↗</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <MobileNav isScrolled={isScrolled} />
      </div>
    </header>
  );
}
