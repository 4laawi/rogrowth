import Image from "next/image";

export function OwnershipSection() {
  const policies = [
    {
      title: "Domeniul este al tău",
      description:
        "Domeniul web (.ro, .com etc.) este înregistrat exclusiv pe datele companiei sau persoanei tale. Tu deții controlul legal deplin.",
      icon: "/icons/Domeniul este 100 al tău.webp",
    },
    {
      title: "Cod & fișiere predate",
      description:
        "Primești codul proiectului, arhiva cu fișierele sursă și toate elementele grafice realizate pentru website-ul tău.",
      icon: "/icons/Deții codul sursă și fișierele.webp",
    },
    {
      title: "Conturi & platforme",
      description:
        "Ai acces complet de administrator la contul de găzduire, panoul de gestiune al magazinului și serviciile conectate.",
      icon: "/icons/Libertate deplină de găzduire (Hosting).webp",
    },
    {
      title: "Fără captivitate",
      description:
        "Nu te legăm de abonamente obligatorii. Dacă dorești să lucrezi cu alt programator pe viitor, ai toate accesurile pregătite.",
      icon: "/icons/Fără contracte de captivitate.png",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="proprietate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            PROPRIETATE &amp; CONTROL DEPLIN
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Site-ul tău <span className="text-[#10b981]">rămâne al tău</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            La RoGrowth nu există contracte de captivitate. Îți predăm toate credențialele, fișierele și accesul la infrastructură la finalizarea proiectului.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {policies.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-200 flex flex-col gap-4"
            >
              <div className="w-14 h-14 flex items-center justify-start">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-[#150773] font-poppins">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
