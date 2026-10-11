import Image from "next/image";

const COMMITMENT_IMAGE_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB10ZrHaaI5WR24ebLyRhqHYolcDRsjwQAv5H1zzQ0inhc0WPzrQnE6_Z9b7vTUH00KOhte_SLR3bb5JjH0ohb30rh0svhaSRz9ga4Nco-ZcLETYl6hJrQqC80HmX1r_zJTEYDuj_DcMg7ZC-DSkfmhB4PuGM8Hr9pKou7G7ULkvodAl80ft3jzUplqyyBjrPz5ZriYDdDXsV_iTgzMsjmfP-p883Gy_uNjpCXvCKZichSxyos_r8dtMgbwYrkuRh5tk68";

const COMMITMENT_IMAGE_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5QKRH93QS2rozic974WAWZ0vyCrJIZh6a5QeQZb5Y5ivVU1PRbYo2rTplZU4z0FytpQnG7CSnzrudcGhOgMtsYy1Adlc766MYwVYKZnj5v29iBweSJWYJc5SNY3icLI9RxNW0_ac8-v5h8Kk6-Ex5VZquYGG4Jr3kMObMfwMnCRVj1qSqd3EHxsUHW58VMW29t4W-gUVI75NR0p_hu7YxKq4FAaU5Jkz4K3ZvuRTZLdFBP86JKMlzeDHGU190-Bj2K-M";

const COMMITMENT_IMAGE_3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4pIwVp6o-nOdBzclDyNtUSqb_xvsa_DIR6ETLPnR_iN07KF0q2VTEwzkPRGf2iicevvTp_9keyiHqczLMP9Yj0l9lOT2BojFETazLkVwsc9J7DJ9rG_AJXE6HK8aU-1xvAUq8lGm9LOEnVFRD2no_lswwu--uThCVpb6ejRa1117pwBFH1MnaFws6Nchjqf0Kmf-8ieT-D0yJLWNwDzv7uRk_rP7hWEXG4BEIRydjA5o_SR0ZJjM-fvK5lDP2tFFCb_Y";

export function CommitmentsSection() {
  return (
    <div id="angajamente" className="w-full bg-white divide-y divide-slate-100">
      {/* 1. Ne tinem de promisiuni */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Free-standing character */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <Image
                src={COMMITMENT_IMAGE_1}
                alt="Ne ținem de promisiuni - Specialist RoGrowth"
                width={380}
                height={400}
                className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain"
              />
            </div>
            {/* Right: Content & Checklist */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#5243aa] mb-2 font-poppins">
                PRINCIPIU DE BAZĂ
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight mb-4 font-poppins">
                Ne ținem de <span className="text-[#10b981]">promisiuni ferme</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl">
                Preluăm doar proiectele la care putem garanta un rezultat de calitate și de care suntem mândri, oferindu-ți claritate și predictibilitate de la prima discuție până la predarea finală.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Arătăm seriozitate și profesionalism în toate etapele de colaborare.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Respectăm cu strictețe cerințele contractuale și scope-ul stabilit inițial.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Ne asigurăm că site-ul final este rapid, convingător și bine organizat.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-700">
                    Nu lăsăm lucrurile neterminate sau făcute doar de mântuială.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Respectam mereu deadline-ul */}
      <section className="w-full py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#5243aa] mb-2 font-poppins">
                RESPECT PENTRU TIMPUL TĂU
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight mb-4 font-poppins">
                Respectăm mereu <span className="text-[#10b981]">deadline-ul agreat</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl">
                Știm cât de important este timpul pentru afacerea ta. De aceea, stabilim de la început termene realiste pentru fiecare etapă și le respectăm fără scuze sau amânări nejustificate.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Termene de livrare realiste și bine fundamentate înainte de începerea lucrului.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Răspundem prompt la orice solicitare și ținem legătura direct pe WhatsApp sau telefon.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Știi în permanență stadiul proiectului, fără să fii nevoit să alergi după update-uri.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-700">
                    Nu promitem termene nerealiste doar pentru a semna contractul.
                  </span>
                </div>
              </div>
            </div>
            {/* Right: Free-standing character */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <Image
                src={COMMITMENT_IMAGE_2}
                alt="Respectăm mereu deadline-ul - RoGrowth"
                width={380}
                height={400}
                className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Venim cu idei personalizate */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Character */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <Image
                src={COMMITMENT_IMAGE_3}
                alt="Venim cu idei personalizate - Echipa RoGrowth"
                width={380}
                height={400}
                className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain"
              />
            </div>
            {/* Right: Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-[#5243aa] mb-2 font-poppins">
                IMPLICARE AUTENTICĂ
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight mb-4 font-poppins">
                Venim cu <span className="text-[#10b981]">idei personalizate</span> pentru afacerea ta
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed max-w-3xl">
                Ne implicăm activ în fiecare proiect, aducând propuneri concrete adaptate domeniului tău de activitate. Nu aplicăm șabloane pe bandă rulantă, ci gândim un traseu logic pentru clienții tăi.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Propuneri practice pentru captarea de cereri de ofertă și telefoane de la potențiali clienți.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Arhitectură de conținut clară, fără texte complicate sau obositoare pentru vizitatori.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base sm:text-lg text-slate-800">
                    Alegerea tehnologiei potrivite (Next.js personalizat, WordPress/WooCommerce sau Shopify) în funcție de buget și scop.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
