import Image from "next/image";
import Link from "next/link";

interface WebsiteTypeItem {
  id: string;
  title: string;
  targetAudience: string;
  description: string;
  icon: string;
  alt: string;
}

export function WebServicesDetailSection() {
  const websiteTypes: WebsiteTypeItem[] = [
    {
      id: "prezentare",
      title: "Site de Prezentare",
      icon: "/website-types/Site de prezentare.webp",
      alt: "Ilustrație website de prezentare corporate și servicii",
      targetAudience: "Afaceri locale, servicii, cabinete și prestatori",
      description:
        "O prezență digitală profesională și clară, care explică serviciile tale, inspiră încredere și oferă clienților datele de contact rapid.",
    },
    {
      id: "lead-uri",
      title: "Site Avansat pentru Lead-uri",
      icon: "/website-types/Lead-uri.webp",
      alt: "Ilustrație website optimizat pentru generare de lead-uri",
      targetAudience: "Clinici, firme B2B, construcții și imobiliare",
      description:
        "Arhitectură persuasivă cu pagini dedicate pentru fiecare serviciu, formulare interactive de calificare și trasee gândite pentru conversie.",
    },
    {
      id: "ecommerce",
      title: "Magazin Online (E-Commerce)",
      icon: "/website-types/ECOMMERCE.webp",
      alt: "Ilustrație magazin online și platformă e-commerce",
      targetAudience: "Branduri D2C, retaileri și comercianți naționali",
      description:
        "Platformă rapidă cu catalog de produse, filtrare intuitivă, plăți securizate cu cardul și integrare automată cu firmele de curierat din România.",
    },
    {
      id: "landing-page",
      title: "Landing Page de Campanie",
      icon: "/website-types/landing-page-de-campanie.webp",
      alt: "Ilustrație landing page dedicat campaniilor de promovare",
      targetAudience: "Campanii Google Ads, Meta Ads și lansări de produse",
      description:
        "Pagină unică de impact maxim, fără distrageri sau linkuri inutile, optimizată strict pentru transformarea traficului plătit în cereri concrete.",
    },
    {
      id: "programari",
      title: "Site cu Sistem de Programări",
      icon: "/website-types/programari.webp",
      alt: "Ilustrație website cu sistem de programări online",
      targetAudience: "Saloane, clinici medicale, consultanți și servicii auto",
      description:
        "Calendar interactiv în timp real, selecție facilă de servicii și specialiști, confirmări automate și reducerea timpului petrecut la telefon.",
    },
    {
      id: "custom",
      title: "Sistem Custom & Aplicație Web",
      icon: "/website-types/sistem-custom.webp",
      alt: "Ilustrație sistem web personalizat și portal clienți",
      targetAudience: "Companii cu procese operaționale specifice",
      description:
        "Portaluri pentru clienți, calculatoare complexe de cost și aplicații pe măsură construite pe baze de date sigure și performante.",
    },
  ];

  return (
    <section
      className="w-full py-20 lg:py-28 bg-white border-t border-slate-100"
      id="tipuri-website"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            SOLUȚII ADAPTATE NEVOILOR TALE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Ce tip de website <span className="text-[#10b981]">ai nevoie?</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Fiecare afacere are obiective diferite. Alege structura potrivită pentru modelul tău de business.
          </p>
        </div>

        {/* 6 Clean, Scannable Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {websiteTypes.map((type) => (
            <div
              key={type.id}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl p-7 transition-all duration-200 ease-out border border-slate-200/80 hover:border-emerald-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* 3D Icon */}
                <div className="mb-5 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-start">
                  <Image
                    src={type.icon}
                    alt={type.alt}
                    width={72}
                    height={72}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[#150773] font-poppins leading-snug">
                  {type.title}
                </h3>

                {/* Target Audience */}
                <div className="mt-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full inline-block font-poppins">
                    {type.targetAudience}
                  </span>
                </div>

                {/* 1-2 sentence description */}
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {type.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <Link
                  href="#contact-rapid"
                  className="text-xs sm:text-sm font-semibold text-[#150773] group-hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Cere detalii &amp; ofertă</span>
                  <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Main CTA */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="#contact-rapid"
            className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-slate-700 hover:text-[#150773] transition-colors group"
          >
            <span>Nu ești sigur ce format este potrivit pentru afacerea ta? Hai să discutăm</span>
            <span
              aria-hidden="true"
              className="group-hover:translate-x-1 transition-transform duration-150 text-emerald-600"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
