export function EcommerceFeaturesSection() {
  const features = [
    {
      number: "01",
      title: "Checkout Simplificat (1-Page)",
      description:
        "Formular compact într-un singur pas, cu autocompletare și selecție rapidă a locker-ului sau adresei de livrare.",
    },
    {
      number: "02",
      title: "Filtrare Dinamică & Căutare",
      description:
        "Clienții găsesc produsul dorit instantaneu pe baza filtrelor de mărime, culoare, preț sau brand, fără reîncărcarea paginii.",
    },
    {
      number: "03",
      title: "Recuperare Coșuri Abandonate",
      description:
        "Secvențe automate prietenoase de email sau SMS pentru vizitatorii care nu au finalizat comanda.",
    },
    {
      number: "04",
      title: "Experiență Mobilă Nativă",
      description:
        "Optimizare ergonomică pentru navigare cu o singură mână, butoane tactile mari și încărcare rapidă pe 4G/5G.",
    },
    {
      number: "05",
      title: "Gestiune Variații & Stocuri",
      description:
        "Produse cu selecții multiple de mărimi, culori și pachete promoționale, cu actualizare instantanee a stocului real.",
    },
    {
      number: "06",
      title: "Promoții & Bundle-uri Inteligente",
      description:
        "Reguli automate de transport gratuit, cupoane personalizate și discounturi progresive pentru creșterea valorii coșului.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/60" id="functionalitati-conversie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight font-poppins">
            Funcționalități native construite pentru conversie
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] font-sans">
            Fiecare element din interfață este gândit să elimine fricțiunea și să transforme vizitatorii în cumpărători.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat) => (
            <div
              key={feat.number}
              className="bg-white rounded-[20px] border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)] hover:border-slate-300"
            >
              <div>
                <span className="text-xs font-mono font-semibold tracking-wider text-emerald-600 block mb-3">
                  {feat.number}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] font-poppins mb-2 tracking-tight">
                  {feat.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed font-sans">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

