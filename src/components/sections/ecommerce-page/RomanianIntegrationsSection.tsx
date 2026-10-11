export function RomanianIntegrationsSection() {
  const integrationCategories = [
    {
      category: "Curieri & Livrare Automată",
      tagline: "Generare AWB și selecție locker direct la checkout.",
      partners: [
        { name: "Sameday Easybox", desc: "Hartă interactivă la finalizarea comenzii și generare instantă de AWB." },
        { name: "Fan Courier", desc: "Integrare completă API pentru calcul automat tarif și borderouri." },
        { name: "DPD & Cargus", desc: "Opțiuni flexibile de livrare door-to-door și puncte de ridicare." },
      ],
    },
    {
      category: "Procesare Plăți Securizate",
      tagline: "Banii din vânzări intră direct în contul tău bancar.",
      partners: [
        { name: "Netopia Payments & mobilPay", desc: "Plăți 3D-Secure cu carduri românești și comisioane competitive." },
        { name: "Stripe & Apple Pay / Google Pay", desc: "Plată instantă cu 1-click pe mobil prin amprentă sau FaceID." },
        { name: "Plată în Rate & Ramburs", desc: "Rate fără dobândă (TBI Bank, CardAvantaj) + plata la livrare." },
      ],
    },
    {
      category: "Facturare & Gestiune Stoc",
      tagline: "Elimină complet munca manuală de birou.",
      partners: [
        { name: "SmartBill Cloud", desc: "Emitere automată factură fiscală, scădere stoc și trimitere pe email." },
        { name: "FGO & Oblio", desc: "Sincronizare în timp real a seriilor de facturare și stocurilor." },
        { name: "Sincronizare ERP / WMS", desc: "Conectare directă la softuri de gestiune și depozite fizice multiple." },
      ],
    },
    {
      category: "Analytics & Tracking Conversii",
      tagline: "Măsurare precisă pentru fiecare leu investit în reclame.",
      partners: [
        { name: "Meta Conversions API (CAPI)", desc: "Urmărire server-side 100% rezistentă la blocatoare de reclame." },
        { name: "Google Analytics 4 & GTM", desc: "Tracking e-commerce complet: vizualizări, coșuri și achiziții." },
        { name: "Google Merchant Center", desc: "Feed automat de produse sincronizat zilnic pentru Google Shopping." },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/60" id="integrari-romania">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight font-poppins">
            Integrări native pentru comerțul din România
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] font-sans">
            Automatizăm fluxul complet: de la plata online și emiterea facturii, până la generarea AWB-ului și expedierea comenzii.
          </p>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {integrationCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-[20px] border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)] hover:border-slate-300"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] tracking-tight font-poppins">
                  {cat.category}
                </h3>
                <p className="mt-1 text-sm text-[#64748B] font-sans">
                  {cat.tagline}
                </p>

                <div className="my-5 border-t border-slate-200/60" />

                <div className="space-y-4">
                  {cat.partners.map((partner, pIdx) => (
                    <div key={pIdx} className="flex flex-col gap-0.5">
                      <p className="text-sm font-semibold text-[#0F172A] font-poppins flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {partner.name}
                      </p>
                      <p className="text-xs sm:text-[13px] text-[#64748B] font-sans pl-3.5 leading-relaxed">
                        {partner.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

