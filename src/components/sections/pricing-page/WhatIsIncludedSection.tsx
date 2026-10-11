export function WhatIsIncludedSection() {
  const inclusions = [
    {
      title: "Design 100% responsiv & adaptat pentru mobil",
      desc: "Interfață curată care se adaptează impecabil pe telefoane inteligente, tablete, laptopuri și ecrane 4K.",
    },
    {
      title: "Viteză optimizată și cod curat (Next.js)",
      desc: "Performanță ridicată, imagini comprimate WebP/AVIF și timpi rapizi de încărcare pentru o experiență fără așteptare.",
    },
    {
      title: "Fundație tehnică SEO inclusă la lansare",
      desc: "Sitemap XML, fișier robots.txt, meta-tag-uri unice, etichete Open Graph pentru distribuiri sociale și date structurate Schema.org.",
    },
    {
      title: "Configurare Google Search Console & GA4",
      desc: "Trimitem sitemap-ul către Google pentru indexare și configurăm Google Analytics 4 pentru statistici reale încă din prima zi.",
    },
    {
      title: "Formulare sigure cu protecție antispam",
      desc: "Formulare interactive conectate direct la emailul sau WhatsApp-ul tău, protejate invizibil împotriva mesajelor spam.",
    },
    {
      title: "2 runde structurate de revizii incluse",
      desc: "Testăm site-ul pe un link privat și facem ajustările de conținut, imagini și culori înainte de lansarea publică.",
    },
    {
      title: "Proprietate 100% pe cod și conținut",
      desc: "Ești proprietarul absolut al domeniului, fișierelor și accesurilor. Zero abonamente obligatorii sau blocaje contractuale.",
    },
    {
      title: "Instruire practică pentru administrare",
      desc: "Îți predăm toate credențialele de acces și îți arătăm cum să gestionezi cererile de ofertă sau să modifici conținut simplu.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="ce-este-inclus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-2 block font-poppins">
                STANDARDE DE CALITATE ROGROWTH
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight font-extrabold text-[#150773] tracking-tight font-poppins">
                Ce este inclus în mod standard în orice proiect?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                Considerăm că o fundație tehnică sigură, viteza pe mobil și indexarea pe Google nu ar trebui vândute ca „opțiuni scumpe”. Indiferent de pachetul ales, primești întotdeauna un website complet pregătit pentru utilizatori reali.
              </p>
            </div>

            <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-md">
              <div className="flex items-center gap-2.5 font-bold text-emerald-400 font-poppins text-sm sm:text-base mb-2">
                <span className="text-lg">🛡️</span>
                <span>Politica prețului fix agreat:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                Ce discutăm și semnăm în oferta inițială reprezintă costul ferm al proiectului. Fără taxe ascunse adăugate pe parcurs.
              </p>
            </div>
          </div>

          {/* Right Column: Inclusions Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              {inclusions.map((item, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-emerald-200 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[#150773] font-poppins">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mt-1.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
