export function AgencyFaqSection() {
  const faqs = [
    {
      q: "Cine este RoGrowth și cu ce vă ocupați în principal?",
      a: "RoGrowth este o agenție digitală din România, cu baza în București. În prezent, specializarea noastră principală și cel mai solicitat serviciu este crearea de website-uri profesionale, magazine online și aplicații web, completate de suport pentru SEO, promovare și automatizări.",
    },
    {
      q: "Lucrați doar cu afaceri din București sau din toată România?",
      a: "Colaborăm cu antreprenori și companii din toată România (București, Cluj, Timișoara, Iași, Brașov, Constanța etc.). Întreg procesul de lucru, prezentarea conceptelor și comunicarea se desfășoară rapid și eficient prin video-call, WhatsApp și email.",
    },
    {
      q: "Cât costă realizarea unui proiect web la RoGrowth?",
      a: "Tarifele noastre orientative pornesc de la €300–€400 pentru un site simplu de prezentare, aprox. €700–€1,200 pentru un website avansat orientat spre lead generation și de la €1,000–€2,300+ pentru magazine online sau aplicații personalizate. Prețul exact se stabilește transparent înainte de începerea lucrului, pe baza cerințelor discutate.",
    },
    {
      q: "De ce avem nevoie pentru a începe o colaborare?",
      a: "Începem cu o discuție de clarificare a obiectivelor tale. Avem nevoie de datele companiei, o scurtă descriere a serviciilor oferite, logo (dacă există) și câteva referințe de stil. Dacă nu ai textele pregătite, te ajutăm noi să le structurezi clar și comercial.",
    },
    {
      q: "Cine deține site-ul, codul și domeniul după lansare?",
      a: "Tu ești proprietar 100%. Domeniul este înregistrat pe numele companiei tale, iar codul sursă și toate fișierele îți aparțin în totalitate după achitarea finală a proiectului. Nu există licențe captive sau taxe forțate de deconectare.",
    },
    {
      q: "Putem continua colaborarea și după livrarea website-ului?",
      a: "Da, cu siguranță. Oferim servicii de mentenanță tehnică, actualizări periodice, optimizare continuă a conținutului, suport pentru campanii de Google/Meta Ads și dezvoltare de noi funcționalități pe măsură ce afacerea ta se extinde.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 font-poppins">
            RĂSPUNSURI TRANSPARENTE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Întrebări frecvente despre{" "}
            <span className="text-[#10b981]">agenție și colaborare</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Găsești aici răspunsuri directe la cele mai importante întrebări despre serviciile și principiile noastre de lucru.
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
