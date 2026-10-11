export function WebFaqSection() {
  const faqs = [
    {
      q: "Cât costă crearea unui website la RoGrowth?",
      a: "Tarifele noastre orientative sunt transparente: €300–€400 pentru un site de prezentare simplu (cca. 5 pagini), aprox. €700–€1,200 pentru un website avansat orientat spre lead generation și de la €1,000–€2,300+ pentru magazine online sau aplicații personalizate. Prețul final exact depinde de numărul de pagini, funcționalitățile solicitate și complexitatea designului, fiind agreat ferm înainte de începerea lucrului.",
    },
    {
      q: "Cât durează realizarea și livrarea site-ului?",
      a: "În medie, un site de prezentare durează între 2 și 4 săptămâni, un site avansat de servicii între 3 și 5 săptămâni, iar un magazin online între 4 și 8 săptămâni. Termenul depinde de rapiditatea cu care ne furnizezi materialele inițiale (texte, fotografii, logo) și de parcurgerea celor 2 runde structurate de revizii.",
    },
    {
      q: "Trebuie să ofer eu textele și imaginile?",
      a: "Dacă ai deja texte sau fotografii proprii, le integrăm și le optimizăm. Dacă nu ai materiale pregătite, te ajutăm noi cu redactarea unei structuri clare de texte orientate spre vânzări și selecția de imagini reprezentative de înaltă rezoluție.",
    },
    {
      q: "Pot modifica sau adăuga conținut pe site după lansare?",
      a: "Da. În funcție de platforma aleasă, ai la dispoziție un panou de administrare intuitiv pentru actualizarea textelor, produselor sau articolelor de blog. Pentru modificări structurale complexe, poți apela oricând la serviciile noastre de asistență tehnică.",
    },
    {
      q: "Cine deține domeniul și codul sursă al website-ului?",
      a: "Tu ești proprietar 100%. Domeniul este înregistrat pe numele companiei tale sau al tău direct, iar fișierele și codul sursă îți aparțin complet după achitarea integrală a proiectului. Nu folosim platforme proprietare captive care să te oblige să plătești abonamente abuzive.",
    },
    {
      q: "Ce tehnologie sau platformă folosiți?",
      a: "Alegem tehnologia în funcție de specificul proiectului: Next.js & React pentru viteză extremă și design personalizat, Shopify sau WooCommerce pentru magazine online, și Supabase/PostgreSQL pentru aplicații web și portaluri cu baze de date.",
    },
    {
      q: "Include crearea site-ului optimizare SEO?",
      a: "Da, fiecare site include fundația tehnică SEO completă: un singur H1 per pagină, H2/H3 logice, meta-titluri și meta-descrieri unice, sitemap XML, robots.txt, canonical tags, optimizarea vitezei pe mobil și configurarea Google Search Console.",
    },
    {
      q: "Pot avea un website multilingv (Română / Engleză etc.)?",
      a: "Da, putem implementa arhitectură multilingvă completă cu selector de limbă, tag-uri hreflang pentru indexarea corectă a fiecărei limbi în Google și structură URL curată (ex: /ro/ și /en/).",
    },
    {
      q: "Câte revizii am la dispoziție în cadrul proiectului?",
      a: "Fiecare contract include 2 etape structurate de revizii majore pe un link demonstrativ privat de testare, alături de mici ajustări flexibile pe parcurs, pentru a ne asigura că rezultatul final este exact cel dorit de tine.",
    },
    {
      q: "Ce se întâmplă după ce site-ul este lansat online?",
      a: "După lansare, verificăm indexarea în Search Console și ne asigurăm că toate formularele transmit corect mesajele. Oferim asistență post-lansare pentru eventuale remedieri tehnice, iar ulterior putem asigura pachete opționale de mentenanță, adăugare de pagini noi sau campanii de promovare.",
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
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="faq-creare-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 font-poppins">
            DETALII IMPORTANTE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Întrebări frecvente despre{" "}
            <span className="text-[#10b981]">crearea website-ului tău</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Toate răspunsurile practice de care ai nevoie înainte de a demara un proiect de dezvoltare web cu RoGrowth.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-[24px] bg-white border border-slate-200/80 p-6 sm:p-7 transition-all duration-200 open:shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)] open:border-emerald-300"
            >
              <summary className="flex items-center justify-between gap-4 font-bold text-lg sm:text-xl text-[#150773] cursor-pointer list-none select-none font-poppins">
                <span>{faq.q}</span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 group-open:rotate-180 group-open:bg-emerald-50 group-open:text-emerald-700 group-open:border-emerald-200 transition-transform">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-sans">
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
