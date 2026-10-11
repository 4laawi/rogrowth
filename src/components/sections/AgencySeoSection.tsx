import Link from "next/link";

export function AgencySeoSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="filosofie-seo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Philosophical stand */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase font-poppins">
              TRANSPARENȚĂ &amp; REALITATE GOOGLE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
              SEO fără iluzii:{" "}
              <span className="text-[#10b981]">fundație tehnică sănătoasă</span> pentru vizibilitate reală
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              Algoritmii Google nu pot fi cumpărați sau manipulați pe termen lung. Refuzăm să promitem „locul 1 garantat”, dar garantăm o construcție tehnică impecabilă: cod rapid, meta-date semantice, sitemap și conectare Search Console.
            </p>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
              <strong>Principiul RoGrowth:</strong> SEO-ul nu se termină în ziua lansării. Un website devine o investiție profitabilă atunci când este optimizat constant cu conținut util, structură clară și monitorizare tehnică.
            </p>
            <div>
              <Link
                href="/creare-site-web#seo-transparenta"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#150773] hover:text-emerald-600 underline underline-offset-4 transition-colors"
              >
                Vezi ce include fundația SEO la realizarea site-ului →
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xs flex flex-col gap-5">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-poppins flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                Cum abordăm vizibilitatea pe Google la RoGrowth:
              </h3>

              <div className="flex flex-col gap-4 text-sm sm:text-base text-slate-700 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-poppins">Fundație Inginerească:</strong>
                    <span className="text-slate-600">Arhitectură pe Next.js sau CMS configurat curat, viteză mobilă maximă și sitemap XML.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-poppins">Conținut Semantic Original:</strong>
                    <span className="text-slate-600">Texte scrise pentru oameni, nu aglomerări artificiale de cuvinte cheie.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-poppins">Monitorizare Search Console:</strong>
                    <span className="text-slate-600">Verificăm indexarea paginilor și rezolvăm eventualele erori semnalate de Google.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
