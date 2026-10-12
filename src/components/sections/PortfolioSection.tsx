import Image from "next/image";
import Link from "next/link";

const PORTFOLIO_CASES = [
  {
    title: "Dental Crown Health",
    url: "https://dentalcrownhealth.ro/",
    category: "Clinică Stomatologică & Medical",
    tech: "Next.js",
    image: "/portfolio-images/dentalcrownhealth.webp",
    imageMobile: "/portfolio-images/dentalcrownhealth(mobile).webp",
    description:
      "Platformă medicală bilingvă pentru turism dentar, cu prezentarea transparentă a tratamentelor, structură SEO și programări online rapide.",
  },
  {
    title: "Baristas Coffee Shop",
    url: "https://www.baristas.ro/",
    category: "E-Commerce & Specialty Coffee",
    tech: "WordPress / WooCommerce",
    image: "/portfolio-images/BARSITAS.webp",
    imageMobile: "/portfolio-images/BARSITAS(mobile).webp",
    description:
      "Magazin online dedicat cafelei de specialitate și echipamentelor premium, optimizat pentru mobil cu plăți securizate și generare automată de AWB.",
  },
  {
    title: "Rent Dacia București",
    url: "https://rentdacia.ro/",
    category: "Închirieri Auto & Otopeni",
    tech: "WordPress",
    image: "/portfolio-images/rentdacia.webp",
    imageMobile: "/portfolio-images/rentdacia(mobile).webp",
    description:
      "Website de rent-a-car pentru București și Aeroportul Otopeni, cu selector interactiv de autovehicule, tarife clare și rezervare rapidă.",
  },
  {
    title: "Kasata Imobiliare",
    url: "https://www.kasata.ro/",
    category: "Imobiliare & Lead Generation",
    tech: "Next.js",
    image: "/portfolio-images/kasataaa.webp",
    imageMobile: "/portfolio-images/kasataaa(mobile).webp",
    description:
      "Portal imobiliar pentru proprietăți din București și Ilfov, cu filtrare avansată a anunțurilor și fluxuri de captare a cererilor calificate de vizionare.",
  },
];

export function PortfolioSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="portofoliu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase font-poppins inline-block">
              PORTOFOLIU &amp; PROIECTE REALE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
              Website-uri lansate și{" "}
              <span className="text-[#10b981]">proiecte active ale clienților</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-1 font-sans">
              Proiecte dezvoltate pe Next.js și WordPress, optimizate pentru motoarele de căutare și adaptate specificului fiecărei industrii.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-slate-600 text-xs sm:text-sm font-sans">
            <span>Proiecte dezvoltate pentru afaceri din:</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-[#150773] font-semibold border border-slate-200">
              București &amp; Național
            </span>
          </div>
        </div>

        {/* 4 Clean Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {PORTFOLIO_CASES.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300 overflow-hidden"
            >
              {/* Screenshot: 100% visible with zero overlay badges */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-slate-100 relative border-b border-slate-100">
                <picture className="contents">
                  <source
                    media="(max-width: 639px)"
                    srcSet={item.imageMobile}
                  />
                  <Image
                    src={item.image}
                    alt={`${item.title} - Website creat de RoGrowth`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </picture>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between gap-4 sm:gap-5">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 font-poppins group-hover:text-slate-700 transition-colors">
                    {item.title}
                  </h3>

                  {/* One line of small muted text under the title */}
                  <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
                    {item.category} · {item.tech}
                  </p>

                  {/* 2-line description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-2.5 sm:mt-3 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Footer: Domain in small muted text + Single CTA */}
                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm text-slate-500">
                  <span className="font-mono text-slate-400 truncate max-w-[150px] sm:max-w-none">
                    {item.url.replace("https://", "").replace("www.", "").replace(/\/$/, "")}
                  </span>
                  <span className="font-medium text-slate-700 group-hover:text-slate-950 transition-colors whitespace-nowrap ml-2">
                    Vizitează site-ul →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 sm:gap-6 shadow-xl">
          <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
            <span className="text-2xl sm:text-3xl p-2 sm:p-2.5 rounded-2xl bg-white/10 text-white shrink-0 mt-0.5 sm:mt-0">
              ⚡
            </span>
            <div>
              <p className="text-base sm:text-lg font-bold font-poppins leading-snug">
                Ai un proiect similar în minte sau vrei să analizăm un exemplu de site?
              </p>
              <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                Trimite-ne linkul de referință sau câteva detalii și îți facem o propunere adaptată obiectivelor tale.
              </p>
            </div>
          </div>
          <Link
            href="#contact-rapid"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#060a22] text-sm sm:text-base font-bold whitespace-nowrap transition-all shadow-md active:scale-95 shrink-0 min-h-[48px]"
          >
            <span>Discută proiectul tău</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


