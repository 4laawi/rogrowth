"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function PerformanceProofSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handleKeyDown]);

  const metrics = [
    { value: "0.7s", label: "First Contentful Paint" },
    { value: "1.2s", label: "Largest Contentful Paint" },
    { value: "10ms", label: "Total Blocking Time" },
    { value: "0.000", label: "Cumulative Layout Shift" },
  ];

  const pillars = [
    {
      title: "Imagini optimizate",
      desc: "Formate WebP/AVIF și dimensionare automată adaptată ecranului de mobil.",
    },
    {
      title: "Cod curat",
      desc: "Fără scripturi redundante sau pluginuri greoaie care blochează procesorul telefonului.",
    },
    {
      title: "Încărcare eficientă",
      desc: "Prioritizarea resurselor critice pentru răspuns instantaneu la prima interacțiune.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="performanta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Context & Explanations (Stack 2nd on mobile, 1st on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center">
            <span className="text-[13px] font-semibold tracking-wider text-slate-500 uppercase font-poppins mb-3 block">
              PROBĂ DE PERFORMANȚĂ PE MOBIL
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#150773] tracking-tight font-poppins leading-tight">
              98/100 pe mobil, măsurat pe un site real
            </h2>

            <p className="mt-4 text-[15px] sm:text-base text-slate-600 leading-relaxed font-sans">
              Performanța tehnică este proiectată direct în cod, nu adăugată la final. Construim o arhitectură curată pentru ca vizitatorii tăi să nu aștepte la fiecare click.
            </p>

            {/* 3 Short Lines (No cards, no boxes, no emojis) */}
            <div className="mt-8 space-y-4 pt-2 border-t border-slate-100">
              {pillars.map((item, idx) => (
                <div key={idx} className="text-[15px] leading-relaxed text-slate-700">
                  <strong className="font-semibold text-slate-900">{item.title}</strong> –{" "}
                  <span className="text-slate-600">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Proof Card (Stack 1st on mobile, 2nd on desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="rounded-3xl bg-slate-50/80 p-2 sm:p-3 border border-slate-200/80 shadow-xs">
              <div className="rounded-2xl bg-white p-6 sm:p-8 border border-slate-100 shadow-sm">
                {/* Score Header */}
                <div className="flex items-center gap-5 pb-6 border-b border-slate-100">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#0cce6b] flex items-center justify-center shrink-0 bg-emerald-50/30">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0cce6b] font-poppins tabular-nums">
                      98
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#150773] font-poppins">
                      Performance
                    </h3>
                    <p className="text-[13px] text-slate-500 font-sans mt-0.5">
                      Google Lighthouse pe mobil (Mdina Tours)
                    </p>
                  </div>
                </div>

                {/* 2x2 Metric Grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6 py-6 border-b border-slate-100">
                  {metrics.map((metric, idx) => (
                    <div key={idx}>
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#150773] font-poppins block tabular-nums">
                        {metric.value}
                      </span>
                      <span className="text-[13px] text-slate-500 font-sans mt-0.5 block">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer Link & Secondary Thumbnail Trigger */}
                <div className="pt-5 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#150773] hover:text-slate-900 transition-colors group cursor-pointer"
                  >
                    <span>Vezi raportul complet Lighthouse</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="relative w-16 h-11 rounded-lg overflow-hidden border border-slate-200 shrink-0 hover:border-slate-400 transition-colors shadow-2xs group cursor-pointer"
                    title="Deschide raportul complet"
                  >
                    <Image
                      src="/proof/Tableau Lighthouse aux performances optimales.webp"
                      alt="Thumbnail raport Google Lighthouse"
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Proof Screenshot */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Raport oficial Google Lighthouse"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/80">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#150773] font-poppins">
                  Raport oficial Google Lighthouse (Mobil)
                </h4>
                <p className="text-xs text-slate-500 font-sans">
                  Scor 98/100 · Emulare Moto G Power · Conexiune 4G throttling
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
                aria-label="Închide raportul"
              >
                ✕
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative w-full aspect-[16/10] bg-slate-100">
              <Image
                src="/proof/Tableau Lighthouse aux performances optimales.webp"
                alt="Raport complet Google Lighthouse 98 performanță pe mobil"
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain p-2 sm:p-4"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
