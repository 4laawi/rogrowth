import Image from "next/image";

export function AgencyWhyUsSection() {
  return (
    <section
      className="w-full py-20 lg:py-28 bg-white border-t border-slate-100"
      id="de-ce-rogrowth"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 lg:mb-28">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 font-poppins inline-block">
            VALORI &amp; ANGAJAMENTE FERME
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[42px] leading-tight lg:leading-[50px] font-extrabold text-[#150773] tracking-tight font-poppins">
            De ce aleg companiile din România{" "}
            <span className="text-[#10b981]">parteneriatul cu RoGrowth</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
            Construim parteneriate solide bazate pe responsabilitate, termene respectate cu strictețe și idei proactive concepute pentru creșterea sănătoasă a afacerii tale.
          </p>
        </div>

        {/* 3 Alternating Two-Column Sections */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* =========================================================
              SECTION 1: Image Left, Content Right
              Pillar: We honor our commitments to the end
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none flex items-center justify-center">
                <Image
                  src="/characters-3d/gather-working-design-planning.png"
                  alt="Echipa RoGrowth planifică proiectul cu responsabilitate"
                  width={520}
                  height={650}
                  priority
                  className="w-full max-h-[360px] sm:max-h-[420px] lg:max-h-[460px] object-contain drop-shadow-[0_20px_35px_rgba(21,7,115,0.08)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins leading-snug lg:leading-[44px]">
                Ne îndeplinim angajamentele până la capăt
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                Ne implicăm doar în proiecte pe care avem certitudinea că le putem duce la bun sfârșit într-o manieră de care să fim mândri de munca noastră, iar tu să fii pe deplin mulțumit. Lucrăm transparent, pe contract ferm, fără improvizații și fără scuze.
              </p>

              {/* Trust & Anti-Pattern List */}
              <ul className="mt-7 space-y-3.5 font-sans">
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Căutăm să arătăm <strong>profesionalism și deschidere</strong> în toate interacțiunile noastre</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Respectăm cu strictețe toate cerințele contractuale și tehnice agreate</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Ne asigurăm că rezultatul final este <strong>peste</strong> așteptările tale inițiale</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Tratăm cu maximă seriozitate fiecare afacere, oferind proprietate deplină pe cod și date</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-500 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Nu lăsăm lucruri nefinalizate sau capitole tehnice abandonate la jumătate</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-500 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Nu facem lucrurile superficial, „doar ca să fie acolo”</span>
                </li>
              </ul>
            </div>
          </div>

          {/* =========================================================
              SECTION 2: Content Left, Image Right
              Pillar: We always respect the agreed deadline
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins leading-snug lg:leading-[44px]">
                Respectăm întotdeauna deadline-ul
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                Știm că timpul este cel mai valoros activ al afacerii tale. De aceea, livrăm întotdeauna proiectul în intervalul agreat de comun acord, respectând deadline-ul fiecărei etape de dezvoltare și lansare.
              </p>

              {/* Trust & Anti-Pattern List */}
              <ul className="mt-7 space-y-3.5 font-sans">
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Îți oferim <strong>deadline-uri realiste</strong>, calculate corect în funcție de complexitate</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Răspundem prompt în maximum 24h la orice solicitare sau întrebare pe parcurs</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Vei putea ști oricând stadiul exact al proiectului tău pe un link dedicat de test</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Etape structurate de revizie fără blocaje sau amânări nejustificate</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-500 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Nu promitem termene nerealiste doar pentru a grăbi semnarea unui contract</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-500 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Nu dispărem săptămâni întregi fără să comunicăm starea lucrărilor</span>
                </li>
              </ul>
            </div>

            {/* Visual Column */}
            <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none flex items-center justify-center">
                <Image
                  src="/characters-3d/person-calendar.png"
                  alt="Calendar și livrare la timp a proiectelor RoGrowth"
                  width={520}
                  height={650}
                  className="w-full max-h-[360px] sm:max-h-[420px] lg:max-h-[460px] object-contain drop-shadow-[0_20px_35px_rgba(21,7,115,0.08)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          {/* =========================================================
              SECTION 3: Image Left, Content Right
              Pillar: We bring personalized strategies & proactive consulting
             ========================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 flex justify-center order-1">
              <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none flex items-center justify-center">
                <Image
                  src="/characters-3d/growth-up.png"
                  alt="Consultanță strategică și creștere digitală RoGrowth"
                  width={520}
                  height={650}
                  className="w-full max-h-[360px] sm:max-h-[420px] lg:max-h-[460px] object-contain drop-shadow-[0_20px_35px_rgba(21,7,115,0.08)] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins leading-snug lg:leading-[44px]">
                Venim cu idei personalizate &amp; consultanță proactivă
              </h3>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
                Suntem implicați în mod activ în fiecare proiect și venim cu sugestii adaptate specificului afacerii tale. Ne poziționăm ca veritabili parteneri strategici, nu doar ca o agenție de executat pagini. Ne pasă ca fiecare element să genereze valoare comercială concretă.
              </p>

              {/* Trust & Anti-Pattern List */}
              <ul className="mt-7 space-y-3.5 font-sans">
                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Idei practice privind <strong>modalități eficiente de achiziție a clienților</strong></span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Recomandări clare pentru optimizarea ratei de conversie și a apelurilor directe</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Îți recomandăm instrumente, integrări CRM și automatizări testate cu succes</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Arhitectură tehnică pregătită pentru campanii de Google &amp; Meta Ads</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-500 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Nu aplicăm șabloane identice fără să analizăm concurența și profilul clienților tăi</span>
                </li>

                <li className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 text-rose-500 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Nu îți propunem servicii inutile sau costuri ascunse care nu aduc un ROI tangibil</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
