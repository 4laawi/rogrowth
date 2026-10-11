export function HiddenCostsSection() {
  const recurringCosts = [
    {
      title: "1. Numele de Domeniu Web (.ro, .com)",
      cost: "~30–40€ (pe viață la RoTLD) sau ~10–15€/an (.com)",
      whoPaid: "Plătit direct către registrarul oficial (RoTLD / Namecheap / Hostico)",
      details:
        "Domeniul este adresa unică a site-ului tău (ex: www.firma-ta.ro). Recomandăm achiziționarea directă pe persoană fizică sau firmă pentru a deține 100% dreptul legal de proprietate.",
    },
    {
      title: "2. Serviciul de Găzduire Web (Hosting)",
      cost: "De la 5€ la 15€ / lună",
      whoPaid: "Plătit direct către furnizorul de găzduire ales",
      details:
        "Hosting-ul este infrastructura unde rulează site-ul și stau stocate fișierele. Recomandăm servere rapide cu stocare NVMe și backup automat zilnic.",
    },
    {
      title: "3. Adrese de Email Profesionale",
      cost: "0€ (inclus în cPanel) sau ~6€/utilizator/lună (Google Workspace)",
      whoPaid: "Opțional, în funcție de ecosistemul preferat de companie",
      details:
        "Pentru o imagine credibilă ai nevoie de adrese de forma contact@firma-ta.ro. Poți folosi căsuțele incluse în pachetul de găzduire sau suita Google Workspace / Microsoft 365.",
    },
    {
      title: "4. Comisioane Procesatori de Plată (Doar la E-Commerce)",
      cost: "1% – 1.8% + 0.2–1 leu per tranzacție finalizată",
      whoPaid: "Reținut automat de procesatorul de card (Netopia / Stripe / PayU)",
      details:
        "Procesatorii bancari rețin un comision per vânzare efectuată cu cardul pe site. Nu există comisioane către agenție pe vânzările tale.",
    },
    {
      title: "5. Mentenanță Tehnică & Suport Post-Lansare",
      cost: "Opțional: în funcție de volumul de modificări lunare",
      whoPaid: "Către agenție sau administrat intern pe cont propriu",
      details:
        "Site-ul poate funcționa fără costuri lunare către noi dacă nu ai nevoie de intervenții. Dacă dorești securitate monitorizată, backup-uri periodice și actualizări de conținut, stabilim un acord de mentenanță.",
    },
    {
      title: "6. Bugete pentru Promovare Online (Google / Meta Ads)",
      cost: "La alegerea ta (ex: 500 – 3.000 lei/lună buget media)",
      whoPaid: "Plătit direct platformelor publicitare (Google / Facebook / TikTok)",
      details:
        "Crearea site-ului îți oferă un sediu digital impecabil. Pentru a atrage vizitatori încă din prima zi, campaniile plătite de reclame reprezintă o investiție separată de realizarea tehnică a site-ului.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="costuri-aditionale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2 block font-poppins">
            GHID DE TRANSPARENȚĂ FINANCIARĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-extrabold text-[#150773] tracking-tight font-poppins">
            Costuri adiționale pe care trebuie să le cunoști
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Multe oferte din piață par nerealist de ieftine pentru că omit să menționeze serviciile terțe obligatorii. Iată costurile reale pe care trebuie să le iei în calcul:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {recurringCosts.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-[28px] bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_35px_-8px_rgba(21,7,115,0.07)] hover:border-emerald-200 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#150773] font-poppins">
                  {item.title}
                </h3>
                <div className="mt-2.5 mb-3">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-lg inline-block">
                    💰 {item.cost}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {item.details}
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-slate-100 text-[11px] sm:text-xs text-slate-500 font-medium">
                📍 {item.whoPaid}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
