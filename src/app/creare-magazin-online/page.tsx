import type { Metadata } from "next";
import { EcommerceHeroSection } from "@/components/sections/ecommerce-page/EcommerceHeroSection";
import { EcommercePlatformsSection } from "@/components/sections/ecommerce-page/EcommercePlatformsSection";
import { RomanianIntegrationsSection } from "@/components/sections/ecommerce-page/RomanianIntegrationsSection";
import { EcommerceFeaturesSection } from "@/components/sections/ecommerce-page/EcommerceFeaturesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { EcommerceSeoSection } from "@/components/sections/ecommerce-page/EcommerceSeoSection";
import { EcommerceProcessSection } from "@/components/sections/ecommerce-page/EcommerceProcessSection";
import { EcommercePricingSection } from "@/components/sections/ecommerce-page/EcommercePricingSection";
import { EcommerceOwnershipSection } from "@/components/sections/ecommerce-page/EcommerceOwnershipSection";
import { EcommerceFaqSection } from "@/components/sections/ecommerce-page/EcommerceFaqSection";
import { QuoteCtaSection } from "@/components/sections/QuoteCtaSection";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Creare Magazin Online Profesional (Shopify & WooCommerce)",
  description:
    "Dezvoltare magazine online rapide pe Shopify și WooCommerce în România. Integrări automate Sameday Easybox, Fan Courier, Netopia & Stripe. Viteză pe mobil și proprietate 100%.",
  alternates: {
    canonical: "/creare-magazin-online",
  },
  openGraph: {
    title: "Creare Magazin Online Profesional (Shopify & WooCommerce)",
    description:
      "Construim magazine online de înaltă conversie pentru afaceri din România. Integrări curieri, plăți securizate cu cardul, AWB automat și optimizare SEO.",
    url: "https://rogrowth.ro/creare-magazin-online",
    siteName: "RoGrowth",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://rogrowth.ro/rogrowth-logo.png",
        width: 1200,
        height: 630,
        alt: "Creare Magazin Online Profesional — RoGrowth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creare Magazin Online Profesional (Shopify & WooCommerce)",
    description:
      "Magazine online rapide pe Shopify și WooCommerce: integrări Sameday Easybox, Fan Courier, plăți securizate și conversii ridicate pe mobil.",
    images: ["https://rogrowth.ro/rogrowth-logo.png"],
  },
};

export default function CreareMagazinOnlinePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creare Magazin Online Profesional",
    "serviceType": "Dezvoltare E-Commerce & Web Design",
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
      "Servicii profesionale de creare magazine online pe Shopify și WooCommerce în România: plăți securizate, integrări curieri cu locker Easybox, facturare automată și optimizare SEO.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "700",
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
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Creare Magazin Online",
        "item": "https://rogrowth.ro/creare-magazin-online",
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

      {/* 1. Dedicated E-Commerce Hero (Value Proposition & Trust) */}
      <EcommerceHeroSection />

      {/* 2. Platform Comparison (Shopify vs WooCommerce vs Custom Headless) */}
      <EcommercePlatformsSection />

      {/* 3. Romanian E-Commerce Ecosystem Integrations (Couriers, Payments, Invoicing, Tracking) */}
      <RomanianIntegrationsSection />

      {/* 4. Native High-Converting E-Commerce Features (1-Page Checkout, Dynamic Filters, Mobile First) */}
      <EcommerceFeaturesSection />

      {/* 5. Real Portfolio Proof (Including Baristas Coffee Shop e-commerce project) */}
      <PortfolioSection />

      {/* 6. Technical SEO Architecture for E-Commerce Catalog & Categories */}
      <EcommerceSeoSection />

      {/* 7. Predictable 4-Step E-Commerce Launch Methodology */}
      <EcommerceProcessSection />

      {/* 8. Transparent E-Commerce Pricing Packages & Milestone Terms */}
      <EcommercePricingSection />

      {/* 9. Client Ownership & Zero Lock-in Guarantee */}
      <EcommerceOwnershipSection />

      {/* 10. E-Commerce Specific FAQ with Schema Markup */}
      <EcommerceFaqSection />

      {/* 11. Final Quote Estimation & Consultation Form */}
      <QuoteCtaSection />
    </div>
  );
}
