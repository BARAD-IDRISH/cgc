import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chartered Growth Consultants – FZCO | UAE Business Setup & Corporate Tax",
    template: "%s | Chartered Growth Consultants – FZCO",
  },
  description:
    "Chartered Growth Consultants - FZCO provides premium corporate structuring, company formation, corporate tax registry, VAT advisory, bookkeeping, and UAE residency setups for international investors and corporate groups.",
  keywords: [
    "UAE Business setup",
    "Dubai business setup",
    "Company formation Dubai",
    "Corporate tax registration UAE",
    "Dubai corporate tax audit",
    "VAT filing Dubai",
    "IFZA freezone company formation",
    "Dubai Silicon Oasis businesssetup",
    "UAE residency solutions",
    "Corporate Structuring UAE",
  ],
  authors: [{ name: "Chartered Growth Consultants – FZCO" }],
  creator: "Chartered Growth Consultants – FZCO",
  metadataBase: new URL("https://charteredgrowth.ae"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charteredgrowth.ae",
    title: "Chartered Growth Consultants – FZCO | UAE Corporate Advisor",
    description:
      "Strategic Business Setup, Corporate Tax, VAT, Compliance & Advisory Solutions Across the UAE. Your trust-building advisory partner.",
    siteName: "Chartered Growth Consultants",
    images: [
      {
        url: "/images/hero-3d.png",
        width: 1200,
        height: 630,
        alt: "Chartered Growth Consultants – UAE Business Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chartered Growth Consultants – FZCO | UAE Corporate Advisor",
    description: "Empowering businesses. Enabling growth in the UAE. Expert corporate setups, tax, and compliance.",
    images: ["/images/hero-3d.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Chartered Growth Consultants – FZCO",
    "image": "https://charteredgrowth.ae/images/hero-3d.png",
    "@id": "https://charteredgrowth.ae/#organization",
    "url": "https://charteredgrowth.ae",
    "telephone": "+971 52 793 8572",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Building A2, IFZA, Dubai Silicon Oasis",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.123555,
      "longitude": 55.385722
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com"
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-navy-deep text-white antialiased flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
