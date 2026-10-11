import Link from "next/link";

export function CapabilitiesSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white border-t border-slate-100" id="capacitati">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Agency breadth */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase font-poppins">
              CAPACITATE TEHNICĂ &amp; DIRECȚIE DIGITALĂ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
              Tehnologie de ultimă generație,{" "}
              <span className="text-[#10b981]">adaptată afacerii tale</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Nu impunem aceeași platformă fiecărui client. Dacă ai nevoie de viteză maximă, securitate și flexibilitate totală, dezvoltăm pe <strong>Next.js, React și Supabase</strong>. Dacă administrezi un catalog simplu sau dorești o soluție consacrată de blogging și vânzare, configurăm curat <strong>Shopify sau WordPress / WooCommerce</strong>.
            </p>
            <div className="pt-2 flex flex-col gap-3.5 text-sm sm:text-base text-slate-700 font-sans">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                <span><strong>Next.js &amp; React:</strong> Cod curat, fără pluginuri inutile care îngreunează încărcarea.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                <span><strong>Shopify &amp; WooCommerce:</strong> Pentru magazine online cu gestiune facilă a comenzilor.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                <span><strong>Fundație SEO Tehnică:</strong> Structură semantică, sitemap, meta-date și Search Console configurate din start.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-600 shrink-0"></div>
                <span><strong>Capacitate de scalare:</strong> Pregătiți să susținem ulterior campanii Google/Meta Ads și automatizări.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stack & Capability Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-5">
            <div className="p-6 sm:p-7 rounded-[26px] bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col gap-2.5 hover:border-emerald-300 transition-all hover:-translate-y-0.5">
              <span className="text-3xl mb-1">⚡</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins">Next.js &amp; React</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Arhitectură server-rendered de ultimă generație pentru timpi de încărcare sub o secundă și indexare impecabilă pe Google.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-[26px] bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col gap-2.5 hover:border-emerald-300 transition-all hover:-translate-y-0.5">
              <span className="text-3xl mb-1">🛍️</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins">E-Commerce Ready</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Shopify sau WooCommerce optimizate pentru conversie pe mobil, cu checkout fără fricțiune și curieri integrați.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-[26px] bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col gap-2.5 hover:border-emerald-300 transition-all hover:-translate-y-0.5">
              <span className="text-3xl mb-1">🔍</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins">SEO &amp; Indexare</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Fără promisiuni fanteziste: pregătim paginile tehnic, corect și verificat conform ghidurilor oficiale Google Search.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-[26px] bg-white border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] flex flex-col gap-2.5 hover:border-emerald-300 transition-all hover:-translate-y-0.5">
              <span className="text-3xl mb-1">📈</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins">Scalare &amp; Ads</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                Site-ul devine baza pentru campanii viitoare de promovare plătită (Google Ads &amp; Meta Ads) și generare de clienți.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
