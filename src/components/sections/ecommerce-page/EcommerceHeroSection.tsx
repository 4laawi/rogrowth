import Link from "next/link";
import Image from "next/image";

export function EcommerceHeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 lg:pb-12 bg-[#0d093e] z-20"
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
          {/* Left Column: Targeted E-Commerce Commercial Intent */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-left py-1">
            {/* Clean E-Commerce Eyebrow */}
            <div className="inline-flex items-center">
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-white/70 font-poppins">
                DEZVOLTARE E-COMMERCE • <span className="font-extrabold text-white">SHOPIFY &amp; WOOCOMMERCE</span>
              </span>
            </div>

            {/* Primary Semantic H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold tracking-tight text-white font-poppins leading-[1.18]">
              Creare <span className="text-[#34d399]">magazin online profesional</span> optimizat pentru{" "}
              <span className="text-[#34d399]">vânzări maxime</span>.
            </h1>

            {/* Direct natural value proposition with inline bold hashtags */}
            <p className="text-base sm:text-[16px] xl:text-[17px] text-slate-200/90 max-w-2xl leading-relaxed font-sans">
              Construim magazine online performante pe Shopify și WooCommerce, integrând automat{" "}
              <strong className="font-bold text-white">#curieri români</strong> (Fan, Sameday Easybox),{" "}
              <strong className="font-bold text-white">#plăți cu cardul</strong>,{" "}
              <strong className="font-bold text-white">#facturare automată</strong>,{" "}
              <strong className="font-bold text-white">#SEO tehnic</strong> și{" "}
              <strong className="font-bold text-white">#checkout optimizat</strong> pentru conversie pe mobil.
            </p>

            {/* Dual Clean Pill CTAs: Emerald Primary + Crisp White Secondary */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#contact-rapid"
                className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#2bb673] hover:bg-[#239960] text-[#070c2a] font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(43,182,115,0.28)] hover:shadow-[0_15px_35px_rgba(43,182,115,0.38)] transition-all active:scale-95"
              >
                Solicită ofertă magazin online
              </Link>
              <Link
                href="#pachete-preturi"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-[#0d093e] font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 group"
              >
                <span>Vezi opțiuni și prețuri</span>
                <span className="transition-transform group-hover:translate-x-0.5 text-base font-bold">›</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D character hanging across the hero edge onto white section below */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end">
            <div className="relative z-30 w-full max-w-[280px] sm:max-w-[330px] md:max-w-[370px] lg:max-w-[420px] xl:max-w-[460px] flex justify-center lg:justify-end translate-y-6 sm:translate-y-8 lg:translate-y-20 xl:translate-y-24 -mb-6 sm:-mb-8 lg:-mb-20 xl:-mb-24">
              <Image
                src="/charcters-3d-webp/ecom-shop.webp"
                alt="Specialist E-Commerce RoGrowth - Creare magazin online cu conversie ridicată"
                width={460}
                height={575}
                priority
                className="relative z-30 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
