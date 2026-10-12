export function EcommerceFaqSection() {
  const faqs = [
    {
      q: "Ce platformă este mai potrivită: Shopify sau WooCommerce?",
      a: "Dacă vrei o soluție ultra-stabilă, fără mentenanță de servere sau securitate, Shopify este alegerea ideală (cu abonament de la ~$39/lună). Dacă ai nevoie de flexibilitate totală, control pe baza de date sau integrări speciale cu ERP-uri fără comisioane de platformă, WooCommerce este soluția optimă.",
    },
    {
      q: "Cum se integrează livrarea prin Sameday Easybox și Fan Courier?",
      a: "Integrăm modulele oficiale API. La finalizarea comenzii, clientul poate alege adresa fizică sau cel mai apropiat locker Sameday Easybox de pe o hartă interactivă. Din panoul tău de administrare, generezi AWB-ul și trimiți comanda către curier cu un singur click.",
    },
    {
      q: "Cum se procesează plățile și când intră banii în cont?",
      a: "Conectăm magazinul direct la contul tău de comerciant Netopia Payments sau Stripe. Banii din vânzări intră direct în contul tău bancar conform termenilor procesatorului. RoGrowth nu percepe niciun comision din încasările tale.",
    },
    {
      q: "Pot adăuga și edita singur produse sau promoții după lansare?",
      a: "Da, 100%. Atât Shopify cât și WooCommerce sunt concepute special pentru a fi administrate fără cunoștințe de programare. Poți schimba prețuri, adăuga poze noi, crea cupoane și urmări comenzile direct din browser sau telefon.",
    },
    {
      q: "Oferiți instruire pentru folosirea magazinului?",
      a: "Da. Înainte de lansare, organizăm o sesiune practică de training în care îți arătăm exact cum gestionezi comenzile, cum emiți facturi și AWB-uri și cum actualizezi stocurile.",
    },
    {
      q: "Cât durează crearea și lansarea unui magazin online?",
      a: "În funcție de complexitate și dimensiunea catalogului, un magazin E-Commerce Start este lansat în 10–15 zile lucrătoare, iar un magazin E-Commerce Pro cu fluxuri avansate durează aproximativ 3–4 săptămâni.",
    },
    {
      q: "Magazinul va fi optimizat pentru cumpărături pe mobil?",
      a: "Categoric. Peste 80% din comenzile online din România sunt plasate de pe smartphone. Întreaga interfață este construită Mobile-First: butoane mari, selecție rapidă de variații și încărcare rapidă sub 1 secundă.",
    },
    {
      q: "Cum funcționează emiterea automată a facturilor?",
      a: "La plasarea unei comenzi sau confirmarea plății cu cardul, sistemul trimite datele către contul tău SmartBill sau FGO prin API. Factura fiscală se generează automat și este expediată în format PDF pe emailul cumpărătorului.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/60" id="faq-ecommerce">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            RĂSPUNSURI PRACTICE • DETALII IMPORTANTE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Întrebări frecvente despre{" "}
            <span className="text-[#10b981]">crearea magazinului online</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Răspunsuri directe la cele mai importante întrebări despre lansarea magazinului tău online.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-[16px] bg-[#F8FAFC] border border-slate-200/80 p-5 sm:p-6 transition-all duration-200 open:bg-white open:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)] open:border-slate-300"
            >
              <summary className="flex items-center justify-between gap-4 font-semibold text-base sm:text-[17px] text-[#150773] cursor-pointer list-none select-none font-poppins">
                <span>{faq.q}</span>
                <span className="shrink-0 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-open:rotate-180 group-open:text-emerald-700 transition-transform">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-3.5 text-sm text-[#64748B] leading-relaxed border-t border-slate-100 pt-3 font-sans">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

