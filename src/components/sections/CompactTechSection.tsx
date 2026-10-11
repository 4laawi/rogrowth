import Link from "next/link";

export function CompactTechSection() {
  const platforms = [
    {
      name: "Next.js & React",
      role: "Viteză maximă & design personalizat",
      desc: "Ideal pentru site-uri de servicii, portaluri, landing pages de mare impact și aplicații web de ultimă generație.",
      tag: "Cod Personalizat",
    },
    {
      name: "WordPress",
      role: "Flexibilitate & administrare simplă",
      desc: "Potrivit pentru afaceri locale, bloguri de companie și site-uri ce necesită actualizări frecvente de conținut.",
      tag: "CMS Versatil",
    },
    {
      name: "WooCommerce",
      role: "Control deplin asupra magazinului",
      desc: "Pentru magazine online integrate în ecosistemul WordPress, fără abonamente lunare pe vânzări și cu integrări românești.",
      tag: "E-Commerce Flexibil",
    },
    {
      name: "Shopify",
      role: "Comerț online scalabil și stabil",
      desc: "Pentru branduri D2C și retaileri care doresc o platformă e-commerce complet administrată, cu plăți și checkout nativ.",
      tag: "E-Commerce SaaS",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100" id="tehnologii">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            ARHITECTURĂ TEHNICĂ PRAGMATICĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Tehnologia potrivită pentru proiect,{" "}
            <span className="text-[#10b981]">nu preferințe oarbe</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Nu forțăm fiecare afacere pe aceeași platformă. Alegem soluția optimă în funcție de obiectivele tale, bugetul disponibil, ușurința de administrare și complexitatea tehnică.
          </p>
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#150773] border border-slate-200 font-poppins">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#150773] font-poppins mb-1">
                  {item.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-700 mb-2 font-sans">
                  {item.role}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-sans">
            Ai nevoie de o recomandare pentru proiectul tău?{" "}
            <Link
              href="#contact-rapid"
              className="font-semibold text-[#150773] hover:text-emerald-700 underline underline-offset-4 decoration-emerald-400"
            >
              Hai să discutăm cerințele tale →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
