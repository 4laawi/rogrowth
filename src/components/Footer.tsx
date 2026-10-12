import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-3.5 sm:gap-4">
            <Link href="/" className="flex items-center group" aria-label="RoGrowth.ro - Acasă">
              <Image
                src="/rogrowth-logo.png"
                alt="RoGrowth.ro"
                width={180}
                height={50}
                className="h-9 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed font-sans">
              Agenție digitală dedicată afacerilor din România. Dezvoltăm website-uri rapide pe Next.js, magazine online și soluții digitale construite pentru conversie, cu livrare la termen și proprietate 100% asupra codului.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-emerald-400 text-xs sm:text-sm font-semibold border border-slate-700 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Baza: București
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs sm:text-sm font-medium border border-slate-700 font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                Clienți în toată România
              </span>
            </div>
          </div>

          {/* Quick links: Servicii */}
          <div className="flex flex-col gap-2.5 sm:gap-3 font-sans">
            <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wider font-poppins">
              Servicii Web
            </h3>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-xs sm:text-base text-slate-400">
              <li>
                <Link href="/creare-site-web" className="hover:text-emerald-400 transition-colors font-medium text-slate-200 py-1 inline-block">
                  Creare Site Web (Ghid complet) →
                </Link>
              </li>
              <li>
                <Link href="/creare-magazin-online" className="hover:text-emerald-400 transition-colors font-medium text-emerald-300 py-1 inline-block">
                  Creare Magazin Online (Shopify &amp; Woo) →
                </Link>
              </li>
              <li>
                <Link href="/creare-site-web#tipuri-website" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Site-uri de Prezentare
                </Link>
              </li>
              <li>
                <Link href="/creare-site-web#tipuri-website" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Website-uri Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/pret-creare-site-web" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Ghid Prețuri Website 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links: Despre & Politici */}
          <div className="flex flex-col gap-2.5 sm:gap-3 font-sans">
            <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wider font-poppins">
              Garanții &amp; Proces
            </h3>
            <ul className="flex flex-col gap-1.5 sm:gap-2.5 text-xs sm:text-base text-slate-400">
              <li>
                <Link href="/#proces-lucru" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Cum Lucrăm (4 Etape)
                </Link>
              </li>
              <li>
                <Link href="/creare-site-web#proprietate" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Proprietate 100% Cod &amp; Domeniu
                </Link>
              </li>
              <li>
                <Link href="/pret-creare-site-web" className="hover:text-emerald-400 transition-colors font-medium text-emerald-300 py-1 inline-block">
                  Prețuri Creare Site Web (Ghid 2026) →
                </Link>
              </li>
              <li>
                <Link href="/#preturi" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Prețuri Clare Fără Costuri Ascunse
                </Link>
              </li>
              <li>
                <Link href="/#portofoliu" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Portofoliu &amp; Exemple Lucrări
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-emerald-400 transition-colors py-1 inline-block">
                  Întrebări Frecvente (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-2.5 sm:gap-3 font-sans">
            <h3 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wider font-poppins">
              Contact Rapid
            </h3>
            <div className="flex flex-col gap-2 text-xs sm:text-base text-slate-400">
              <p className="text-white font-medium">contact@rogrowth.ro</p>
              <p className="text-slate-300">WhatsApp &amp; Telefon disponibil la cerere</p>
              <p className="text-xs sm:text-sm text-slate-500 pt-1">
                Program de consultanță:<br />
                Luni – Vineri: 09:00 – 18:00
              </p>
              <div className="pt-2">
                <Link
                  href="#contact-rapid"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 min-h-[44px]"
                >
                  Trimite detalii proiect ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center text-center sm:text-left justify-between gap-3 sm:gap-4 text-xs text-slate-500 font-sans">
          <div>
            © {currentYear} RoGrowth Digital Agency (rogrowth.ro). Toate drepturile rezervate.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5">
            <span>Cod curat pe Next.js &amp; E-commerce</span>
            <span>•</span>
            <span>Găzduire &amp; Domeniu la alegerea clientului</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
