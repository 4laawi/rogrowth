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
        // 96px matches the header height on desktop (h-24)
        setIsScrolled(rect.bottom <= 96);
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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="h-20 sm:h-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-5 sm:gap-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group" aria-label="RoGrowth.ro - Acasă">
          <Image
            src={isScrolled ? "/rogrowth-logo.png" : "/rogrowth-logo-light.png"}
            alt="RoGrowth.ro"
            width={240}
            height={70}
            className="h-12 sm:h-15 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-base lg:text-[17px] xl:text-lg transition-colors duration-300 ${
            isScrolled ? "text-slate-700" : "text-slate-200"
          }`}
        >
          <Link
            href="/creare-site-web"
            className={`transition-all py-2 ${
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
            className={`transition-all py-2 ${
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
            className={`transition-all py-2 ${
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
            className={`transition-all py-2 ${
              isScrolled ? "hover:text-[#2bb673]" : "hover:text-[#34d399]"
            }`}
          >
            Portofoliu
          </Link>
          <Link
            href="/#proces-lucru"
            className={`transition-all py-2 ${
              isScrolled ? "hover:text-[#2bb673]" : "hover:text-[#34d399]"
            }`}
          >
            Cum Lucrăm
          </Link>
          <Link
            href="/#faq"
            className={`transition-all py-2 ${
              isScrolled ? "hover:text-[#2bb673]" : "hover:text-[#34d399]"
            }`}
          >
            FAQ
          </Link>
        </nav>

        {/* Desktop Action & Language Indicator */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-5">
          <div
            className={`inline-flex items-center p-1 sm:p-1.5 rounded-full text-xs sm:text-[13px] transition-colors duration-300 ${
              isScrolled
                ? "bg-slate-100 border border-slate-200"
                : "bg-white/10 border border-white/10"
            }`}
          >
            <span
              className={`px-3 sm:px-3.5 py-1 rounded-full font-bold transition-colors duration-300 ${
                isScrolled
                  ? "bg-white text-[#060a22] shadow-xs"
                  : "bg-white/20 text-white shadow-xs"
              }`}
            >
              RO
            </span>
            <span
              className="px-3 sm:px-3.5 py-1 rounded-full text-slate-400 font-medium cursor-not-allowed"
              title="În curând"
            >
              EN
            </span>
          </div>
          <Link
            href="#contact-rapid"
            className="inline-flex items-center gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#060a22] font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <span>Cere Ofertă</span>
            <span className="font-extrabold text-base">↗</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <MobileNav isScrolled={isScrolled} />
      </div>
    </header>
  );
}
