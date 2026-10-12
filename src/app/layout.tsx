import type { Metadata, Viewport } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rogrowth.ro"),
  title: {
    default: "RoGrowth — Creare Site-uri Web & Agenție Digital Marketing România",
    template: "%s | RoGrowth",
  },
  description:
    "Agenție de digital marketing și creare site-uri web în România. Construim website-uri rapide, optimizate pentru conversii și SEO pe Google, cu cod curat și transparență totală.",
  keywords: [
    "creare site web",
    "agentie web design",
    "web design bucuresti",
    "creare website romania",
    "magazin online",
    "optimizare seo",
    "dezvoltare web",
    "site prezentare",
    "agentie digital marketing",
  ],
  authors: [{ name: "RoGrowth Digital Agency" }],
  creator: "RoGrowth",
  publisher: "RoGrowth",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RoGrowth — Creare Site-uri Web & Agenție Digital Marketing România",
    description:
      "Dezvoltăm website-uri și experiențe digitale care aduc clienți reali afacerii tale. Fără promisiuni false, cu cod curat și proprietate 100%.",
    url: "https://rogrowth.ro",
    siteName: "RoGrowth",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "https://rogrowth.ro/rogrowth-logo.png",
        width: 1200,
        height: 630,
        alt: "RoGrowth Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoGrowth — Creare Site-uri Web & Agenție Digital Marketing România",
    description:
      "Website-uri rapide, optimizate pentru motoare de căutare și vânzări reale pentru afaceri din România.",
    images: ["https://rogrowth.ro/rogrowth-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${poppins.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-emerald-100 selection:text-emerald-900">
        <StructuredData />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
