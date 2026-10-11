import Link from "next/link";

export function PriceOverviewTableSection() {
  const tableData = [
    {
      type: "Landing Page / One-Page",
      price: "€200 – €350",
      time: "1–2 săptămâni",
      target: "Campanii Google/Meta Ads, promovare serviciu unic, lansări punctuale",
      includes: [
        "Pagină unică cu secțiuni de conversie și apel direct",
        "Formular rapid de captare lead-uri fără fricțiune",
        "Viteză optimizată pe mobil și integrare Analytics/Pixel",
      ],
      link: "#contact-rapid",
    },
    {
      type: "Site de Prezentare Standard",
      price: "€300 – €400",
      time: "2–4 săptămâni",
      target: "Afaceri locale, cabinete, consultanți, prestatori de servicii",
      includes: [
        "Aproximativ 5 pagini structurate (Acasă, Servicii, Despre, Tarife, Contact)",
        "Design responsiv, clar și adaptat pe profilul afacerii",
        "Fundație tehnică SEO (sitemap XML, meta-titluri, Search Console)",
      ],
      link: "/creare-site-web",
    },
    {
      type: "Website Avansat / Lead Generation",
      price: "€700 – €1.200",
      time: "3–5 săptămâni",
      target: "Companii stabilite, clinici, firme B2B, construcții, servicii complexe",
      includes: [
        "Design UI/UX personalizat și structură axată pe conversie",
        "Pagini dedicate pentru fiecare serviciu (avantaj SEO major)",
        "Formulare inteligente de calificare și viteză sub 1s",
      ],
      link: "#contact-rapid",
      highlight: true,
    },
    {
      type: "Magazin Online (E-Commerce)",
      price: "€1.000 – €2.300+",
      time: "5–8 săptămâni",
      target: "Comerț online, vânzări de produse fizice sau digitale cu plată pe site",
      includes: [
        "Catalog produse cu variații, filtre, căutare live și checkout rapid",
        "Plăți cu cardul (Stripe, Netopia) și generare automată AWB curieri",
        "Facturare automată (SmartBill / Oblio) și instruire administrare",
      ],
      link: "#contact-rapid",
    },
    {
      type: "Platformă Web / Sistem Custom",
      price: "€1.500 – €3.000+",
      time: "2–4 luni",
      target: "Portaluri clienți, sisteme de rezervări complexe, aplicații interne",
      includes: [
        "Arhitectură pe Next.js, baze de date și autentificare securizată",
        "Fluxuri personalizate pe procesele operaționale ale companiei",
        "Integrări API dedicate și panou de control intern",
      ],
      link: "#contact-rapid",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="tabel-comparativ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Direct Answer Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-poppins block mb-1">
                  RĂSPUNS PE SCURT
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-poppins">
                  Cât costă un website în România în 2026?
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700 w-fit">
                ⏱️ Ghid actualizat 2026
              </span>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-4xl">
              În piața din România, un website profesional costă în mod realist între <strong className="text-white">€300 și €2.300+</strong>. Diferența de preț este determinată de numărul de pagini, nivelul de personalizare al designului (șablon vs. arhitectură dedicată), cerințele de e-commerce și gradul de optimizare tehnică.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-200">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block font-poppins">Site Prezentare</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-poppins mt-1 block">€300 – €400</span>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  ~5 pagini, design responsive, formular contact, viteză și indexare Google.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/50 relative">
                <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-bold uppercase font-poppins">
                  Cel mai solicitat
                </span>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block font-poppins">Website Lead Gen</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-poppins mt-1 block">€700 – €1.200</span>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Design UI/UX custom, pagini dedicate per serviciu, structură pentru conversie.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider block font-poppins">Magazin Online</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-poppins mt-1 block">€1.000 – €2.300+</span>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Catalog produse, plăți card, AWB curierat, facturare automată, instruire.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2 block font-poppins">
            TABEL COMPARATIV DETALIAT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-extrabold text-[#150773] tracking-tight font-poppins">
            Prețuri orientative pe tipuri de proiecte web
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Comparație clară între costurile de pornire, termenele medii de execuție și principalele livrabile incluse în fiecare tip de proiect:
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-slate-200/90 shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white font-poppins text-xs uppercase tracking-wider">
                <th className="py-4.5 px-6 font-semibold w-1/5">Tip Website</th>
                <th className="py-4.5 px-6 font-semibold w-1/6">Interval Preț</th>
                <th className="py-4.5 px-6 font-semibold w-1/6">Timp Estimativ</th>
                <th className="py-4.5 px-6 font-semibold w-1/4">Public Țintă</th>
                <th className="py-4.5 px-6 font-semibold">Ce include în mod standard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-sans bg-white">
              {tableData.map((item, index) => (
                <tr
                  key={index}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    item.highlight ? "bg-emerald-50/40" : ""
                  }`}
                >
                  <td className="py-5 px-6 font-bold text-[#150773] font-poppins">
                    <div className="flex items-center gap-2">
                      <span>{item.type}</span>
                      {item.highlight && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                          Popular
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-5 px-6 font-extrabold text-emerald-600 font-poppins text-base whitespace-nowrap">
                    {item.price}
                  </td>
                  <td className="py-5 px-6 text-slate-600 font-medium whitespace-nowrap">
                    {item.time}
                  </td>
                  <td className="py-5 px-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.target}
                  </td>
                  <td className="py-5 px-6">
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {item.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-emerald-600 font-bold shrink-0">✓</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet View Cards */}
        <div className="lg:hidden space-y-5">
          {tableData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl border transition-all ${
                item.highlight
                  ? "bg-emerald-50/30 border-emerald-300 shadow-sm"
                  : "bg-white border-slate-200/90 shadow-xs"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-lg text-[#150773] font-poppins">
                  {item.type}
                </h3>
                {item.highlight && (
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-xs font-bold font-poppins">
                    Popular
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 py-3 mb-3 border-y border-slate-200/80 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Preț orientativ:</span>
                  <span className="font-extrabold text-emerald-600 font-poppins text-base">
                    {item.price}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Timp execuție:</span>
                  <span className="font-semibold text-slate-800">
                    {item.time}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Potrivit pentru:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.target}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold text-[#150773] uppercase tracking-wider block mb-2 font-poppins">
                  Ce include:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {item.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note under table */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <p className="flex items-center gap-2">
            <span className="text-base">💡</span>
            <span>
              Prețurile reprezintă costul unic de realizare (one-time). Pentru o evaluare exactă pe nevoile companiei tale, îți transmitem o ofertă fermă în 24 de ore.
            </span>
          </p>
          <Link
            href="#contact-rapid"
            className="shrink-0 font-bold text-emerald-600 hover:text-emerald-700 font-poppins text-xs sm:text-sm inline-flex items-center gap-1"
          >
            <span>Cere o evaluare de preț</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
