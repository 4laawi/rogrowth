import Image from "next/image";

export function WebCapabilitiesSection() {
  const technologies = [
    {
      name: "Next.js & React (Cod Personalizat)",
      badge: "Viteză & Flexibilitate Totală",
      bestFor: "Site-uri de servicii, portaluri B2B, landing pages de conversie și platforme cu design unic.",
      tradeoffs:
        "Oferă cea mai bună performanță de randare, securitate maximă (fără vulnerabilități de plugin-uri terțe) și libertate creativă absolută. Necesită însă dezvoltare de la zero fără șabloane prefabricate.",
    },
    {
      name: "Shopify (E-Commerce SaaS)",
      badge: "Comerț Online Scalabil",
      bestFor: "Magazine online D2C, vânzători care doresc o platformă administrată complet și ecosistem bogat de aplicații.",
      tradeoffs:
        "Găzduire fiabilă, procesare nativă a plăților și interfață intuitivă de gestiune a stocurilor. Implică un abonament lunar și comisioane pe tranzacții sau aplicații terțe.",
    },
    {
      name: "WooCommerce / WordPress",
      badge: "Flexibilitate & Control Bugetar",
      bestFor: "Magazine online și cataloage de produse care necesită control deplin asupra bazei de date pe propriul server.",
      tradeoffs:
        "Fără comisioane lunare pe tranzacții și compatibilitate nativă extinsă cu servicii românești. Necesită mentenanță periodică atentă pentru plugin-uri și optimizări de server.",
    },
    {
      name: "Supabase & PostgreSQL",
      badge: "Baze de Date & Aplicații Web",
      bestFor: "Sisteme cu conturi de utilizatori, portaluri pentru clienți, calculatoare avansate și fluxuri interne de date.",
      tradeoffs:
        "Bază de date relațională SQL extrem de rapidă și sigură, cu sistem complet de autentificare și permisiuni la nivel de rând (Row Level Security).",
    },
  ];

  const performancePillars = [
    {
      title: "Optimizare inteligentă de imagini",
      desc: "Conversie automată în formate moderne (WebP/AVIF), redimensionare adaptivă pentru fiecare ecran și încărcare întârziată (lazy loading) a imaginilor aflate sub ecran.",
      icon: "/icons/Mobile-First UI/UX.webp",
    },
    {
      title: "Reducerea drastică a scripturilor",
      desc: "Eliminăm bibliotecile greoaie de stiluri și zecile de plugin-uri inutile care blochează firul principal de execuție în browser, păstrând doar codul strict necesar.",
      icon: "/icons/Timp de Încărcare Sub 1 Secundă.webp",
    },
    {
      title: "Arhitectură de randare & Caching CDN",
      desc: "Generare statică (SSG) și distribuție globală prin rețele CDN pentru livrarea instantanee a conținutului direct din cel mai apropiat server.",
      icon: "/icons/Structură Semantică SEO.webp",
    },
    {
      title: "Core Web Vitals & Ergonomie Mobilă",
      desc: "Prevenirea deplasării conținutului în timpul încărcării (CLS zero), răspuns instant la apăsarea butoanelor (INP) și optimizarea încărcării elementului vizual principal (LCP).",
      icon: "/icons/Securitate & SSL Activ.webp",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-white border-t border-slate-100" id="tehnologii-platforme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 font-poppins">
            ARHITECTURĂ TEHNICĂ &amp; PERFORMANȚĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Cum alegem tehnologia:{" "}
            <span className="text-[#10b981]">decizii inginerești, nu preferințe oarbe</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-3xl">
            Nu există o tehnologie unică perfectă pentru orice scenariu. Nu susținem că Next.js este alegerea universală pentru orice proiect, la fel cum nu folosim același șablon de WordPress pentru toți clienții. Evaluăm compromisurile practice în funcție de obiectivele tale.
          </p>
        </div>

        {/* Technology Selection Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-[24px] bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between hover:border-emerald-300 hover:bg-white transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins">
                    {tech.name}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                    {tech.badge}
                  </span>
                </div>
                <div className="mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1 font-poppins">
                    Potrivit pentru:
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {tech.bestFor}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1 font-poppins">
                    Compromisuri &amp; Realitate:
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {tech.tradeoffs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Engineering Section */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#070b28] text-white border border-slate-800 shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-400 uppercase font-poppins block mb-2">
              INGINERIE DE PERFORMANȚĂ PE MOBIL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-white mb-4">
              Viteza nu este un accident, ci o disciplină de optimizare
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Peste 75% dintre utilizatorii din România navighează de pe telefonul mobil. Dacă o pagină întârzie să se încarce, utilizatorul apasă „înapoi” și alege un competitor. Construim fiecare pagină aplicând principii stricte de performanță:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {performancePillars.map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-3 backdrop-blur-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Image src={pillar.icon} alt={pillar.title} width={24} height={24} />
                </div>
                <h4 className="text-base font-bold text-white font-poppins">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
