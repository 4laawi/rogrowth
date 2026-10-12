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
  title: "Preț Creare Site Web în România: Costuri Reale în 2026",
  description:
    "Află cât costă crearea unui site web profesional în România în 2026. Ghid complet și transparent de prețuri: site de prezentare (€300–€400), lead generation (€700–€1.200) și magazine online (€1.000–€2.300+).",
  alternates: {
    canonical: "/pret-creare-site-web",
  },
  openGraph: {
    title: "Preț Creare Site Web în România: Costuri Reale în 2026",
    description:
      "Ghid transparent de costuri pentru dezvoltare web în România: site de prezentare, lead generation, magazine online și aplicații custom. Fără costuri ascunse.",
    url: "https://rogrowth.ro/pret-creare-site-web",
    siteName: "RoGrowth",
    locale: "ro_RO",
    type: "article",
    images: [
      {
        url: "https://rogrowth.ro/rogrowth-logo.png",
        width: 1200,
        height: 630,
        alt: "Preț Creare Site Web în România 2026 — RoGrowth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preț Creare Site Web în România: Costuri Reale în 2026",
    description:
      "Ghid transparent de costuri pentru dezvoltare web în România: site de prezentare, lead generation, magazine online și aplicații custom.",
    images: ["https://rogrowth.ro/rogrowth-logo.png"],
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
      "Servicii transparente de dezvoltare web, site-uri de prezentare, lead generation și magazine online în România, cu proprietate 100% și prețuri fixe agreate.",
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
