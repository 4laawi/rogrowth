export function SeoTransparencySection() {
  const technicalChecks = [
    "Structură HTML semantică și ierarhie logică a paginilor (un singur H1)",
    "Meta-titluri și meta-descrieri unice redactate pentru căutare",
    "Sitemap XML dinamic și fișier robots.txt configurate corect",
    "Conectare și trimitere sitemap în Google Search Console",
    "Optimizare de viteză și stabilitate a layout-ului pe mobil",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="seo-transparenta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            FUNDAȚIE GOOGLE FĂRĂ MITURI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            SEO tehnic <span className="text-[#10b981]">inclus de la lansare</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Nu promitem poziția #1 în Google peste noapte. Construim însă site-ul corect din punct de vedere tehnic, oferindu-i fundația de care are nevoie pentru a putea crește organic.
          </p>
        </div>

        {/* Foundation vs Ongoing SEO Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Included Technical Foundation */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-slate-50/80 border-2 border-emerald-500/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  ✓
                </span>
                <h3 className="text-xl font-bold text-[#150773] font-poppins">
                  Inclus în crearea website-ului
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                Fundația tehnică esențială pe care o livrăm la fiecare proiect pentru ca paginile tale să fie indexate corect de roboții Google.
              </p>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-700">
                {technicalChecks.map((check, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span className="leading-relaxed">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-emerald-800 font-semibold font-sans">
              Gata de la lansare, fără costuri ascunse.
            </div>
          </div>

          {/* Ongoing SEO Strategy (Separate) */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-slate-50/50 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm">
                  +
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-poppins">
                  Serviciu SEO continuu (Opțional / Separat)
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-sans mb-6">
                Clasarea pe primele poziții în industrii cu concurență ridicată presupune un efort lunar de optimizare și conținut.
              </p>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Cercetare continuă de cuvinte cheie și analiza concurenței</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Strategie de articole și conținut periodic de blog</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Construire de autoritate și link acquisition</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
                  <span>Monitorizare lunară a pozițiilor și optimizări iterative</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 font-sans">
              Poate fi demarat oricând după lansarea site-ului.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
