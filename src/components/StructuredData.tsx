export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RoGrowth",
    "url": "https://rogrowth.ro",
    "logo": "https://rogrowth.ro/rogrowth-logo.png",
    "description": "Agenție de digital marketing și creare website-uri pentru afaceri din România. Website-uri rapide, optimizate pentru motoarele de căutare și orientate spre generare de clienți.",
    "email": "contact@rogrowth.ro",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "București",
      "addressCountry": "RO"
    },
    "areaServed": {
      "@type": "Country",
      "name": "România"
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RoGrowth",
    "url": "https://rogrowth.ro",
    "inLanguage": "ro-RO",
    "description": "Dezvoltăm website-uri rapide și experiențe digitale care aduc clienți reali afacerii tale."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
