export function EcommerceSeoSection() {
  const seoCheckpoints = [
    {
      title: "Arhitectură Categorii & Breadcrumbs",
      desc: "Structură URL semantică și curată cu fire de navigare indexabile pe Google.",
    },
    {
      title: "Schema.org Product & Rich Snippets",
      desc: "Date structurate pentru preț, monedă și stoc direct în rezultatele de căutare.",
    },
    {
      title: "Control Canonic pe Filtre",
      desc: "Prevenirea conținutului duplicat generat de sortări și combinații de atribute.",
    },
    {
      title: "Imagini WebP & Core Web Vitals",
      desc: "Compresie modernă și lazy loading pentru viteză de încărcare sub 1 secundă.",
    },
    {
      title: "Sitemap XML Dinamic",
      desc: "Actualizare automată și sincronizare directă în Google Search Console.",
    },
    {
      title: "Template-uri Meta Dinamice",
      desc: "Șabloane automate de Title și Description pentru catalogul complet de produse.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200/60" id="seo-ecommerce">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight font-poppins">
            Fundație tehnică SEO inclusă la lansare
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#64748B] font-sans">
            Construim magazinul cu o structură curată și semantică, gata de indexare organică în Google încă din prima zi.
          </p>
        </div>

        {/* 6 SEO Checkpoints in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {seoCheckpoints.map((point, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-[20px] p-7 border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)] hover:border-slate-300"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-emerald-600 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <h3 className="text-base font-semibold text-[#0F172A] font-poppins">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed font-sans pl-6">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#64748B] font-sans leading-relaxed">
            Fundația tehnică SEO este integrată în fiecare proiect. Pentru servicii continue de conținut lunar și link building, oferim pachete dedicate de SEO organic.
          </p>
        </div>
      </div>
    </section>
  );
}

