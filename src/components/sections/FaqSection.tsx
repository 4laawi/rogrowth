export function FaqSection() {
  const faqs = [
    {
      q: "Cât costă realizarea unui site web la RoGrowth?",
      a: "Tarifele noastre orientative pornesc de la €300–€400 pentru un site de prezentare simplu (cca. 5 pagini), aprox. €700–€1,200 pentru un website avansat orientat spre lead generation și de la €1,000–€2,300+ pentru magazine online sau aplicații personalizate. Prețul final se stabilește transparent înainte de începerea lucrului, în funcție de complexitate și cerințe.",
    },
    {
      q: "Cât durează dezvoltarea și lansarea unui website?",
      a: "Un site de prezentare durează în medie între 2 și 4 săptămâni, un site avansat de servicii 3–5 săptămâni, iar un magazin online 4–8 săptămâni. Termenul depinde de rapiditatea cu care ne furnizezi materialele inițiale (texte, poze, logo) și de parcurgerea celor 2 runde de revizii incluse.",
    },
    {
      q: "De ce informații aveți nevoie din partea mea la început?",
      a: "Avem nevoie de datele de bază ale firmei: denumire, date de contact, logo (dacă există), o descriere a serviciilor sau produselor oferite, eventuale fotografii și câteva exemple de website-uri care îți plac ca stil. Dacă textele nu sunt finalizate, te ajutăm noi să le structurăm și să le formulăm clar.",
    },
    {
      q: "Pot veni cu un exemplu de design sau site care îmi place?",
      a: "Da, absolut! Chiar încurajăm trimiterea de exemple sau competitori care au o prezentare pe placul tău. Nu copiem identitatea nimănui, dar folosim aceste referințe pentru a înțelege exact preferințele tale vizuale și standardul de calitate dorit.",
    },
    {
      q: "Site-ul va fi optimizat pentru motoarele de căutare (SEO)?",
      a: "Da. Fiecare website construit include configurația tehnică SEO esențială: meta-titluri și descrieri unice, ierarhie clară de heading-uri (H1, H2, H3), sitemap XML, robots.txt, viteză optimizată și conectare în Google Search Console.",
    },
    {
      q: "Puteți garanta poziția #1 pe Google?",
      a: "Nu, și nicio agenție onestă nu poate garanta acest lucru. Algoritmii de căutare Google sunt independenți. Ce garantăm este o fundație tehnică impecabilă, cod rapid și un conținut util care oferă site-ului tău cele mai bune șanse reale de indexare și clasare în timp.",
    },
    {
      q: "Cine deține site-ul și domeniul după lansare?",
      a: "Tu deții 100% din proiect. Domeniul este înregistrat pe numele companiei tale, iar codul sursă și fișierele îți aparțin în totalitate după achitarea integrală a proiectului. Nu există licențe captive sau clauze ascunse.",
    },
    {
      q: "Pot folosi propriul meu serviciu de găzduire (hosting)?",
      a: "Da. Ești liber să găzduiești website-ul pe orice server dorești. Dacă preferi să nu te ocupi de detalii tehnice, putem asigura noi găzduirea securizată, actualizările și monitorizarea.",
    },
    {
      q: "Ce se întâmplă după lansare? Oferiți asistență tehnică?",
      a: "După lansare nu dispărem. Asigurăm o perioadă dedicată de monitorizare pentru a verifica indexarea în Search Console și funcționarea formularelor. Pentru dezvoltări ulterioare, modificări de conținut sau mentenanță periodică, putem stabili pachete flexibile de asistență.",
    },
    {
      q: "Lucrați doar cu afaceri din București sau din toată România?",
      a: "Deși baza noastră este în București, colaborăm cu antreprenori și companii din toată România (Cluj, Timișoara, Iași, Brașov, Constanța etc.). Toată comunicarea, prezentarea machetelor și testarea se realizează eficient online prin video-call, WhatsApp și email.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 font-poppins">
            RĂSPUNSURI CLARE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Întrebări frecvente despre{" "}
            <span className="text-[#10b981]">colaborare și livrare</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Răspundem transparent celor mai comune întrebări pe care le primim de la antreprenorii români.
          </p>
        </div>

        {/* Semantic Details & Summary FAQ List (100% crawlable & SSR-ready) */}
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
