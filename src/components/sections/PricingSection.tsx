import Link from "next/link";

export function PricingSection() {
  const tiers = [
    {
      name: "Site de Prezentare",
      badge: "Pentru afaceri locale & servicii",
      price: "€300 – €400",
      description:
        "Pentru companii la început de drum sau prestatori de servicii care doresc o prezență online sigură, rapidă și profesionistă.",
      features: [
        "Până la 5 pagini structurate (Acasă, Servicii, Despre, Tarife, Contact)",
        "Design 100% responsiv pentru mobil, tabletă și desktop",
        "Formular rapid de contact și apel direct Click-to-Call",
        "Fundație tehnică SEO (meta-titluri, descrieri, sitemap XML)",
        "Configurare Google Search Console & securitate SSL",
        "2 runde structurate de revizii incluse",
      ],
      ctaText: "Solicită ofertă prezentare",
      popular: false,
    },
    {
      name: "Website Avansat / Lead Generation",
      badge: "Cel mai solicitat",
      price: "€700 – €1,200",
      description:
        "Pentru firme stabilite care doresc ca website-ul să atragă clienți activ și să convertească traficul în cereri de ofertă.",
      features: [
        "Design UI/UX personalizat pe specificul industriei tale",
        "Pagini individuale dedicate pentru fiecare serviciu (avantaj SEO)",
        "Formulare interactive de calificare a cererilor de ofertă",
        "Viteză optimizată de încărcare pe mobil și cod curat",
        "Integrare WhatsApp Business și notificări instant",
        "2 runde structurate de revizii incluse",
      ],
      ctaText: "Solicită ofertă personalizată",
      popular: true,
    },
    {
      name: "Magazin Online & Sisteme Custom",
      badge: "E-commerce & Sisteme Web",
      price: "€1,000 – €2,300+",
      description:
        "Pentru vânzări de produse online, platforme de rezervări complexe sau aplicații web personalizate cu baze de date.",
      features: [
        "Platformă e-commerce pe Shopify, WooCommerce sau Next.js",
        "Catalog structurat de produse, variații, filtre și căutare",
        "Plăți securizate cu cardul (Netopia, Stripe) și curierat (AWB)",
        "Flux de checkout rapid optimizat pentru mobil",
        "Instruire completă pentru administrarea comenzilor și stocurilor",
        "2 runde structurate de revizii incluse",
      ],
      ctaText: "Discută cerințele proiectului",
      popular: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="preturi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            TRANSPARENȚĂ FINANCIARĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Prețuri clare și <span className="text-[#10b981]">pachete fără costuri ascunse</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Înainte de a începe lucrul, stabilim un acord scris cu numărul exact de pagini, funcționalități și prețul fix garantat.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-3xl p-8 transition-all duration-200 ${
                tier.popular
                  ? "bg-slate-900 text-white border-2 border-emerald-500 shadow-xl relative"
                  : "bg-white border border-slate-200/90 text-slate-900 shadow-xs"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold tracking-wide uppercase font-poppins shadow-sm">
                  {tier.badge}
                </span>
              )}

              <div>
                <div className="mb-3">
                  <h3 className={`text-xl sm:text-2xl font-bold font-poppins ${tier.popular ? "text-white" : "text-[#150773]"}`}>
                    {tier.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <span className={`text-3xl sm:text-4xl font-extrabold font-poppins ${tier.popular ? "text-emerald-400" : "text-[#10b981]"}`}>
                    {tier.price}
                  </span>
                  <span className={`block text-xs mt-1 font-sans ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>
                    *Tarif orientativ, stabilit ferm după discuția inițială
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-6 font-sans ${tier.popular ? "text-slate-300" : "text-slate-600"}`}>
                  {tier.description}
                </p>

                <div className="border-t border-slate-100/20 pt-5 mb-6">
                  <span className={`text-xs font-bold uppercase tracking-wider block mb-3 font-poppins ${tier.popular ? "text-slate-300" : "text-slate-700"}`}>
                    Ce include pachetul:
                  </span>
                  <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <span className={`font-bold shrink-0 ${tier.popular ? "text-emerald-400" : "text-emerald-600"}`}>
                          ✓
                        </span>
                        <span className={tier.popular ? "text-slate-200" : "text-slate-700"}>
                          {feature}
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
                    tier.popular
                      ? "bg-[#2bb673] hover:bg-[#239960] text-[#070c2a]"
                      : "bg-[#150773] hover:bg-emerald-600 text-white"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Commercial Policies & Revisions Breakdown */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-slate-700 shadow-xs">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-bold text-[#150773] font-poppins">
              <span className="text-lg">💳</span>
              <span>Eșalonare plată</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              30% avans la semnarea contractului și demararea lucrărilor, iar diferența de 70% la lansarea pe domeniul tău și predarea accesurilor.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-bold text-[#150773] font-poppins">
              <span className="text-lg">🔄</span>
              <span>2 runde de revizii</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Include ajustări de design, imagini, texte și detalii pe linkul de testare înainte de lansarea publică a site-ului.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-bold text-[#150773] font-poppins">
              <span className="text-lg">🧾</span>
              <span>Garanția prețului fix</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Prețul agreat în ofertă este prețul final facturat. Fără costuri neprevăzute sau taxe ascunse ulterioare.
            </p>
          </div>
        </div>

        {/* Link to Full Pricing Guide */}
        <div className="mt-8 text-center">
          <Link
            href="/pret-creare-site-web"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-[#150773] hover:text-emerald-600 hover:border-emerald-300 font-semibold text-sm transition-all shadow-xs group"
          >
            <span>📖 Vrei o analiză completă a costurilor? Citește Ghidul complet de prețuri 2026</span>
            <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
