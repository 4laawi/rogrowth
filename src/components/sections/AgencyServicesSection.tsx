import Link from "next/link";
import Image from "next/image";

const SERVICE_IMG_1 = "/charcters-3d-webp/web-page.webp";
const SERVICE_IMG_2 = "/charcters-3d-webp/ecom-shop.webp";
const SERVICE_IMG_3 = "/charcters-3d-webp/fix.webp";

export function AgencyServicesSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#fbfcfd] border-t border-slate-100" id="dezvoltare-web">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2.5 sm:mb-3 font-poppins inline-block">
            PUNCTUL DE PORNIRE • CREARE SITE-URI WEB
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Un website rapid și convingător:{" "}
            <span className="text-[#10b981]">fundația oricărei strategii digitale</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans max-w-3xl">
            Cel mai căutat serviciu la RoGrowth este realizarea de website-uri profesionale. Concepem fiecare proiect adaptat publicului tău, asigurând viteză superioară pe mobil, cod curat și o arhitectură clară pentru generarea de clienți.
          </p>
        </div>

        {/* 3 Core Web Formats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-14">
          {/* Format 1 */}
          <div className="flex flex-col items-center text-center group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[28px] border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] hover:border-emerald-200 hover:shadow-lg transition-all">
            <div className="w-full h-40 sm:h-48 flex items-end justify-center mb-4 sm:mb-6">
              <Image
                src={SERVICE_IMG_1}
                alt="Site de prezentare profesional"
                width={220}
                height={220}
                className="max-h-36 sm:max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#150773] mb-2 sm:mb-3 font-poppins">
              Site-uri de Prezentare &amp; Lead-Gen
            </h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 mb-5 sm:mb-6 font-sans">
              Prezintă serviciile companiei cu autoritate, inspiră încredere instantă și colectează cereri de ofertă de la vizitatori interesați.
            </p>
            <Link
              href="/creare-site-web"
              className="mt-auto w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#5243aa]/30 hover:bg-[#150773] hover:text-white text-[#150773] text-xs sm:text-sm font-semibold transition-colors min-h-[44px]"
            >
              Află detalii creare site →
            </Link>
          </div>

          {/* Format 2 */}
          <div className="flex flex-col items-center text-center group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[28px] border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] hover:border-emerald-200 hover:shadow-lg transition-all">
            <div className="w-full h-40 sm:h-48 flex items-end justify-center mb-4 sm:mb-6">
              <Image
                src={SERVICE_IMG_2}
                alt="Magazin online e-commerce"
                width={220}
                height={220}
                className="max-h-36 sm:max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#150773] mb-2 sm:mb-3 font-poppins">
              Magazine Online (E-Commerce)
            </h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 mb-5 sm:mb-6 font-sans">
              Vinde produse la nivel național cu o platformă rapidă (Shopify, WooCommerce sau Next.js), plăți cu cardul și integrare de curierat.
            </p>
            <Link
              href="/creare-magazin-online"
              className="mt-auto w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#5243aa]/30 hover:bg-[#150773] hover:text-white text-[#150773] text-xs sm:text-sm font-semibold transition-colors min-h-[44px]"
            >
              Află detalii magazine online →
            </Link>
          </div>

          {/* Format 3 */}
          <div className="flex flex-col items-center text-center group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[28px] border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] hover:border-emerald-200 hover:shadow-lg transition-all">
            <div className="w-full h-40 sm:h-48 flex items-end justify-center mb-4 sm:mb-6">
              <Image
                src={SERVICE_IMG_3}
                alt="Sisteme Web & Mentenanță"
                width={220}
                height={220}
                className="max-h-36 sm:max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#150773] mb-2 sm:mb-3 font-poppins">
              Sisteme Web &amp; Mentenanță
            </h3>
            <p className="text-xs sm:text-sm lg:text-base leading-relaxed text-slate-600 mb-5 sm:mb-6 font-sans">
              Sisteme de programări, dashboard-uri personalizate și suport tehnic dedicat pentru funcționarea ireproșabilă a prezenței tale online.
            </p>
            <Link
              href="/creare-site-web"
              className="mt-auto w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#5243aa]/30 hover:bg-[#150773] hover:text-white text-[#150773] text-xs sm:text-sm font-semibold transition-colors min-h-[44px]"
            >
              Află detalii sisteme custom →
            </Link>
          </div>
        </div>

        {/* Prominent Deep Link to Commercial Page */}
        <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0b132b] text-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-xs sm:text-sm font-semibold text-emerald-400 uppercase tracking-wider font-poppins">
              Pagina dedicată de servicii web
            </span>
            <h4 className="text-base sm:text-lg lg:text-xl font-bold font-poppins leading-snug">
              Vrei să consulți toate pachetele, tehnologiile și procesul detaliat de creare site?
            </h4>
          </div>
          <Link
            href="/creare-site-web"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#070c2a] font-bold text-sm sm:text-base whitespace-nowrap transition-all shadow-md active:scale-95 min-h-[48px]"
          >
            <span>Vezi pagina creare site web</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
