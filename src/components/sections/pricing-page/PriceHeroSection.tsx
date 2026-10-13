import Link from "next/link";
import Image from "next/image";

export function PriceHeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full pt-20 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-12 bg-[#0d093e] z-20"
    >
      {/* Background ambient lighting and depth effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Soft royal sapphire/violet ambient bloom behind character */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[520px] sm:w-[640px] h-[520px] sm:h-[640px] rounded-full opacity-65 blur-[100px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #2d1887 0%, #170b5c 50%, transparent 75%)",
          }}
        />
        {/* Subtle top-left ambient depth */}
        <div
          className="absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full opacity-25 blur-[120px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3824aa 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Targeted Price Intent */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-left py-1">
            {/* Clean Price Eyebrow */}
            <div className="inline-flex items-center">
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-white/70 font-poppins">
                TRANSPARENȚĂ COMERCIALĂ • <span className="font-extrabold text-white">GHID DE COSTURI 2026</span>
              </span>
            </div>

            {/* Primary Semantic H1 */}
            <h1 className="text-[27px] sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-white font-poppins leading-[1.2] sm:leading-[1.18]">
              Cât costă un site web în România?{" "}
              <span className="text-[#34d399]">Ghid transparent de prețuri</span>.
            </h1>

            {/* Direct natural answer with inline bold hashtags */}
            <p className="text-[15px] sm:text-[16px] xl:text-[17px] text-slate-200/90 max-w-2xl leading-relaxed font-sans">
              Analizăm deschis costurile reale pentru website-uri de succes, explicând diferențele pentru{" "}
              <strong className="font-bold text-white">#site de prezentare</strong>,{" "}
              <strong className="font-bold text-white">#magazin online</strong>,{" "}
              <strong className="font-bold text-white">#dezvoltare custom</strong> și{" "}
              <strong className="font-bold text-white">#costuri recurente</strong>. Află exact ce primești pentru fiecare buget și cum eviți taxele ascunse.
            </p>

            {/* Dual Clean Pill CTAs: Emerald Primary + Crisp White Secondary */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="#preturi-rogrowth"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#070c2a] font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(43,182,115,0.28)] hover:shadow-[0_15px_35px_rgba(43,182,115,0.38)] transition-all active:scale-95 text-center min-h-[48px]"
              >
                Vezi pachetele RoGrowth
              </Link>
              <Link
                href="#tabel-comparativ"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-[#0d093e] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 group text-center min-h-[48px]"
              >
                <span>Compară categoriile de preț</span>
                <span className="transition-transform group-hover:translate-x-0.5 text-base font-bold">›</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D character hanging across the hero edge onto white section below */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end">
            <div className="relative z-30 w-full max-w-[285px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] flex justify-center lg:justify-end translate-y-2 sm:translate-y-4 lg:translate-y-20 xl:translate-y-24 -mb-32 sm:-mb-36 lg:-mb-20 xl:-mb-24">
              <Image
                src="/charcters-3d-webp/growth.webp"
                alt="Specialist RoGrowth - Analiză prețuri și rentabilitate investiție site web"
                width={460}
                height={575}
                sizes="(max-width: 640px) 285px, (max-width: 1024px) 380px, 460px"
                priority
                fetchPriority="high"
                className="relative z-30 w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
