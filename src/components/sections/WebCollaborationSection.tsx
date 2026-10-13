import Image from "next/image";
import Link from "next/link";

export function WebCollaborationSection() {
  const pillars = [
    {
      image: "/charcters-3d-webp/gather-working-design-planning.webp",
      imageMobile: "/charcters-3d-webp/gather-working-design-planning(mobile).webp",
      alt: "Echipa RoGrowth planifică proiectul web cu responsabilitate",
      title: "Ne îndeplinim angajamentele până la capăt",
      description:
        "Ne implicăm doar în proiecte de creare site web pe care avem certitudinea că le putem duce la bun sfârșit într-o manieră de care să fim mândri. Lucrăm transparent, pe specificații clare și fără improvizații sau capitole tehnice abandonate.",
    },
    {
      image: "/charcters-3d-webp/person-calendar.webp",
      alt: "Respectarea strictă a termenelor și calendarului de livrare",
      title: "Respectăm cu strictețe fiecare deadline",
      description:
        "Știm că timpul este cel mai valoros activ al afacerii tale. De aceea stabilim de la început un calendar realist de execuție (2–4 săptămâni pentru prezentare) și îți punem la dispoziție un link privat de test pentru a urmări stadiul fiecărei etape.",
    },
    {
      image: "/charcters-3d-webp/growth-up.webp",
      imageMobile: "/charcters-3d-webp/growth-up(mobile).webp",
      alt: "Soluții de design web, optimizare SEO și conversie digitală",
      title: "Venim cu idei orientate spre vânzări & SEO",
      description:
        "Nu suntem simpli executanți de pagini. Analizăm piața și concurența ta din România și venim proactiv cu propuneri concrete: structură optimizată pentru conversie, apeluri rapide și o arhitectură tehnică pregătită pentru Google.",
    },
  ];

  const stats = [
    {
      value: "100%",
      title: "Proprietate deplină 🔑",
      description: "Ești proprietar 100% pe cod, fișiere și domeniu, fără taxe lunare de retenție sau captivitate.",
    },
    {
      value: "8+ Ani",
      title: "Experiență practică 💎",
      description: "Experiență cumulată în dezvoltare web modernă, arhitectură SEO tehnică și conversie online.",
    },
    {
      value: "0 (zero)",
      title: "Costuri ascunse 🛡️",
      description: "Preț ferm stabilit și aprobat înainte de start, pe baza unui caiet de sarcini clar agreat.",
    },
    {
      value: "< 24h",
      title: "Timp de răspuns 🚀",
      description: "Comunicare directă pe WhatsApp sau telefon și actualizări constante pe durata fiecărei etape.",
    },
  ];

  return (
    <section className="w-full pt-48 sm:pt-52 lg:pt-48 xl:pt-52 pb-20 lg:pb-28 bg-white" id="cum-lucram">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 font-poppins">
            FIRMA CREARE SITE-URI WEB • STANDARDE DE LUCRU &amp; SERIOZITATE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] leading-tight sm:leading-snug lg:leading-[1.2] font-extrabold text-[#150773] tracking-tight font-poppins">
            Descoperă <span className="text-[#10b981]">cum este să lucrezi cu noi</span> și cum arată un proces bine făcut
          </h2>
        </div>

        {/* 3 Columns: 3D Characters + Value Propositions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              {/* 3D Character standing cleanly on canvas */}
              <div className="relative h-64 sm:h-64 lg:h-72 w-full flex items-end justify-center mb-6">
                {item.imageMobile ? (
                  <picture className="w-full h-full flex items-end justify-center">
                    <source
                      media="(max-width: 639px)"
                      srcSet={item.imageMobile}
                    />
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={460}
                      height={500}
                      className="max-h-full max-w-[340px] sm:max-w-[400px] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(21,7,115,0.07)]"
                    />
                  </picture>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={460}
                    height={500}
                    className="max-h-full max-w-[340px] sm:max-w-[400px] w-auto object-contain transition-transform duration-300 ease-out group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(21,7,115,0.07)]"
                  />
                )}
              </div>

              {/* Title & Body */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#150773] font-poppins leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans max-w-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Minimalist Metric / Guarantee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-16 sm:mt-20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-[26px] bg-[#fcfdfd] sm:bg-slate-50/70 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md hover:bg-white hover:border-emerald-200/80 transition-all duration-200 flex flex-col items-center text-center justify-center"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#10b981] font-poppins mb-2 tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 font-poppins mb-1.5">
                {stat.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Centered Pill CTA Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link
            href="#contact-rapid"
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#10b981] hover:bg-[#059669] text-white font-bold font-poppins text-sm sm:text-base shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(16,185,129,0.4)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Vreau o colaborare de acest fel
          </Link>
        </div>
      </div>
    </section>
  );
}
