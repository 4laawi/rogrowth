import Link from "next/link";

export function RoGrowthPricingSection() {
  const packages = [
    {
      title: "Site de Prezentare Simplu",
      range: "€300 – €400",
      timeline: "2–4 săptămâni",
      targetText: "Pentru companii la început de drum, cabinete sau afaceri de servicii locale.",
      highlights: [
        "Până la 5 pagini structurate (Acasă, Servicii, Despre, Tarife, Contact)",
        "Design 100% responsiv pe mobil, tabletă și desktop",
        "Formular de contact rapid & apel direct clicabil",
        "Fundație tehnică SEO (sitemap XML, meta-titluri, descrieri)",
        "Configurare Google Search Console & securitate SSL",
        "2 runde structurate de revizii incluse",
      ],
      isPopular: false,
      ctaText: "Solicită ofertă prezentare",
    },
    {
      title: "Website Avansat / Lead Generation",
      range: "€700 – €1,200",
      timeline: "3–5 săptămâni",
      targetText: "Pentru firme stabilite care doresc ca website-ul să atragă și să convertească activ clienți.",
      highlights: [
        "Design UI/UX complet personalizat pe specificul industriei tale",
        "Pagini individuale dedicate pentru fiecare serviciu în parte",
        "Formulare interactive de calificare a cererilor de ofertă",
        "Viteză optimizată de încărcare pe mobil (sub 1s)",
        "Structură strategică de conținut și optimizare pentru conversie",
        "2 runde structurate de revizii incluse",
      ],
      isPopular: true,
      ctaText: "Solicită ofertă personalizată",
    },
    {
      title: "Magazin Online & Sisteme Custom",
      range: "€1,000 – €2,300+",
      timeline: "5–8 săptămâni",
      targetText: "Pentru vânzări de produse online, platforme de rezervări sau aplicații web personalizate.",
      highlights: [
        "Platformă e-commerce pe Shopify, WooCommerce sau Next.js",
        "Catalog structurat de produse, variații, filtre și căutare live",
        "Plăți securizate cu cardul (Netopia, Stripe) și generare automată AWB",
        "Facturare automată (SmartBill / Oblio)",
        "Instruire completă pentru administrarea comenzilor și stocurilor",
        "2 runde structurate de revizii incluse",
      ],
      isPopular: false,
      ctaText: "Discută cerințele proiectului",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="preturi-rogrowth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2 block font-poppins">
            PACHETELE &amp; POLITICA ROGROWTH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-extrabold text-[#150773] tracking-tight font-poppins">
            Prețurile noastre: pachete clare, fără costuri ascunse
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            La RoGrowth stabilim un acord scris înainte de a scrie prima linie de cod. Prețul agreat pentru cerințele specificate este prețul final facturat:
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-200 ${
                pkg.isPopular
                  ? "bg-slate-900 text-white border-2 border-emerald-500 shadow-xl relative"
                  : "bg-white border border-slate-200/90 text-slate-900 shadow-xs"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold tracking-wide uppercase font-poppins shadow-sm">
                  Cel mai solicitat
                </span>
              )}

              <div>
                <h3 className={`text-xl sm:text-2xl font-bold font-poppins ${pkg.isPopular ? "text-white" : "text-[#150773]"}`}>
                  {pkg.title}
                </h3>

                <div className="mt-4 mb-2">
                  <span className={`text-3xl sm:text-4xl font-extrabold font-poppins ${pkg.isPopular ? "text-emerald-400" : "text-[#10b981]"}`}>
                    {pkg.range}
                  </span>
                  <span className={`block text-xs mt-1 font-sans ${pkg.isPopular ? "text-slate-400" : "text-slate-500"}`}>
                    ⏱️ Timp estimat de execuție: {pkg.timeline}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mt-3 mb-6 font-sans ${pkg.isPopular ? "text-slate-300" : "text-slate-600"}`}>
                  {pkg.targetText}
                </p>

                <div className="border-t border-slate-100/20 pt-5 mb-6">
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-3 font-poppins ${pkg.isPopular ? "text-slate-300" : "text-slate-700"}`}>
                    Ce include în mod standard:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {pkg.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className={`font-bold shrink-0 ${pkg.isPopular ? "text-emerald-400" : "text-emerald-600"}`}>
                          ✓
                        </span>
                        <span className={pkg.isPopular ? "text-slate-200" : "text-slate-700"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100/10">
                <Link
                  href="#contact-rapid"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold transition-all shadow-sm active:scale-95 ${
                    pkg.isPopular
                      ? "bg-[#2bb673] hover:bg-[#239960] text-[#070c2a]"
                      : "bg-[#150773] hover:bg-emerald-600 text-white"
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Assurances Breakdown */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-slate-700">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-bold text-[#150773] font-poppins">
              <span className="text-lg">💳</span>
              <span>Eșalonare sigură a plății</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              30% avans la semnarea contractului și demararea lucrărilor, iar restul de 70% doar la finalizare, după testarea și aprobarea completă pe link privat.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-bold text-[#150773] font-poppins">
              <span className="text-lg">🔄</span>
              <span>2 runde de revizii structurate</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Include două runde complete de ajustări pentru texte, layout și imagini pe linkul privat de testare, înainte ca site-ul să fie lansat public.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-bold text-[#150773] font-poppins">
              <span className="text-lg">🧾</span>
              <span>Garanția prețului fix</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Prețul stipulat în contract pentru cerințele agreate este prețul final facturat. Fără costuri ascunse adăugate pe parcurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
