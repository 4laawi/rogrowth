import Image from "next/image";

export function WhyRoGrowthSection() {
  const pillars = [
    {
      title: "Design adaptat afacerii tale",
      description:
        "Nu folosim aceeași structură sau șabloane copiate pentru fiecare client. Adaptăm designul, fluxurile și conținutul domeniului tău de activitate.",
      image: "/Scope.png",
      alt: "Design adaptat afacerii tale - RoGrowth",
    },
    {
      title: "Rapid și optimizat pe mobil",
      description:
        "Optimizăm imaginile, scripturile și încărcarea pentru o experiență fluidă și rapidă pe orice tip de telefon sau ecran.",
      image: "/clarificam.png",
      alt: "Rapid pe mobil - RoGrowth",
    },
    {
      title: "Fundație tehnică SEO inclusă",
      description:
        "Structura paginilor, meta-datele, sitemap-ul XML și Google Search Console sunt configurate corect încă din prima zi de lansare.",
      image: "/fundatie.png",
      alt: "SEO tehnic inclus - RoGrowth",
    },
    {
      title: "Site-ul și datele îți aparțin",
      description:
        "Ești proprietar 100%. Primești domeniul, toate accesurile, platformele și fișierele proiectului, fără contracte de captivitate.",
      image: "/Proprietate.png",
      alt: "Proprietate deplină - RoGrowth",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="de-ce-rogrowth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 font-poppins">
            DE CE ROGROWTH • STANDARDE DE LUCRU
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Parteneriat onest și <span className="text-[#10b981]">livrare fără compromisuri</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Construim fiecare proiect cu accent pe claritate, respectarea termenelor și rezultate concrete pentru afacerea ta.
          </p>
        </div>

        {/* 4 Clean Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="group p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between gap-5"
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-start">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
