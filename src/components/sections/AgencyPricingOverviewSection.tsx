import Link from "next/link";

export function AgencyPricingOverviewSection() {
  const tiers = [
    {
      name: "Site de Prezentare",
      badge: "Punct de pornire accesibil",
      price: "€300 – €400",
      description:
        "Ideal pentru afaceri la început de drum, cabinete sau servicii locale care au nevoie de o prezență online sigură, rapidă și profesionistă.",
      highlights: [
        "Aproximativ 5 pagini structurate",
        "Design 100% adaptat pe mobil",
        "Formulare de contact & apel direct",
        "Fundație tehnică SEO inclusă",
      ],
      popular: false,
    },
    {
      name: "Website Avansat / Lead Generation",
      badge: "Cel mai solicitat",
      price: "€700 – €1,200",
      description:
        "Pentru companii care doresc ca website-ul să devină un motor activ de colectare a cererilor calificate de ofertă și clienților noi.",
      highlights: [
        "Design UI/UX complet personalizat",
        "Pagini dedicate pentru fiecare serviciu",
        "Formulare interactive de calificare",
        "Viteză maximă pe smartphone (Next.js)",
      ],
      popular: true,
    },
    {
      name: "Magazin Online & Sisteme Custom",
      badge: "E-Commerce & Aplicații",
      price: "€1,000 – €2,300+",
      description:
        "Pentru vânzări de produse la nivel național (Shopify, WooCommerce), platforme de programări sau dashboard-uri personalizate.",
      highlights: [
        "Catalog produse cu filtre și variante",
        "Integrare procesator plăți cu cardul",
        "Integrare curierat românesc (AWB automat)",
        "Gestiune stocuri și notificări automate",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="preturi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2.5 sm:mb-3 font-poppins inline-block">
            TRANSPARENȚĂ FINANCIARĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Tarife orientative și{" "}
            <span className="text-[#10b981]">pachete fără costuri ascunse</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            Credem în parteneriate transparente. Înainte de începerea oricărui proiect, stabilim un acord clar cu numărul de pagini, funcționalitățile incluse și costul ferm.
          </p>
        </div>

        {/* 3 Summary Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all justify-between ${
                tier.popular
                  ? "bg-slate-900 text-white border-2 border-emerald-500 shadow-xl relative mt-2 sm:mt-0"
                  : "bg-slate-50 border border-slate-200 text-slate-900 shadow-xs"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 sm:px-4 py-1 rounded-full bg-emerald-500 text-slate-950 text-[11px] sm:text-xs font-extrabold tracking-wide uppercase font-poppins shadow-sm whitespace-nowrap">
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-semibold font-poppins mb-1.5 sm:mb-2 ${tier.popular ? "text-white" : "text-slate-900"}`}>
                  {tier.name}
                </h3>
                <div className="mb-3.5 sm:mb-4">
                  <span className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-poppins ${tier.popular ? "text-emerald-400" : "text-emerald-700"}`}>
                    {tier.price}
                  </span>
                  <span className={`block text-xs mt-1 font-sans ${tier.popular ? "text-slate-400" : "text-slate-500"}`}>
                    *Orientativ, adaptat pe complexitate
                  </span>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 font-sans ${tier.popular ? "text-slate-300" : "text-slate-600"}`}>
                  {tier.description}
                </p>

                <ul className="flex flex-col gap-2 text-xs sm:text-sm pt-4 border-t border-slate-200/20 mb-6">
                  {tier.highlights.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <span className={tier.popular ? "text-emerald-400 font-bold" : "text-emerald-600 font-bold"}>✓</span>
                      <span className={tier.popular ? "text-slate-200" : "text-slate-700"}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="#contact-rapid"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95 min-h-[48px] ${
                  tier.popular
                    ? "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                    : "bg-slate-900 hover:bg-emerald-600 text-white"
                }`}
              >
                <span>Solicită ofertă pentru acest pachet</span>
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Detailed Service Page Action Link */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 font-poppins">
              Dorești să vezi toate detaliile tehnice și lista completă de livrabile?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-sans">
              Toate specificațiile, politicile de plată și opțiunile de mentenanță sunt detaliate pe pagina de servicii web.
            </p>
          </div>
          <Link
            href="/creare-site-web#preturi"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-[#150773] hover:bg-[#2bb673] hover:text-[#060a22] text-white text-xs sm:text-sm font-bold whitespace-nowrap transition-all shadow-xs min-h-[44px]"
          >
            <span>Tabel complet pachete site web</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
