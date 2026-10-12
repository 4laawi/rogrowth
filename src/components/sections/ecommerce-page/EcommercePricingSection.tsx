import Link from "next/link";

export function EcommercePricingSection() {
  const tiers = [
    {
      name: "E-Commerce Start",
      priceRange: "€700 – €1.200",
      description: "Pentru lansarea rapidă a magazinului cu catalog restrâns de produse.",
      popular: false,
      features: [
        "Shopify sau WooCommerce",
        "Până la 50–100 produse",
        "Plăți Netopia / Stripe",
        "Curieri Fan / Sameday",
        "Optimizat complet pe mobil",
        "Fundație tehnică SEO",
      ],
      ctaText: "Alege Start",
      ctaHref: "#contact-rapid",
    },
    {
      name: "E-Commerce Pro",
      priceRange: "€1.200 – €2.300",
      description: "Soluția completă cu automatizări avansate de gestiune și livrare.",
      popular: true,
      features: [
        "Shopify Pro sau WooCommerce",
        "Filtre dinamice & variații complexe",
        "Hartă Sameday Easybox + AWB 1-click",
        "Facturare automată SmartBill / FGO",
        "Recuperare coșuri abandonate",
        "Meta CAPI & GA4 Server-Side",
      ],
      ctaText: "Alege Pro",
      ctaHref: "#contact-rapid",
    },
    {
      name: "E-Commerce Custom",
      priceRange: "De la €2.300+",
      description: "Arhitectură de înaltă performanță pentru cerințe complexe sau B2B.",
      popular: false,
      features: [
        "Headless Next.js sau Enterprise",
        "Sincronizare ERP / WMS & stocuri",
        "Funcționalități B2B & prețuri diferențiate",
        "Multi-limbă & multi-valută",
        "Încărcare instantă sub 0.8s",
        "Suport tehnic prioritar",
      ],
      ctaText: "Solicită ofertă Custom",
      ctaHref: "#contact-rapid",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/60" id="pachete-preturi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            TRANSPARENȚĂ FINANCIARĂ • COSTURI FIXE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Pachete transparente și <span className="text-[#10b981]">costuri clare de dezvoltare</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Costuri clare agreate ferm înainte de proiect. Fără taxe ascunse și fără comisioane reținute pe vânzări.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-[20px] p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? "bg-[#F8FAFC] border-2 border-emerald-500 shadow-sm lg:-translate-y-1"
                  : "bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#150773] font-poppins">
                    {tier.name}
                  </h3>
                  {tier.popular && (
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full font-sans">
                      Popular
                    </span>
                  )}
                </div>

                <div className="my-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#150773] font-poppins tracking-tight">
                    {tier.priceRange}
                  </span>
                  <p className="text-xs text-[#64748B] font-sans mt-1">
                    Cost stabilit înainte de demarare
                  </p>
                </div>

                <p className="text-sm text-[#64748B] font-sans mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="my-6 border-t border-slate-200/60" />

                <ul className="space-y-3.5 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-[#334155] font-sans">
                      <svg
                        className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={tier.ctaHref}
                  className={`w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all active:scale-95 ${
                    tier.popular
                      ? "bg-[#150773] hover:bg-[#0d093e] text-white shadow-md hover:shadow-lg"
                      : "bg-slate-100 hover:bg-slate-200 text-[#150773]"
                  }`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Policy Box */}
        <div className="mt-12 bg-[#F8FAFC] rounded-[20px] border border-slate-200/80 p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
            <div className="pt-4 md:pt-0">
              <p className="text-xl font-bold text-emerald-600 font-poppins">30% Avans</p>
              <p className="text-xs sm:text-sm text-[#64748B] font-sans mt-1">La demararea oficială a proiectului</p>
            </div>
            <div className="pt-4 md:pt-0 md:px-4">
              <p className="text-xl font-bold text-[#150773] font-poppins">70% la Lansare</p>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">După testare completă și aprobarea ta</p>
            </div>
            <div className="pt-4 md:pt-0 md:pl-4">
              <p className="text-xl font-bold text-[#150773] font-poppins">Factură Fiscală</p>
              <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">Contract legal cu predare 100% accesuri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

