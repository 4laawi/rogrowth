import Image from "next/image";
import Link from "next/link";

export function EcommercePlatformsSection() {
  const platforms = [
    {
      id: "shopify",
      name: "Shopify",
      logo: "/icons/Shopify-Logo.webp",
      tagline: "Lansare rapidă, fără bătăi de cap.",
      bullets: [
        "Hosting și securitate incluse",
        "Checkout de încredere",
        "Administrare simplă de pe telefon",
      ],
      footer: "Abonament de la $39/lună",
    },
    {
      id: "woocommerce",
      name: "WooCommerce",
      logo: "/icons/woocommerce-logo-1200x630-cropped.webp",
      tagline: "Flexibilitate totală, fără abonamente.",
      bullets: [
        "Fără comision de platformă",
        "Control complet asupra datelor",
        "Integrări cu ERP și curieri locali",
      ],
      footer: "Necesită hosting performant",
    },
    {
      id: "headless",
      name: "Headless (Next.js)",
      logo: "/rogrowth-logo.png",
      tagline: "Viteză maximă, design 100% liber.",
      bullets: [
        "Încărcare sub o secundă",
        "Design fără limite",
        "Securitate sporită",
      ],
      footer: "Investiție inițială mai mare",
    },
  ];

  return (
    <section className="pt-28 sm:pt-36 lg:pt-48 xl:pt-52 pb-20 lg:pb-24 bg-[#F8FAFC]" id="platforme-ecommerce">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-3 block font-poppins">
            PLATFORME E-COMMERCE • ALEGERE STRATEGICĂ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins">
            Ce platformă este <span className="text-[#10b981]">potrivită pentru tine?</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Alegem împreună soluția optimă pentru modelul tău de business: Shopify, WooCommerce sau dezvoltare custom pe Next.js.
          </p>
        </div>

        {/* 3 Minimalist Equal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="bg-white rounded-[20px] border border-slate-200/80 p-7 sm:p-8 lg:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.05)] hover:border-slate-300"
            >
              <div>
                {/* Logo (Floating, no border/background) */}
                <div className="h-12 sm:h-14 flex items-center justify-start mb-6">
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    width={120}
                    height={56}
                    className="h-9 sm:h-11 w-auto max-w-[130px] object-contain object-left"
                  />
                </div>

                {/* Platform Name */}
                <h3 className="text-2xl font-bold text-[#150773] tracking-tight font-poppins">
                  {platform.name}
                </h3>

                {/* Tagline */}
                <p className="mt-1.5 text-sm sm:text-[15px] text-[#64748B] font-sans">
                  {platform.tagline}
                </p>

                {/* Thin Divider */}
                <div className="my-6 border-t border-slate-100" />

                {/* 3 Short Bullets */}
                <ul className="space-y-3.5">
                  {platform.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-[15px] text-[#334155] font-sans">
                      <svg
                        className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Note */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <p className="text-xs sm:text-[13px] text-[#64748B] font-sans">
                  {platform.footer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-base text-slate-700 font-sans">
            Nu ești sigur?{" "}
            <Link
              href="#contact-rapid"
              className="text-[#150773] hover:text-emerald-700 underline underline-offset-4 decoration-slate-300 hover:decoration-emerald-600 transition-colors font-semibold"
            >
              Hai să discutăm gratuit →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

