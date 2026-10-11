export function TiersComparisonSection() {
  const comparison = [
    {
      bracket: "Site de €300 – €400",
      tagline: "Prezență profesională de bază pentru afaceri locale și debut",
      colorClass: "border-slate-200/90 bg-white text-slate-900 shadow-xs",
      headerBg: "bg-slate-100 text-slate-800",
      whatYouGet: [
        "Website de prezentare curat (~5 pagini standardizate)",
        "Design adaptat și optimizat pentru smartphone și desktop",
        "Formular rapid de contact, apel direct și integrare hartă",
        "Fundație tehnică SEO (sitemap XML, meta-titluri, indexare Search Console)",
        "Soluție excelentă pentru lansarea rapidă a unei activități",
      ],
      limitations: [
        "Fără arhitectură complexă pe pagini individuale extinse",
        "Textele și imaginile sunt furnizate în întregime de către client",
        "Nu include funcționalități de e-commerce, plăți online sau conturi",
      ],
      verdict:
        "O alegere excelentă dacă ai nevoie de o carte de vizită digitală credibilă, rapidă și sigură la un cost de pornire redus.",
    },
    {
      bracket: "Site de €700 – €1.200",
      tagline: "Website axat pe generare de lead-uri, conversie și SEO avansat",
      colorClass: "border-2 border-emerald-500 bg-slate-900 text-white shadow-xl relative",
      headerBg: "bg-emerald-500 text-slate-950 font-bold",
      isPopular: true,
      whatYouGet: [
        "Design UI/UX personalizat, conceput pe specificul industriei tale",
        "Pagini de aterizare (landing pages) dedicate pentru fiecare serviciu",
        "Fundație SEO on-page completă și structură clară de conversie",
        "Formulare inteligente de calificare a cererilor și integrare WhatsApp",
        "Viteză ridicată de încărcare pe mobil (sub 1s) și cod optimizat",
      ],
      limitations: [
        "Timp mai mare de planificare și colaborare pe conținut (3–5 săptămâni)",
        "Nu include procesare complexă de magazin cu mii de produse",
      ],
      verdict:
        "Cea mai profitabilă investiție pentru companii active care vor ca site-ul să aducă cereri de ofertă și clienți noi în fiecare săptămână.",
    },
    {
      bracket: "Proiect de €2.000+",
      tagline: "Magazine online avansate, platforme custom și automatizări",
      colorClass: "border-slate-200/90 bg-white text-slate-900 shadow-xs",
      headerBg: "bg-[#150773] text-white",
      whatYouGet: [
        "Platformă e-commerce avansată sau aplicație web pe Next.js",
        "Plăți cu cardul, generare automată AWB și facturare automată",
        "Filtrare avansată pe variații de produse, căutare live și conturi client",
        "Integrări API dedicate cu sisteme de gestiune, CRM sau ERP",
        "Panou intern de administrare adaptat pe fluxul afacerii",
      ],
      limitations: [
        "Necesită bugete clare și timp de dezvoltare între 5 săptămâni și 2-3 luni",
        "Implică mentenanță tehnică periodică pentru siguranța tranzacțiilor",
      ],
      verdict:
        "Recomandat companiilor care vând masiv produse online sau care au procese interne complexe ce necesită automatizare digitală.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="comparatie-bugete">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2 block font-poppins">
            ANALIZĂ OBIECTIVĂ A BUGETELOR
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-extrabold text-[#150773] tracking-tight font-poppins">
            Diferența reală între un site de €300, €1.000 și €2.000+
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            În dezvoltarea web, prețul reflectă direct volumul de ore alocate, profunzimea designului UI/UX și obiectivele comerciale urmărite:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {comparison.map((tier, index) => {
            const isDark = tier.isPopular;
            return (
              <div
                key={index}
                className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-200 ${tier.colorClass}`}
              >
                {tier.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold tracking-wide uppercase font-poppins shadow-sm">
                    Recomandat pentru creștere
                  </span>
                )}

                <div>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-poppins ${tier.headerBg}`}>
                      {tier.bracket}
                    </span>
                    <h3 className={`text-xl font-bold font-poppins mt-3.5 leading-snug ${isDark ? "text-white" : "text-[#150773]"}`}>
                      {tier.tagline}
                    </h3>
                  </div>

                  <div className="mt-6">
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-3 font-poppins ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                      Ce primești la acest nivel:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {tier.whatYouGet.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className={`font-bold shrink-0 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                            ✓
                          </span>
                          <span className={isDark ? "text-slate-200" : "text-slate-700"}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-6 pt-5 border-t ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-3 font-poppins ${isDark ? "text-amber-400" : "text-amber-800"}`}>
                      Unde sunt limitele:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {tier.limitations.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className={`font-bold shrink-0 ${isDark ? "text-amber-400" : "text-amber-600"}`}>
                            —
                          </span>
                          <span className={isDark ? "text-slate-300" : "text-slate-600"}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`mt-8 pt-5 border-t ${isDark ? "border-slate-800" : "border-slate-100"}`}>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    💡 <strong className={isDark ? "text-white" : "text-slate-900"}>Verdict:</strong> {tier.verdict}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
