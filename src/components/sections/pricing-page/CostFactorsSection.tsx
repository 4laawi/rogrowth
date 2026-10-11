export function CostFactorsSection() {
  const primaryFactors = [
    {
      number: "01",
      title: "Design Personalizat vs. Șablon Generic",
      impact: "Impact major pe credibilitate și conversie",
      description:
        "Instalarea unei teme predefinite WordPress cu câteva culori modificate este ieftină, dar rigidă și lentă. În schimb, un design UI/UX adaptat pe profilul afacerii tale diferențiază brandul, încarcă instant și convertește vizitatorii în clienți.",
    },
    {
      number: "02",
      title: "Numărul de Pagini și Structura Conținutului",
      impact: "Impact direct pe volumul de dezvoltare",
      description:
        "Un site compact de 5 pagini (Acasă, Servicii, Despre, Tarife, Contact) presupune un volum diferit de lucru față de un website cu 15–20 de pagini individuale dedicate fiecărui serviciu, studii de caz și pagini de aterizare specifice.",
    },
    {
      number: "03",
      title: "Funcționalități E-Commerce & Plăți Online",
      impact: "Complexitate tehnică și integrări externe",
      description:
        "Magazinele online necesită catalog de produse cu variații, filtrare avansată, procesatori de card (Stripe, Netopia), generare automată AWB pentru curieri (Sameday, Fan Courier) și sincronizare automată de facturi (SmartBill, Oblio).",
    },
    {
      number: "04",
      title: "Copywriting & Pregătirea Materialelor",
      impact: "Materiale furnizate vs. redactare profesională",
      description:
        "Dacă ai deja textele și imaginile structurate, costul este mai mic. Dacă echipa noastră redactează textele comerciale de vânzare, structurează mesajele și alege imagistica licențiată, timpul alocat crește corespunzător.",
    },
    {
      number: "05",
      title: "Sisteme Interactive, Programări & Formulare",
      impact: "Automatizarea fluxurilor interne de lucru",
      description:
        "Un formular simplu de contact este inclus standard. Un modul de programări sincronizat cu Google Calendar, plata unui avans la rezervare sau chestionare interactive în mai mulți pași adaugă ore suplimentare de dezvoltare.",
    },
    {
      number: "06",
      title: "Arhitectură Tehnică & Optimizare Avansată",
      impact: "Viteză pe mobil și performanță SEO",
      description:
        "Toate proiectele RoGrowth includ fundația tehnică SEO. Dacă ai nevoie de arhitectură multilingvă completă (RO/EN), structuri avansate de baze de date sau integrări API cu softuri interne (CRM/ERP), estimarea se personalizează.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="factori-cost">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2 block font-poppins">
            TRANSPARENȚĂ TEHNICĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-extrabold text-[#150773] tracking-tight font-poppins">
            6 factori care influențează direct costul unui site
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Prețul nu este stabilit la întâmplare. Iată elementele concrete care determină numărul de ore de lucru și bugetul necesar:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {primaryFactors.map((factor, index) => (
            <div
              key={index}
              className="p-8 rounded-[28px] bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_35px_-8px_rgba(21,7,115,0.07)] hover:border-emerald-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-sm font-extrabold text-emerald-600 font-poppins bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-100">
                    {factor.number}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider font-poppins text-right">
                    {factor.impact}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#150773] font-poppins mt-2">
                  {factor.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-3">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
