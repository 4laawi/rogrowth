import Link from "next/link";

export function ResourcesPreviewSection() {
  const upcomingGuides = [
    {
      badge: "Ghid Financiar",
      title: "Cât costă un site web în 2026? Structură de costuri și capcane de evitat",
      summary:
        "O analiză detaliată a diferențelor dintre un site de €300, unul de €1,000 și o platformă complexă, explicând ce plătești cu adevărat.",
      icon: "📊",
    },
    {
      badge: "Tehnologie & E-Commerce",
      title: "Shopify vs. WooCommerce vs. Next.js: Ce platformă se potrivește magazinului tău?",
      summary:
        "Comparație obiectivă între flexibilitate, costuri lunare de mentenanță și viteza de încărcare pe smartphone.",
      icon: "🛍️",
    },
    {
      badge: "SEO & Google",
      title: "De ce nu apare un website nou pe Google? Indexare, autoritate și timp",
      summary:
        "Pașii tehnici esențiali pe care fiecare afacere trebuie să îi verifice în Google Search Console imediat după lansare.",
      icon: "🔍",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-100" id="resurse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 sm:gap-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase font-poppins inline-block">
              TRANSPARENȚĂ &amp; EDUCAȚIE DIGITALĂ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
              Ghiduri practice pentru{" "}
              <span className="text-[#10b981]">decizii informate</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 mt-1 font-sans">
              Credem în antreprenori informați. Publicăm periodic ghiduri transparente despre costuri, tehnologii și strategii reale de promovare online.
            </p>
          </div>
          <div>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-200/80 text-[#150773] font-semibold text-xs sm:text-sm font-sans">
              Articole &amp; Studii RoGrowth
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {upcomingGuides.map((item, index) => {
            const guideHref =
              index === 0
                ? "/pret-creare-site-web"
                : index === 1
                ? "/creare-magazin-online"
                : "/creare-site-web#seo-transparenta";
            const isAvailable = index < 2;

            return (
              <div
                key={index}
                className="p-5 sm:p-7 rounded-2xl sm:rounded-[26px] bg-white border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-emerald-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <span className="text-xl sm:text-2xl p-2 rounded-xl bg-slate-50 border border-slate-100">{item.icon}</span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#5243aa] uppercase tracking-wider font-poppins bg-purple-50 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#150773] font-poppins group-hover:text-emerald-700 transition-colors leading-snug">
                    <Link href={guideHref} className="hover:underline">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 sm:mt-3 leading-relaxed font-sans">
                    {item.summary}
                  </p>
                </div>
                <div className="pt-4 sm:pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{isAvailable ? "Disponibil acum" : "Disponibil în curând"}</span>
                  <Link
                    href={guideHref}
                    className="inline-flex items-center text-emerald-600 group-hover:translate-x-1 transition-transform min-h-[44px]"
                  >
                    <span>Citește ghidul →</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
