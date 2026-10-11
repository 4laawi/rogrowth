"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  { id: "site-prezentare", label: "Site Prezentare" },
  { id: "magazin-online", label: "Magazin Online" },
  { id: "lead-generation", label: "Lead Generation" },
  { id: "custom", label: "Alt Proiect" },
];

export function QuoteCtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    projectType: "site-prezentare",
    name: "",
    phone: "",
    email: "",
    message: "",
    gdpr: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdpr) {
      setErrorMsg("Te rugăm să confirmi acordul de confidențialitate.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: formData.projectType,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "A apărut o eroare. Te rugăm să încerci din nou.");
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#fafafa] border-t border-slate-200/80" id="contact-rapid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Unified Minimalist Card */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-[0_20px_60px_rgba(21,7,115,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Info & Editorial Headings */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold tracking-[0.16em] text-[#150773] uppercase font-poppins">
                  CONTACT RAPID
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#150773] tracking-tight font-poppins leading-[1.15]">
                  Hai să vorbim despre proiectul tău.
                </h2>
                <p className="text-base text-slate-600 font-sans leading-relaxed">
                  Răspundem în maximum 24 de ore cu o estimare de preț și o structură recomandată, fără obligații.
                </p>
              </div>

              {/* Minimalist Contact Info */}
              <div className="flex flex-col gap-4 text-sm sm:text-base font-sans border-t border-slate-100 pt-6">
                <a
                  href="mailto:contact@rogrowth.ro"
                  className="inline-flex items-center gap-3 text-slate-800 hover:text-[#150773] font-medium transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#150773] shrink-0 text-sm">
                    ✉
                  </span>
                  <span>contact@rogrowth.ro</span>
                </a>

                <a
                  href="tel:+40724646646"
                  className="inline-flex items-center gap-3 text-slate-800 hover:text-emerald-600 font-medium transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 text-sm">
                    📞
                  </span>
                  <span>0724 646 646 (WhatsApp &amp; Apel)</span>
                </a>

                <div className="inline-flex items-center gap-3 text-slate-500 text-xs sm:text-sm">
                  <span className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 text-xs">
                    📍
                  </span>
                  <span>București • Clienți în toată România</span>
                </div>
              </div>

              {/* Discrete Guarantees */}
              <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-500 font-sans border-t border-slate-100 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Răspuns transparent în max. 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Cost ferm agreat înainte de execuție</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Proprietate 100% pe cod &amp; domeniu</span>
                </div>
              </div>
            </div>

            {/* Right Column: Effortless Minimalist Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center text-center py-14 px-4 gap-4 bg-emerald-50/70 rounded-3xl border border-emerald-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl font-bold shadow-md shadow-emerald-500/20">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-poppins">
                    Mulțumim pentru mesaj!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 max-w-sm font-sans">
                    Am recepționat detaliile. Revenim cu un răspuns în maximum 24 de ore.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        projectType: "site-prezentare",
                        name: "",
                        phone: "",
                        email: "",
                        message: "",
                        gdpr: false,
                      });
                    }}
                    className="mt-2 px-6 py-2 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-white transition-all cursor-pointer"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Project Type Chips */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-sans">
                      Tipul proiectului
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = formData.projectType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type.id })}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                              isSelected
                                ? "bg-[#150773] text-white border-[#150773]"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Input Fields: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs sm:text-sm font-bold text-slate-800 font-sans">
                        Nume <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Numele tău"
                        className="w-full px-3 py-2 text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent border-b-2 border-slate-200 hover:border-slate-300 focus:border-[#150773] focus:outline-none transition-colors font-sans"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs sm:text-sm font-bold text-slate-800 font-sans">
                        Telefon sau WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="07xx xxx xxx"
                        className="w-full px-3 py-2 text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent border-b-2 border-slate-200 hover:border-slate-300 focus:border-[#150773] focus:outline-none transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs sm:text-sm font-bold text-slate-800 font-sans">
                      Email (opțional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="adresa@email.ro"
                      className="w-full px-3 py-2 text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent border-b-2 border-slate-200 hover:border-slate-300 focus:border-[#150773] focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs sm:text-sm font-bold text-slate-800 font-sans">
                      Mesaj sau detalii (opțional)
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Câteva cuvinte despre ce ai dori să realizezi..."
                      className="w-full px-3 py-2 text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent border-b-2 border-slate-200 hover:border-slate-300 focus:border-[#150773] focus:outline-none transition-colors resize-none font-sans"
                    ></textarea>
                  </div>

                  {/* GDPR */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={formData.gdpr}
                        onChange={(e) => setFormData({ ...formData, gdpr: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-[#150773] focus:ring-[#150773] shrink-0 cursor-pointer accent-[#150773]"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed font-sans">
                        Sunt de acord cu prelucrarea datelor mele pentru primirea ofertei conform{" "}
                        <span className="text-[#2bb673] hover:underline font-semibold">politicii de confidențialitate</span>.
                      </span>
                    </label>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs sm:text-sm font-sans">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-[#150773] hover:bg-[#1c0b94] disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98] text-white font-bold text-sm sm:text-base tracking-wider uppercase shadow-md shadow-[#150773]/20 transition-all cursor-pointer font-poppins"
                    >
                      <span>{isSubmitting ? "SE TRIMITE..." : "VREAU SĂ DISCUTĂM"}</span>
                      <svg
                        className={`w-4 h-4 text-white transform rotate-45 transition-transform ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
