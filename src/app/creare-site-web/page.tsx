import type { Metadata } from "next";
import { WebHeroSection } from "@/components/sections/WebHeroSection";
import { WebServicesDetailSection } from "@/components/sections/WebServicesDetailSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { WhyRoGrowthSection } from "@/components/sections/WhyRoGrowthSection";
import { WebCollaborationSection } from "@/components/sections/WebCollaborationSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CompactTechSection } from "@/components/sections/CompactTechSection";
import { PerformanceProofSection } from "@/components/sections/PerformanceProofSection";
import { SeoTransparencySection } from "@/components/sections/SeoTransparencySection";
import { OwnershipSection } from "@/components/sections/OwnershipSection";
import { WebFaqSection } from "@/components/sections/WebFaqSection";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Creare Site Web Profesional & Magazine Online",
  description:
    "Servicii complete de creare site web profesional, magazine online și platforme rapide în România. Viteză pe mobil, optimizare SEO tehnică și proprietate 100%.",
  alternates: {
    canonical: "/creare-site-web",
  },
  openGraph: {
    title: "Creare Site Web Profesional & Magazine Online",
    description:
      "Construim website-uri rapide, sigure și optimizate pentru conversie pe Google pentru afaceri din România. Fără costuri ascunse.",
    url: "https://rogrowth.ro/creare-site-web",
    siteName: "RoGrowth",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://rogrowth.ro/rogrowth-logo.png",
        width: 1200,
        height: 630,
        alt: "Creare Site Web Profesional — RoGrowth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creare Site Web Profesional & Magazine Online",
    description:
      "Construim website-uri rapide, sigure și optimizate pentru conversie pe Google pentru afaceri din România.",
    images: ["https://rogrowth.ro/rogrowth-logo.png"],
  },
};

export default function CreareSiteWebPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creare Site Web Profesional",
    "serviceType": "Dezvoltare Web & Web Design",
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
      "Servicii complete de dezvoltare web, creare site-uri de prezentare, magazine online și aplicații custom, cu viteză optimizată, fundație SEO și proprietate 100%.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "300",
      "highPrice": "2300",
      "offerCount": "3",
    },
  };

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
    ],
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. Dedicated Website Creation Hero (Concise & Conversion-Focused) */}
      <WebHeroSection />

      {/* 2. How Working With Us Feels (3D Characters, Delivery Standards & Predictable Process) */}
      <WebCollaborationSection />

      {/* 3. Scannable Website Types (6 Options, 15-20s scan) */}
      <WebServicesDetailSection />

      {/* 4. Selected Portfolio & Visual Proof (Promoted Above Tech) */}
      <PortfolioSection />

      {/* 5. Why RoGrowth (4 Clear Differentiator Pillars) */}
      <WhyRoGrowthSection />

      {/* 6. 4-Step Transparent Process & Timeline */}
      <ProcessSection />

      {/* 6. Pricing Packages (€300-€400, €700-€1,200, €1,000-€2,300+) & Payment Clarity */}
      <PricingSection />

      {/* 7. Compact Technology Block (Next.js, WordPress, WooCommerce, Shopify) */}
      <CompactTechSection />

      {/* 8. Compact Performance Engineering + Real Lighthouse Proof (98 score) */}
      <PerformanceProofSection />

      {/* 9. Technical SEO Foundation Checklist (Included vs Ongoing Strategy) */}
      <SeoTransparencySection />

      {/* 10. Client Ownership & Zero Lock-in Guarantee (4 Clear Pillars) */}
      <OwnershipSection />

      {/* 11. Website Creation Specific FAQ (Buyer-Focused Objections) */}
      <WebFaqSection />

      {/* 12. Final Quote & Contact Section */}
      <QuoteCtaSection />
    </div>
  );
}
