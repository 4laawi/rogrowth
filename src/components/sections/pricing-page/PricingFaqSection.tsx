export function PricingFaqSection() {
  const faqs = [
    {
      q: "De ce variază prețurile atât de mult de la o agenție la alta în România?",
      a: "Diferența majoră vine din timpul efectiv alocat, calitatea codului și experiența echipei. Un site foarte ieftin (ex. 100–150€) este de regulă un șablon descărcat de pe internet cu viteză slabă pe mobil. Un site profesional (€300–€1.200+) implică structură de conversie, design personalizat pe brand, cod curat, teste de viteză și indexare pe Google.",
    },
    {
      q: "Cât costă întreținerea lunară (mentenanța) a unui site web?",
      a: "Website-ul dezvoltat de RoGrowth poate funcționa fără costuri obligatorii către agenție dacă nu ai nevoie de modificări lunare. Pentru securitate continuă, backup-uri regulate și actualizări de conținut, oferim pachete flexibile de mentenanță.",
    },
    {
      q: "Există costuri ascunse după ce plătesc realizarea site-ului?",
      a: "Nu. La RoGrowth lucrăm pe bază de preț fix agreat în contract. Singurele costuri externe obligatorii sunt cele către furnizorii terți pe care îi deții direct: numele de domeniu (ex. .ro ~30-40€) și găzduirea web (de la 5–15€/lună).",
    },
    {
      q: "Pot începe cu un site de €300–€400 și să-l dezvolt ulterior într-un magazin online?",
      a: "Da, absolut. Construim fiecare website cu o arhitectură curată și modulară, astfel încât putem adăuga module noi, plăți online sau funcționalități avansate ulterior fără a reface site-ul de la zero.",
    },
    {
      q: "Ce avans se percepe și cum se realizează plata?",
      a: "Structura standard este de 30% avans la semnarea contractului și demararea lucrărilor, iar restul de 70% se achită doar la finalizare, după testare și aprobare completă pe link privat, pe baza facturii fiscale.",
    },
    {
      q: "Ce se întâmplă dacă am nevoie de mici modificări după lansare?",
      a: "Sunt incluse două runde complete de revizii înainte de lansare. După lansare, oferim asistență tehnică pentru remedierea oricăror erori neprevăzute.",
    },
    {
      q: "De ce un magazin online costă mai mult decât un site de prezentare?",
      a: "Un magazin online implică catalog de produse cu variații, procesatori de plăți cu cardul (Stripe, Netopia), generare automată AWB pentru curieri, facturare automată și securitate extinsă.",
    },
    {
      q: "Oferiți contract și factură fiscală pentru serviciile prestate?",
      a: "Da, fără excepție. Toate colaborările RoGrowth se desfășoară legal pe baza unui contract de prestări servicii cu drepturi de proprietate 100% și factură fiscală.",
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
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="faq-preturi">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 block font-poppins">
            CLARITATE &amp; ÎNTREBĂRI FRECVENTE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Întrebări frecvente despre{" "}
            <span className="text-[#10b981]">costuri și bugete</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Răspunsuri directe și transparente la cele mai frecvente întrebări financiare ale clienților noștri:
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
