export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discutăm proiectul",
      description:
        "Înțelegem afacerea ta, clienții vizați și obiectivele concrete ale noului website.",
    },
    {
      number: "02",
      title: "Structură & ofertă clară",
      description:
        "Stabilim paginile necesare, funcționalitățile, prețul fix și termenul agreat de livrare.",
    },
    {
      number: "03",
      title: "Design & dezvoltare",
      description:
        "Construim site-ul pe cod curat și îți trimitem un link privat de testare pentru previzualizare.",
    },
    {
      number: "04",
      title: "Revizii & lansare",
      description:
        "Parcurgem cele 2 runde de modificări, conectăm domeniul oficial și lansăm site-ul online.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="proces-lucru">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            METODOLOGIE CLARĂ &amp; TRANSPARENTĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Cum lucrăm: de la prima discuție <span className="text-[#10b981]">până la lansare</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Un proces simplificat în 4 etape, fără bătăi de cap, conceput să respecte termenul agreat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all duration-200 flex flex-col justify-between gap-4 relative group"
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

        {/* Discreet Timeline Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500 font-sans">
          <span>⏱️ Termen orientativ mediu de execuție: </span>
          <strong className="text-slate-700 font-semibold">2–4 săptămâni</strong> (site de prezentare / servicii) &bull;{" "}
          <strong className="text-slate-700 font-semibold">4–8 săptămâni</strong> (magazine e-commerce sau platforme extinse).
        </div>
      </div>
    </section>
  );
}
