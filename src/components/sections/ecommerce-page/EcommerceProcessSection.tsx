export function EcommerceProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Consultanță & Alegere",
      desc: "Analizăm nișa, produsele și fluxul logistic pentru a stabili platforma ideală: Shopify, WooCommerce sau custom.",
    },
    {
      step: "02",
      title: "Design UI/UX & Structură",
      desc: "Creăm interfața magazinului adaptată brandului tău, optimizată pentru navigare rapidă și conversie pe mobil.",
    },
    {
      step: "03",
      title: "Dezvoltare & Integrări",
      desc: "Configurăm plățile online (Netopia/Stripe), curierii (Sameday Easybox/Fan), facturarea și tracking-ul analitic.",
    },
    {
      step: "04",
      title: "Testare & Lansare",
      desc: "Facem comenzi de test, oferim instruire pentru echipă și lansăm oficial magazinul pe domeniul tău.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/60" id="proces-dezvoltare">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            METODOLOGIE DE LUCRU • ETAPE CLARE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Lansarea magazinului online în <span className="text-[#10b981]">4 pași simpli</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Un proces predictibil și transparent, fără termene depășite sau surprize tehnice.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-[20px] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)] hover:border-slate-300"
            >
              <div>
                <span className="text-xs font-mono font-semibold tracking-wider text-emerald-600 block mb-4">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-[#150773] font-poppins mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

