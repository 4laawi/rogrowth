import Link from "next/link";
import Image from "next/image";

const SERVICE_IMG_1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBB80dwJpKXkNbeS_4pdYswB7GirwraADsIwLL7cj7vzftDigyWVyEZNsspTeF2ryQkmZpKrGmKcLen8lC3ZqbYhrZT2CjEIHElIWAU-CDE8N3RVvGKfjoA8lCroVwD476Wa1wSLgNrKS7IcXEPml5nmG4aLLNz86vHDPSgaSzAVUMSU9-a3jTOh8faJa-jJBVo9qNy8HFDPG-M-rlY1E6RPPJcIXLJNfIF_T6Jp_mBazUJEHzOFN2jwKdFMqoNhP7tVsc";

const SERVICE_IMG_2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAWmxVZAg8L2okW-vEpZKrqnaO_2kZbEgPw55J5mejpp7IFh0c7G7EXYoI55bKtwTycKvOFuYtE9I5iv3mfV1xwdoDsyWLP70hxOY5-m1vmOmGL9ojWWckinpHnGMr30VOXLAF93LcE_50iRYKekPuekZSPx4_TEFl8fxdaSVA2WsHl0kNptkUMYjAGg9qU3YLt78svumzFHu5neN9B1v0Wl8wE40rQeZSpr3z5xNEGShp_ebXdmWM6hxFaygd8P2nZqYY";

const SERVICE_IMG_3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAdLXANycVNT3VT1IvwoZGPqEGhFjVKZzlhdlIjSnaLHM5F_Ws4dAORW_6aGBHnAoENtdM_t0TMnz62Wsa_G-joyEByKwIsuMFjDYvSK3-2hpCL68owRc4oZiXORumfl3ArxMAYZCxa-_zFWH97hovQ7tMFZxGMvhdez0wJkJ_K2WeabIWn1QNUGOjK6kgnXXf2Q9E6tN8FzjrwUuCJy4oKH4oFse-Vr-VBNJcbGDnp_fZC3LeFms72UYCI67BwOzuGj9E";

export function ServicesSection() {
  return (
    <section className="w-full py-20 lg:py-28 bg-[#fbfcfd] border-t border-slate-100" id="servicii">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16 lg:mb-20">
          <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 font-poppins">
            FIRMA WEBDESIGN BUCURESTI | SERVICII WEBDESIGN PREMIUM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Oferim{" "}
            <span className="relative inline-block px-2 py-0.5 rounded bg-[#a7f3d0]/60 text-[#10b981]">
              servicii premium
            </span>{" "}
            pentru creşterea sănătoasă a business-ului tău online!
          </h2>
        </div>

        {/* 3 Columns matching the stitch reference: Free-standing character on top, title, description, pill button */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full h-64 flex items-end justify-center mb-6">
              <Image
                src={SERVICE_IMG_1}
                alt="Site de prezentare"
                width={260}
                height={260}
                className="max-h-60 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-[#150773] flex items-center justify-center gap-2 mb-3 font-poppins">
              <span>💻</span> Site de prezentare
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 max-w-md font-sans">
              Vino cu afacerea ta online, acolo unde deja sunt clienții și competitorii tăi. Împreună ne putem asigura că vei avea o prezență online de succes, printr-un website făcut cum trebuie.
            </p>
            <Link
              href="#preturi"
              className="mt-auto inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-[#5243aa]/30 hover:bg-[#150773] hover:text-white text-[#150773] text-xs sm:text-sm font-semibold transition-colors"
            >
              Vezi detalii
            </Link>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full h-64 flex items-end justify-center mb-6">
              <Image
                src={SERVICE_IMG_2}
                alt="Magazin online"
                width={260}
                height={260}
                className="max-h-60 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-[#150773] flex items-center justify-center gap-2 mb-3 font-poppins">
              <span>🛒</span> Magazin online
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 max-w-md font-sans">
              A venit timpul să-ți vinzi produsele online, iar noi te putem ajuta să faci asta prin intermediul unui magazin online cu design modern și optimizat pentru conversii.
            </p>
            <Link
              href="#preturi"
              className="mt-auto inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-[#5243aa]/30 hover:bg-[#150773] hover:text-white text-[#150773] text-xs sm:text-sm font-semibold transition-colors"
            >
              Vezi detalii
            </Link>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-full h-64 flex items-end justify-center mb-6">
              <Image
                src={SERVICE_IMG_3}
                alt="Mentenanță Website"
                width={260}
                height={260}
                className="max-h-60 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-[#150773] flex items-center justify-center gap-2 mb-3 font-poppins">
              <span>🔧</span> Mentenanță Website
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 max-w-md font-sans">
              Ne asigurăm că site-ul tău funcționează în parametrii optimi. Îl vom menține la zi cu toate update-urile plugin-urilor, scanările de securitate, monitorizarea uptime-ului, ș.a.m.d.
            </p>
            <Link
              href="#contact-rapid"
              className="mt-auto inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-[#5243aa]/30 hover:bg-[#150773] hover:text-white text-[#150773] text-xs sm:text-sm font-semibold transition-colors"
            >
              Vezi detalii
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
