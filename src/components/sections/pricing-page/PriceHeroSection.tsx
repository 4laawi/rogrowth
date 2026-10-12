import Link from "next/link";
import Image from "next/image";

export function PriceHeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 bg-[#0d093e] z-20"
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
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-sans">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Acasă</Link>
          <span>/</span>
          <Link href="/creare-site-web" className="hover:text-emerald-400 transition-colors">Creare Site Web</Link>
          <span>/</span>
          <span className="text-emerald-400 font-medium">Ghid Prețuri 2026</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Targeted Price Intent */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-left py-2">
            {/* Clean Price Eyebrow */}
            <div className="inline-flex items-center">
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-white/70 font-poppins">
                TRANSPARENȚĂ COMERCIALĂ • <span className="font-extrabold text-white">GHID DE COSTURI 2026</span>
              </span>
            </div>

            {/* Primary Semantic H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight text-white font-poppins leading-[1.18]">
              Cât costă un site web în România?{" "}
              <span className="text-[#34d399]">Ghid transparent de prețuri</span>.
            </h1>

            {/* Direct natural answer with inline bold hashtags */}
            <p className="text-base sm:text-[17px] text-slate-200/90 max-w-2xl leading-relaxed font-sans">
              Analizăm deschis costurile reale pentru website-uri de succes, explicând diferențele pentru{" "}
              <strong className="font-bold text-white">#site de prezentare</strong>,{" "}
              <strong className="font-bold text-white">#magazin online</strong>,{" "}
              <strong className="font-bold text-white">#dezvoltare custom</strong> și{" "}
              <strong className="font-bold text-white">#costuri recurente</strong>. Află exact ce primești pentru fiecare buget și cum eviți taxele ascunse.
            </p>

            {/* Dual Clean Pill CTAs: Emerald Primary + Crisp White Secondary */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="#preturi-rogrowth"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#070c2a] font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(43,182,115,0.28)] hover:shadow-[0_15px_35px_rgba(43,182,115,0.38)] transition-all active:scale-95"
              >
                Vezi pachetele RoGrowth
              </Link>
              <Link
                href="#tabel-comparativ"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-[#0d093e] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 group"
              >
                <span>Compară categoriile de preț</span>
                <span className="transition-transform group-hover:translate-x-0.5 text-base font-bold">›</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D character hanging halfway across the hero edge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end">
            <div className="relative z-30 w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[490px] flex justify-center lg:justify-end lg:translate-y-10 xl:translate-y-14 lg:-mb-10 xl:-mb-14">
              <Image
                src="/charcters-3d-webp/growth.webp"
                alt="Specialist RoGrowth - Analiză prețuri și rentabilitate investiție site web"
                width={490}
                height={612}
                priority
                className="relative z-30 w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
