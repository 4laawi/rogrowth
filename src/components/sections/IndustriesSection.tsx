import Link from "next/link";

export function IndustriesSection() {
  const industries = [
    {
      icon: "🏥",
      name: "Clinici & Cabinete Medicale",
      detail: "Programări online, prezentarea echipei de medici, tarife transparente și structură conformă pentru încrederea pacienților.",
    },
    {
      icon: "🏗️",
      name: "Construcții, Renovări & Amenajări",
      detail: "Portofoliu vizual de lucrări, cereri de ofertă structurate pe etape de proiect și diferențiere clară față de concurență.",
    },
    {
      icon: "🏢",
      name: "Dezvoltări Imobiliare & Agenții",
      detail: "Prezentare ansambluri rezidențiale, fișe detaliate de apartamente, facilități de zonă și formulare rapide de vizionare.",
    },
    {
      icon: "🚗",
      name: "Service Auto, Detailing & Rent-a-Car",
      detail: "Listă clară de servicii auto, formulare rapide de rezervare mașină și butoane de apelare directă de pe smartphone.",
    },
    {
      icon: "⚖️",
      name: "Avocați, Notari & Consultanță Fiscală",
      detail: "Website-uri corporate sobre, prezentarea ariilor de practică juridică, ghiduri explicative și credibilitate profesională.",
    },
    {
      icon: "🪑",
      name: "Mobilier la Comandă & Producție",
      detail: "Galerii foto de impact, configuratoare orientative și fluxuri directe de colectare a cererilor de cotație de preț.",
    },
    {
      icon: "✂️",
      name: "Saloane Beauty & Clinici Estetice",
      detail: "Design elegant, cataloage vizuale de proceduri, tarife clare și legătură directă către sistemele de programare.",
    },
    {
      icon: "🎓",
      name: "Educație Privată, Cursuri & Grădinițe",
      detail: "Prezentarea programelor educaționale, a spațiilor și a tarifelor, cu formulare de înscriere și programare la tururi ghidate.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-100" id="domenii-activitate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-wider text-[#5243aa] uppercase mb-4 font-poppins">
            EXPERIENȚĂ SECTORIALĂ • DOMENII DE ACTIVITATE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] leading-tight lg:leading-[48px] font-extrabold text-[#150773] tracking-tight font-poppins">
            Soluții web adaptate{" "}
            <span className="text-[#10b981]">specificului industriei tale</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
            Fiecare domeniu de activitate are un comportament diferit al clienților. Înțelegem modul în care vizitatorii caută, compară și iau decizia de contact în diferite sectoare din România.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-[24px] bg-white border border-slate-200/80 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] hover:shadow-lg hover:border-emerald-200 transition-all flex flex-col gap-2.5 group"
            >
              <span className="text-3xl mb-1">{item.icon}</span>
              <h3 className="text-lg font-bold text-[#150773] font-poppins leading-snug">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs sm:text-sm text-slate-500">
          <span>*Nu ești în lista de mai sus? </span>
          <strong className="text-slate-800 font-semibold">Adaptăm strategia la orice domeniu legitim B2B sau B2C.</strong>
        </div>
      </div>
    </section>
  );
}
