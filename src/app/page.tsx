import type { Metadata } from "next";
import { AgencyHeroSection } from "@/components/sections/AgencyHeroSection";
import { AgencyCapabilitiesSection } from "@/components/sections/AgencyCapabilitiesSection";
import { AgencyServicesSection } from "@/components/sections/AgencyServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AgencyProcessSection } from "@/components/sections/AgencyProcessSection";
import { AgencyWhyUsSection } from "@/components/sections/AgencyWhyUsSection";
import { AgencyPricingOverviewSection } from "@/components/sections/AgencyPricingOverviewSection";
import { AgencySeoSection } from "@/components/sections/AgencySeoSection";
import { ResourcesPreviewSection } from "@/components/sections/ResourcesPreviewSection";
import { AgencyFaqSection } from "@/components/sections/AgencyFaqSection";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "RoGrowth — Agenție Digitală & Soluții Web România",
  description:
    "Agenție digitală pentru afaceri din România. Oferim servicii de creare site-uri web, e-commerce, SEO, promovare online și automatizări construite pentru rezultate și creștere profitabilă.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RoGrowth — Agenție Digitală & Soluții Web România",
    description:
      "Ajutăm companiile din România să-și construiască o prezență digitală puternică și profitabilă. Dezvoltare web, e-commerce, SEO și suport tehnic transparent.",
    url: "https://rogrowth.ro",
    siteName: "RoGrowth",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://rogrowth.ro/rogrowth-logo.png",
        width: 1200,
        height: 630,
        alt: "RoGrowth — Agenție Digitală & Soluții Web România",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoGrowth — Agenție Digitală & Soluții Web România",
    description:
      "Ajutăm companiile din România să-și construiască o prezență digitală puternică și profitabilă.",
    images: ["https://rogrowth.ro/rogrowth-logo.png"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero: Broad Digital Agency Brand Positioning */}
      <AgencyHeroSection />

      {/* 2. Why RoGrowth: Real Agency Differentiators, Values & Firm Commitments */}
      <AgencyWhyUsSection />

      {/* 3. Main Web-Development Entry Section (Core Commercial Starting Point) */}
      <AgencyServicesSection />

      {/* 4. Industries Served Across Romania */}
      <IndustriesSection />

      {/* 5. Selected Portfolio & Build Capabilities */}
      <PortfolioSection />

      {/* 6. Concise 4-Step Agency Collaboration Process */}
      <AgencyProcessSection />

      {/* 7. Core Services: Integrated Digital Partner (Web, SEO, Ads, Design, Automatizări, Mentenanță) */}
      <AgencyCapabilitiesSection />

      {/* 8. Transparent Website Pricing Ranges Overview */}
      <AgencyPricingOverviewSection />

      {/* 9. SEO Philosophy: Sustainable Technical Reality vs Fake Guarantees */}
      <AgencySeoSection />

      {/* 10. Educational Resources & Practical Guides Preview */}
      <ResourcesPreviewSection />

      {/* 11. General Agency & Commercial FAQ */}
      <AgencyFaqSection />

      {/* 12. Final Quote & Contact Section */}
      <QuoteCtaSection />
    </div>
  );
}
