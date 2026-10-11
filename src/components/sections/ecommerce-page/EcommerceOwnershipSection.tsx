import Image from "next/image";

export function EcommerceOwnershipSection() {
  const policies = [
    {
      title: "Baza de clienți & datele îți aparțin",
      description:
        "Datele clienților, istoricul de comenzi și cataloagele de produse sunt în totalitate proprietatea afacerii tale.",
      icon: "/icons/Domeniul este 100 al tău.webp",
    },
    {
      title: "Încasările intră direct în contul tău",
      description:
        "Conturile de plăți (Netopia, Stripe) sunt pe numele firmei tale. Nu reținem niciun comision din vânzări.",
      icon: "/icons/Deții codul sursă și fișierele.webp",
    },
    {
      title: "Acces deplin de administrator",
      description:
        "Primești contul de administrator principal (Super Admin) cu toate parolele și credențialele oficiale.",
      icon: "/icons/Libertate deplină de găzduire (Hosting).webp",
    },
    {
      title: "Fără blocaje sau captivitate",
      description:
        "Ești liber să colaborezi cu orice alt specialist sau agenție în viitor. Fără abonamente forțate.",
      icon: "/icons/Fără contracte de captivitate.png",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/60" id="proprietate-magazin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight font-poppins">
            Magazinul și datele îți aparțin 100%
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] font-sans">
            Construim active digitale independente. Nu reținem comisioane pe comenzi și nu creăm dependențe tehnice.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {policies.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 sm:p-8 rounded-[20px] border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)] hover:border-slate-300"
            >
              <div>
                {/* Floating Icon */}
                <div className="h-12 w-12 mb-5 flex items-center justify-start">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="h-10 w-auto object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#0F172A] font-poppins mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed font-sans">
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

