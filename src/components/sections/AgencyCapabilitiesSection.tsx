import Link from "next/link";

export function AgencyCapabilitiesSection() {
  const services = [
    {
      icon: "💻",
      title: "Creare Site Web & E-Commerce",
      tag: "Serviciu Principal",
      description:
        "Website-uri de prezentare, magazine online și platforme custom construite pe Next.js, Shopify sau WooCommerce, optimizate pentru viteză și conversie.",
      link: "/creare-site-web",
      linkText: "Vezi detalii creare site →",
    },
    {
      icon: "🔍",
      title: "SEO & Vizibilitate Organică",
      tag: "Creștere pe Google",
      description:
        "Fundație tehnică impecabilă, indexare în Google Search Console, structură semantică a conținutului și strategie pentru clasare organică pe termen lung.",
      link: "#contact-rapid",
      linkText: "Discută strategia SEO →",
    },
    {
      icon: "📈",
      title: "Google Ads & Meta Ads",
      tag: "Promovare Plătită",
      description:
        "Infrastructură de conversie și campanii de achiziție pe căutare Google și rețele sociale pentru generarea rapidă de cereri de ofertă calificate.",
      link: "#contact-rapid",
      linkText: "Lansează campanii Ads →",
    },
    {
      icon: "🎨",
      title: "Design Grafic & Identitate",
      tag: "Branding & UI/UX",
      description:
        "Design de interfață intuitiv, identitate vizuală modernă și materiale comerciale coerente care inspiră încredere instantă potențialilor clienți.",
      link: "#contact-rapid",
      linkText: "Explorează soluții design →",
    },
    {
      icon: "⚡",
      title: "Automatizări & Sisteme Digitale",
      tag: "Eficiență & CRM",
      description:
        "Integrarea formularelor de contact cu CRM-uri, notificări automate pe email/WhatsApp și dashboard-uri interne pentru eliminarea sarcinilor repetitive.",
      link: "#contact-rapid",
      linkText: "Automatizează procesele →",
    },
    {
      icon: "🤝",
      title: "Mentenanță & Suport Continuu",
      tag: "Parteneriat Activ",
      description:
        "Monitorizare tehnică, backup-uri periodice, actualizări de securitate și dezvoltare continuă pe măsură ce compania ta se extinde.",
      link: "#contact-rapid",
      linkText: "Află detalii suport →",
    },
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-white border-t border-slate-100" id="servicii-digitale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2.5 sm:mb-3 font-poppins inline-block">
            SERVICII DIGITALE INTEGRATE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Soluții digitale construite pentru{" "}
            <span className="text-[#10b981]">creșterea afacerii tale</span>
          </h2>
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans">
            Acoperim întregul ciclu digital: de la dezvoltarea unui website performant până la poziționare pe Google, promovare plătită și automatizări operaționale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-[28px] bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_35px_-8px_rgba(21,7,115,0.08)] hover:border-emerald-200 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                  <span className="text-2xl sm:text-3xl p-2 sm:p-2.5 rounded-2xl bg-emerald-50 border border-emerald-100/60 inline-block">
                    {item.icon}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-100 font-poppins">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins mt-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-sans mt-2.5 sm:mt-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#150773] group-hover:text-emerald-600 transition-colors py-1.5 min-h-[44px]"
                >
                  <span>{item.linkText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
