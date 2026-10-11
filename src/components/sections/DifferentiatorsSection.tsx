import Image from "next/image";

export function DifferentiatorsSection() {
  const differentiators = [
    {
      title: "Încărcare rapidă pe mobil",
      description:
        "Construit pe Next.js și tehnologii moderne pentru randare eficientă și timpi minimi de răspuns. Un site rapid menține vizitatorii atenți și îmbunătățește rata de conversie.",
      image: "/clarificam.png",
      alt: "Încărcare rapidă pe mobil - RoGrowth",
    },
    {
      title: "Design modern, adaptat afacerii",
      description:
        "Un design ce câștigă instant încrederea clienților tăi. Fără șabloane generice copiate la infinit, oferind afacerii tale prezentarea profesionistă pe care o merită.",
      image: "/Scope.png",
      alt: "Design premium - RoGrowth",
    },
    {
      title: "Securitate avansată & stabilitate",
      description:
        "Asigurăm certificat SSL, protecție anti-spam pe formulare și monitorizare a bunei funcționări pentru ca afacerea ta să ruleze fără întreruperi.",
      image: "/Suport.png",
      alt: "Securitate avansată - RoGrowth",
    },
    {
      title: "Fundație tehnică SEO pentru Google",
      description:
        "Implementăm din start arhitectura semantică, meta-tagurile unice și fișierul sitemap XML pentru ca Google să indexeze și să poziționeze paginile tale corect.",
      image: "/fundatie.png",
      alt: "Optimizat SEO - RoGrowth",
    },
    {
      title: "100% Adaptat pe orice dispozitiv",
      description:
        "Peste 75% din clienți navighează de pe mobil. Ne asigurăm că paginile, butoanele de apel și formularele se adaptează impecabil pe telefon, tabletă sau desktop.",
      image: "/experienta.png",
      alt: "Design 100% responsive - RoGrowth",
    },
    {
      title: "Proprietate deplină & zero captivitate",
      description:
        "Ești proprietar 100% pe cod, fișiere și domeniu. Îți oferim ghidaj complet și rămânem alături de tine pentru orice modificare sau extindere ulterioară.",
      image: "/Proprietate.png",
      alt: "Proprietate deplină - RoGrowth",
    },
  ];

  return (
    <section className="w-full pt-20 sm:pt-24 lg:pt-28 pb-20 lg:pb-28 bg-white" id="de-ce-rogrowth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 pt-2 sm:pt-4 lg:pt-6">
          <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 font-poppins">
            STANDARDE DE CALITATE • DE CE ROGROWTH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] leading-tight lg:leading-[44px] font-extrabold text-[#150773] tracking-tight font-poppins mb-6">
            Știm... este o provocare reală să găsești{" "}
            <span className="text-[#10b981]">parteneri serioși</span>, care să-ți livreze un website{" "}
            <span className="text-[#10b981]">la timp și făcut cum trebuie</span>
          </h2>

          {/* Genuine Trust Pill Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-xs text-xs sm:text-sm font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-semibold text-slate-900">Principiul RoGrowth:</span>
            <span className="text-slate-600">Înțelegem nevoia înainte de a recomanda soluția tehnică</span>
          </div>
        </div>

        {/* 6 High-Quality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-9 rounded-[30px] bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_35px_-8px_rgba(21,7,115,0.09)] hover:border-emerald-200/70 transition-all duration-300 flex flex-col gap-4 hover:-translate-y-1"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-start">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={90}
                  height={90}
                  className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-110 drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#150773] font-poppins leading-snug">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
