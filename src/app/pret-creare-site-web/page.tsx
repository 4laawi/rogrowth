import type { Metadata } from "next";
import { PriceHeroSection } from "@/components/sections/pricing-page/PriceHeroSection";
import { PriceOverviewTableSection } from "@/components/sections/pricing-page/PriceOverviewTableSection";
import { CostFactorsSection } from "@/components/sections/pricing-page/CostFactorsSection";
import { WhatIsIncludedSection } from "@/components/sections/pricing-page/WhatIsIncludedSection";
import { HiddenCostsSection } from "@/components/sections/pricing-page/HiddenCostsSection";
import { TiersComparisonSection } from "@/components/sections/pricing-page/TiersComparisonSection";
import { RoGrowthPricingSection } from "@/components/sections/pricing-page/RoGrowthPricingSection";
import { PricingFaqSection } from "@/components/sections/pricing-page/PricingFaqSection";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Preț Creare Site Web în România: Costuri Reale în 2026 | RoGrowth",
  description:
    "Află cât costă crearea unui site web profesional în România în 2026. Ghid complet și transparent de prețuri: site de prezentare (€300–€400), lead generation (€700–€1.200) și magazine online (€1.000–€2.300+).",
  alternates: {
    canonical: "/pret-creare-site-web",
  },
  openGraph: {
    title: "Preț Creare Site Web în România: Costuri Reale în 2026 | RoGrowth",
    description:
      "Ghid transparent de costuri pentru dezvoltare web în România: site de prezentare, lead generation, magazine online și aplicații custom. Fără costuri ascunse.",
    url: "https://rogrowth.ro/pret-creare-site-web",
    siteName: "RoGrowth",
    locale: "ro_RO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preț Creare Site Web în România: Costuri Reale în 2026 | RoGrowth",
    description:
      "Ghid transparent de costuri pentru dezvoltare web în România: site de prezentare, lead generation, magazine online și aplicații custom.",
  },
};

export default function PretCreareSiteWebPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Acasă",
        "item": "https://rogrowth.ro",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Creare Site Web",
        "item": "https://rogrowth.ro/creare-site-web",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Ghid Prețuri 2026",
        "item": "https://rogrowth.ro/pret-creare-site-web",
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Preț creare site web în România: costuri reale în 2026",
    "description":
      "Ghid transparent și detaliat despre cât costă realizarea unui website în România în 2026: site-uri de prezentare, website-uri lead-generation, magazine online, factori de cost și taxe ascunse.",
    "author": {
      "@type": "Organization",
      "name": "RoGrowth",
      "url": "https://rogrowth.ro",
    },
    "publisher": {
      "@type": "Organization",
      "name": "RoGrowth",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rogrowth.ro/rogrowth-logo.png",
      },
    },
    "datePublished": "2026-01-15T08:00:00+02:00",
    "dateModified": "2026-10-03T17:00:00+02:00",
    "mainEntityOfPage": "https://rogrowth.ro/pret-creare-site-web",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "De ce variază prețurile atât de mult de la o agenție la alta în România?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Diferența majoră vine din timpul efectiv alocat, calitatea codului și experiența echipei. Un site foarte ieftin (ex. 100–150€) este de regulă un șablon descărcat de pe internet cu viteză slabă pe mobil. Un site profesional (€300–€1.200+) implică structură de conversie, design personalizat pe brand, cod curat, teste de viteză și indexare pe Google.",
        },
      },
      {
        "@type": "Question",
        "name": "Cât costă întreținerea lunară (mentenanța) a unui site web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Website-ul dezvoltat de RoGrowth poate funcționa fără costuri obligatorii către agenție dacă nu ai nevoie de modificări lunare. Pentru securitate continuă, backup-uri regulate și actualizări de conținut, oferim pachete flexibile de mentenanță.",
        },
      },
      {
        "@type": "Question",
        "name": "Există costuri ascunse după ce plătesc realizarea site-ului?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nu. La RoGrowth lucrăm pe bază de preț fix agreat în contract. Singurele costuri externe obligatorii sunt cele către furnizorii terți pe care îi deții direct: numele de domeniu (ex. .ro ~30-40€) și găzduirea web (de la 5–15€/lună).",
        },
      },
      {
        "@type": "Question",
        "name": "Pot începe cu un site de €300–€400 și să-l dezvolt ulterior într-un magazin online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, absolut. Construim fiecare website cu o arhitectură curată și modulară, astfel încât putem adăuga module noi, plăți online sau funcționalități avansate ulterior fără a reface site-ul de la zero.",
        },
      },
      {
        "@type": "Question",
        "name": "Ce avans se percepe și cum se realizează plata?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structura standard este de 30% avans la semnarea contractului și demararea lucrărilor, iar restul de 70% se achită doar la finalizare, după testare și aprobare completă, pe baza facturii fiscale.",
        },
      },
      {
        "@type": "Question",
        "name": "Ce se întâmplă dacă am nevoie de mici modificări după lansare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sunt incluse două runde complete de revizii înainte de lansare. După lansare, oferim asistență tehnică pentru remedierea oricăror erori neprevăzute.",
        },
      },
      {
        "@type": "Question",
        "name": "De ce un magazin online costă mai mult decât un site de prezentare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un magazin online implică catalog de produse cu variații, procesatori de plăți cu cardul (Stripe, Netopia), generare automată AWB pentru curieri, facturare automată și securitate extinsă.",
        },
      },
      {
        "@type": "Question",
        "name": "Oferiți contract și factură fiscală pentru serviciile prestate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, fără excepție. Toate colaborările RoGrowth se desfășoară legal pe baza unui contract de prestări servicii cu drepturi de proprietate 100% și factură fiscală.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicii Creare Site Web & Magazine Online",
    "provider": {
      "@type": "Organization",
      "name": "RoGrowth",
      "url": "https://rogrowth.ro",
    },
    "areaServed": {
      "@type": "Country",
      "name": "România",
    },
    "description":
      "Servicii transparente de dezvoltare web, site-uri de prezentare, lead generation și magazine online în România, cu proprietate 100% și prețuri fixe agrate.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "300",
      "highPrice": "2300",
      "offerCount": "3",
    },
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. Hero with Clear Direct Answer & Table of Contents */}
      <PriceHeroSection />

      {/* 2. Comprehensive Pricing Overview Table */}
      <PriceOverviewTableSection />

      {/* 3. 10 Factors That Affect Website Cost */}
      <CostFactorsSection />

      {/* 4. What Is Normally Included (Quality Baseline) */}
      <WhatIsIncludedSection />

      {/* 5. Additional Costs People Forget (Domain, Hosting, Maintenance etc.) */}
      <HiddenCostsSection />

      {/* 6. Objective Comparison: €300 vs €1.000 vs €2.000+ */}
      <TiersComparisonSection />

      {/* 7. Actual RoGrowth Pricing Packages & Payment Terms */}
      <RoGrowthPricingSection />

      {/* 8. Pricing FAQ Section */}
      <PricingFaqSection />

      {/* 9. Final Quote CTA & Custom Estimation Form */}
      <QuoteCtaSection />
    </div>
  );
}
