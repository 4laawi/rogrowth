import Link from "next/link";

export function AgencyProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Consultare & Strategie",
      description:
        "Analizăm domeniul afacerii tale, clienții țintă și stabilim obiectivele concrete înainte de a recomanda soluția digitală potrivită.",
    },
    {
      number: "02",
      title: "Scope Clar & Ofertă Fermă",
      description:
        "Definim exact livrabilele: arhitectura de conținut, funcționalitățile incluse, termenul de execuție și bugetul agreat, fără costuri ascunse.",
    },
    {
      number: "03",
      title: "Design, Dezvoltare & Revizii",
      description:
        "Construim proiectul pe cod curat și optimizat pentru mobil. Ai runde structurate de feedback pe un link privat pentru a finisa fiecare detaliu.",
    },
    {
      number: "04",
      title: "Lansare & Suport Continuu",
      description:
        "Configurăm domeniul, securitatea SSL, sitemap-ul XML și Google Search Console, oferind mentenanță activă pentru extinderi viitoare.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-100" id="proces-lucru">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 font-poppins inline-block">
            METODOLOGIE DE LUCRU • 4 ETAPE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Cum colaborăm: un proces structurat,{" "}
            <span className="text-[#10b981]">de la idee la rezultate</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-3xl mx-auto">
            Eliminăm incertitudinea prin comunicare directă și etape bine definite, astfel încât să știi permanent stadiul proiectului tău.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 rounded-[28px] bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_35px_-8px_rgba(21,7,115,0.08)] hover:border-emerald-200/80 transition-all duration-300 flex flex-col justify-between gap-4 relative group hover:-translate-y-1"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#10b981] font-poppins block mb-3">
                  {step.number}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500">
          <span>Vrei să consulți procesul tehnic detaliat de execuție web? </span>
          <Link
            href="/creare-site-web#proces-lucru"
            className="text-[#150773] font-semibold underline underline-offset-4 hover:text-emerald-600 ml-1 transition-colors"
          >
            Vezi cele 6 etape detaliate de dezvoltare site →
          </Link>
        </div>
      </div>
    </section>
  );
}
